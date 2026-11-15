# 🚑 Emergency Health Aid

### An Interactive First-Aid and Emergency Assistance Platform

<p align="center">
  <a href="https://emergency-health-aid-website.onrender.com/">
    <strong>🌐 Visit Live Website</strong>
  </a>
</p>

**Emergency Health Aid** is a web-based platform developed to provide accessible first-aid information and basic emergency guidance. It helps users explore common medical emergencies, understand essential first-aid procedures and navigate an interactive emergency decision-support system.

The application is built using **Python and Flask**, with HTML and CSS for the frontend. It uses predefined Python data structures and rule-based logic to deliver information without requiring a database or user authentication.

---

## 🌐 Live Application

**Website:** https://emergency-health-aid-website.onrender.com/

**Source Code:** https://github.com/nihalmoha2912/Emergency-Health-Aid-Website

---

## ✨ Key Features

### 1. First-Aid Information
- Structured first-aid guides for common medical emergencies.
- Step-by-step emergency response instructions.
- Symptoms and warning signs.
- Recommended actions and precautions.
- Guidance on when to seek immediate medical assistance.

### 2. Interactive Emergency Assistant
- Rule-based emergency decision tree.
- Interactive questions to identify the type of emergency.
- Guides users through predefined emergency scenarios.
- Provides relevant first-aid information based on selected responses.

### 3. Search Functionality
- Search for specific medical conditions and emergencies.
- Keyword-based search across first-aid guides.
- Displays relevant information based on search terms.

### 4. Emergency Categories

First-aid information is organized into eight categories:

| Category | Examples |
|---|---|
| Cardiac | Heart Attack, Cardiac Arrest |
| Respiratory | Choking, Breathing Difficulties |
| Injuries | Severe Bleeding, Fractures |
| Burns | Thermal and Chemical Burns |
| Neurological | Stroke, Seizures |
| Poisoning | Poisoning Emergencies |
| Allergic | Severe Allergic Reactions |
| Environmental | Heatstroke, Snakebite |

### 5. Emergency Contacts
Provides essential emergency contact information, including:

- National Emergency Response: 112
- Ambulance: 108
- National Ambulance Service: 102
- Fire and Rescue: 101

### 6. Hospital Information
A dedicated section for hospital-related information.

---

## 🛠️ Technology Stack

| Technology | Application |
|---|---|
| Python | Core application logic |
| Flask | Backend web framework |
| HTML5 | Frontend structure |
| CSS3 | Styling and responsive presentation |
| Jinja2 | Dynamic HTML templating |
| Gunicorn | Production WSGI server |
| Git | Version control |
| GitHub | Source code management |
| Render | Application deployment and hosting |

---

## 🏗️ Application Architecture

The application follows a simple client-server architecture.

**Frontend Layer**
- HTML templates.
- CSS styling.
- User navigation and interaction.

**Backend Layer**
- Flask application.
- URL routing and request handling.
- Search functionality.
- Emergency decision-tree processing.

**Data Layer**
- Predefined Python data structures.
- First-aid guides and emergency categories.
- Emergency contact information.
- Rule-based decision-tree structure.

### Application Workflow

```text
       USER
        |
        v
   FLASK WEB APP
        |
        v
   ROUTE HANDLING
        |
        v
   APPLICATION LOGIC
        |
        v
   PYTHON DATA
        |
        v
   JINJA2 TEMPLATES
        |
        v
   HTML RESPONSE
        |
        v
      USER
```

The application does not require an external database, user registration system or chatbot.

---

## 📂 Project Structure

```text
Emergency-Health-Aid-Website/
│
├── app.py
├── data.py
├── requirements.txt
├── README.md
│
├── templates/
│   ├── index.html
│   ├── first_aid.html
│   ├── guide.html
│   ├── search.html
│   ├── emergency.html
│   ├── assistant_result.html
│   ├── contacts.html
│   ├── hospitals.html
│   └── about.html
│
└── static/
    ├── css/
    ├── images/
    └── js/
```

### Important Files

- `app.py` – Flask application, routes and backend functionality.
- `data.py` – First-aid content, emergency categories, contact information and decision-tree data.
- `templates/` – HTML templates rendered by Flask.
- `static/` – CSS, images and other static resources.
- `requirements.txt` – Python dependencies.

---

## ⚙️ Installation and Setup

To run the application locally:

### Prerequisites

- Python 3.10+
- Git
- pip

### 1. Clone the repository

```bash
git clone https://github.com/nihalmoha2912/Emergency-Health-Aid-Website.git
```

### 2. Navigate to the project directory

```bash
cd Emergency-Health-Aid-Website
```

### 3. Create a virtual environment

```bash
python -m venv venv
```

### 4. Activate the environment

**Windows:**

```bash
venv\Scripts\activate
```

**Linux/macOS:**

```bash
source venv/bin/activate
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

### 6. Run the application

```bash
python app.py
```

### 7. Open the website

Navigate to:

```text
http://127.0.0.1:5000
```

---

## 🚀 Deployment

The application is deployed using **Render**.

The GitHub repository is connected to Render for deployment.

| Configuration | Value |
|---|---|
| Hosting Platform | Render |
| Runtime | Python |
| Build Command | `pip install -r requirements.txt` |
| Start Command | `gunicorn app:app` |
| Source Control | GitHub |

The application can be automatically redeployed whenever changes are pushed to the connected GitHub repository.

---

## 🔮 Future Enhancements

Potential improvements include:

- Multilingual first-aid information.
- Improved mobile accessibility.
- Expanded emergency decision-tree scenarios.
- Integration of verified medical information sources.
- Location-based hospital information.
- Additional emergency categories and educational resources.

---

## ⚠️ Medical Disclaimer

This platform is intended strictly for educational and informational purposes.

The information provided is not a substitute for professional medical advice, diagnosis or treatment.

In life-threatening situations, contact emergency services immediately. In India, dial **112** for emergency assistance.

First-aid information should be reviewed by qualified medical professionals before being relied upon.

---

## 👨‍💻 Developer

**Nihal Mohammed**

GitHub: https://github.com/nihalmoha2912

Project: Emergency Health Aid Website

---

<p align="center">
  <strong>Built with Python and Flask</strong>
  <br>
  Making essential first-aid information more accessible.
</p>
