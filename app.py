from flask import Flask, render_template, request, abort
from data import GUIDES, CATEGORIES, CONTACTS, TREE

app = Flask(__name__)
BY_SLUG = {g["slug"]: g for g in GUIDES}


@app.context_processor
def inject():
    return {"categories": CATEGORIES}


@app.route("/")
def home():
    return render_template("index.html", guides=GUIDES)


@app.route("/first-aid")
def first_aid():
    cat = request.args.get("category")
    items = [g for g in GUIDES if not cat or g["category"] == cat]
    return render_template("first_aid.html", guides=items, active=cat)


@app.route("/first-aid/<slug>")
def guide(slug):
    g = BY_SLUG.get(slug) or abort(404)
    return render_template("guide.html", g=g)


@app.route("/search")
def search():
    q = request.args.get("q", "").strip().lower()
    results = []
    if q:
        terms = q.replace("-", " ").split()
        for g in GUIDES:
            blob = " ".join([g["name"], g["category"], g["keywords"], g["summary"],
                             " ".join(g["symptoms"])]).lower().replace("-", " ")
            if all(t in blob for t in terms):
                results.append(g)
    return render_template("search.html", q=q, results=results)


@app.route("/emergency")
def emergency():
    node_id = request.args.get("n", "start")
    if node_id.startswith("result:"):
        slug = node_id.split(":", 1)[1]
        return render_template("assistant_result.html", g=BY_SLUG.get(slug))
    node = TREE.get(node_id) or abort(404)
    return render_template("emergency.html", node=node)


@app.route("/contacts")
def contacts():
    return render_template("contacts.html", contacts=CONTACTS)


@app.route("/hospitals")
def hospitals():
    return render_template("hospitals.html")


@app.route("/about")
def about():
    return render_template("about.html")


if __name__ == "__main__":
    app.run(debug=True)
