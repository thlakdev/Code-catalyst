# Code Catalyst

Code Catalyst is an AI-powered developer learning platform designed to help programmers find bugs, understand the root cause, and learn the correct fix through actionable code review.

The platform goes beyond simple bug detection. It explains what is wrong, why it is wrong, and how to fix it in a way that helps developers improve their skills over time.

## Why this project exists

Traditional code review tools mostly focus on identifying syntax issues or runtime bugs. Code Catalyst focuses on the developer learning curve.

Instead of just pointing out a problem, the platform helps users:

- identify the bug
- understand the root cause
- see the correct fix
- learn the underlying concept behind the solution

## Core features

- AI code review for submitted code
- Bug detection and debugging support
- Compile-style feedback and execution simulation
- Performance analysis and complexity suggestions
- Code rewriting and modernization recommendations
- Educational explanations designed to help developers learn

## Tech stack

### Frontend
- React
- Vite or React app structure
- CSS for styling

### Backend
- Python
- FastAPI
- Google Gemini API for AI-generated feedback

### Architecture
- Frontend client for user interaction
- Python backend for API endpoints
- AI analysis layer for review, debugging, optimization, and refactoring

## Project structure

```text
Code-catalyst/
├── App.css
├── App.jsx
├── README.md
├── index.css
├── index.html
├── main.jsx
├── main.py
├── metadata.json
├── package.json
├── package-lock.json
├── test_models.py
└── ...
```

## Backend API overview

The backend service exposes several endpoints in `main.py`:

- `POST /review` — general code review and explanation
- `POST /debug` — bug detection and root-cause analysis
- `POST /compile` — compile/interpreter-style feedback
- `POST /performance` — performance analysis with complexity suggestions
- `POST /rewrite` — refactor code into cleaner modern code

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/thlakdev/Code-catalyst.git
cd Code-catalyst
```

### 2. Set up the backend

Create a Python virtual environment and install the required dependencies:

```bash
python -m venv .venv
source .venv/bin/activate   # On Windows: .venv\Scripts\activate
pip install fastapi uvicorn google-generativeai python-dotenv
```

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_api_key_here
```

Then run the backend:

```bash
uvicorn main:app --reload
```

### 3. Set up the frontend

Install frontend dependencies:

```bash
npm install
```

Start the app:

```bash
npm run dev
```

## Environment variables

| Variable | Description |
| --- | --- |
| `GEMINI_API_KEY` | API key used to authenticate with Google Gemini |

## Example workflow

1. Open the app in the browser.
2. Paste or write code into the editor.
3. Select the language.
4. Run review/debug/compile/performance/refactor actions.
5. Read the explanation and compare it with the fix.
6. Learn from the output and improve your coding skills.

## Value proposition

Code Catalyst is designed to act like a mentor for developers, not just a validator.

It helps users:

- improve confidence
- learn from mistakes
- understand code quality
- build stronger debugging habits
- reduce repeated errors over time

## Roadmap

- improve UI/UX for better learning outcomes
- support more programming languages
- generate structured learning summaries after each review
- add user accounts and saved code history
- add code comparison between incorrect and corrected versions
- deploy the project for live usage

## Contributing

Contributions are welcome.

If you want to contribute:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## License

This project currently does not specify a license. If you plan to publish it publicly, it is recommended to add an open-source license such as MIT.

## Notes

This project is a strong concept with a clear educational focus. It can be improved further by polishing the UI, securing API credentials, and refining the backend logic to provide more consistent and structured responses.

---

Code Catalyst: Find the bug, learn the fix.
