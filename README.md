# Emergency Health Aid (Flask)

No database, login or chatbot. Content lives in `data.py`.

## Run
    python -m venv venv
    venv\Scripts\activate        # macOS/Linux: source venv/bin/activate
    pip install -r requirements.txt
    python app.py                # http://127.0.0.1:5000

## Deploy (Render)
Build: `pip install -r requirements.txt`  Start: `gunicorn app:app`

## Edit content
Add or change entries in `GUIDES` (data.py). Assistant flow is in `TREE`.
