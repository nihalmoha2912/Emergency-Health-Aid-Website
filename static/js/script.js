const map = L.map("map").setView([20.59, 78.96], 5);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19, attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const statusEl = document.getElementById("status");
const listEl = document.getElementById("list");
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

async function loadHospitals(lat, lon) {
  statusEl.textContent = "Searching for hospitals...";
  const q = `[out:json][timeout:25];(node["amenity"="hospital"](around:5000,${lat},${lon});way["amenity"="hospital"](around:5000,${lat},${lon}););out center 40;`;
  try {
    const res = await fetch("https://overpass-api.de/api/interpreter", { method: "POST", body: "data=" + encodeURIComponent(q) });
    const data = await res.json();
    const places = data.elements.map(e => ({
      name: (e.tags && e.tags.name) || "Hospital (unnamed)",
      phone: e.tags && (e.tags.phone || e.tags["contact:phone"]),
      lat: e.lat || (e.center && e.center.lat), lon: e.lon || (e.center && e.center.lon)
    })).filter(p => p.lat && p.lon);
    listEl.innerHTML = "";
    places.forEach(p => {
      L.marker([p.lat, p.lon]).addTo(map).bindPopup(`<strong>${esc(p.name)}</strong>${p.phone ? "<br>" + esc(p.phone) : ""}`);
      listEl.insertAdjacentHTML("beforeend",
        `<div class="col-md-6 col-lg-4"><div class="card-lite"><strong>${esc(p.name)}</strong>
         <div class="muted small">${p.phone ? `<a href="tel:${esc(p.phone)}">${esc(p.phone)}</a> &middot; ` : ""}
         <a href="https://www.openstreetmap.org/directions?to=${p.lat}%2C${p.lon}" target="_blank" rel="noopener">Directions</a></div></div></div>`);
    });
    statusEl.textContent = places.length ? `${places.length} hospitals found.` : "No hospitals found within 5 km. Call 108 or 112.";
  } catch (err) {
    statusEl.textContent = "Could not load hospitals. Check your connection or call 108 / 112.";
  }
}

document.getElementById("locate").addEventListener("click", () => {
  if (!navigator.geolocation) { statusEl.textContent = "Geolocation not supported."; return; }
  statusEl.textContent = "Getting your location...";
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude: lat, longitude: lon } = pos.coords;
    map.setView([lat, lon], 14);
    L.circleMarker([lat, lon], { radius: 8, color: "#d32f2f" }).addTo(map).bindPopup("You are here");
    loadHospitals(lat, lon);
  }, () => { statusEl.textContent = "Location permission denied. Allow it, or call 108 / 112."; });
});
