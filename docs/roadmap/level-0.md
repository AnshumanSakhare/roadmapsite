# Level 0: Prerequisites

**Duration:** 1-2 weeks  
**Target:** Complete beginners who need to set up their environment and learn basics

---

## 🎯 Learning Outcomes

By the end of this level, you will:

✓ Have a working Python environment  
✓ Understand how to get and manage API keys  
✓ Know how to run Jupyter notebooks  
✓ Be familiar with basic Python concepts (if needed)  
✓ Know how to install and manage packages  

---

## 📚 What You Learn

### 1. Environment Setup (3-4 hours)
- Install Python 3.9+
- Choose an IDE (VS Code, Jupyter, PyCharm)
- Create a project directory
- Set up a virtual environment (venv/conda)

**Reference:** Check your OS instructions:
- Windows: [Python setup guide](https://www.python.org/downloads/)
- Mac: Homebrew recommended
- Linux: Use package manager

### 2. API Key Management (2-3 hours)
- Get API keys from major providers:
  - OpenAI (ChatGPT API)
  - Google Gemini
  - Anthropic Claude
  - Hugging Face
- Store keys securely in `.env` files
- Never commit keys to GitHub

**Best Practices:**
```
Create a .env file in your project root:
OPENAI_API_KEY=sk-...
GOOGLE_API_KEY=...
ANTHROPIC_API_KEY=...
```

Load with Python:
```python
from dotenv import load_dotenv
import os
load_dotenv()
api_key = os.getenv('OPENAI_API_KEY')
```

### 3. Jupyter Notebooks Basics (2-3 hours)
- Install Jupyter: `pip install jupyter`
- Run Jupyter: `jupyter notebook`
- Understand cells (code, markdown, raw)
- Keyboard shortcuts (Shift+Enter, etc.)
- Installing packages in notebooks

### 4. Python Fundamentals Review (Self-paced)

If you're comfortable with Python, **skip this section**.

Key concepts:
- Variables and data types
- Lists, dictionaries, tuples
- Functions
- if/else statements
- Loops (for, while)
- String formatting

**Resource:** Review one of these:
- [Python Official Tutorial](https://docs.python.org/3/tutorial/)
- [Codecademy Python Course](https://www.codecademy.com/learn/learn-python-3)

### 5. Package Management (2-3 hours)
- Understanding `pip` and `conda`
- Installing packages: `pip install requests`
- Managing dependencies: `requirements.txt`
- Creating `requirements.txt`: `pip freeze > requirements.txt`
- Virtual environments isolate projects

---

## 🔧 Setup Checklist

- [ ] Python 3.9+ installed
- [ ] Virtual environment created and activated
- [ ] Jupyter notebook working
- [ ] At least one API key obtained (start with free tier)
- [ ] `.env` file created with sample API key
- [ ] Can run: `python --version` and `jupyter --version`
- [ ] Can import: `import requests`, `import dotenv`

---

## 📚 Projects to Explore

### Hands-On Practice

1. **Hello World API Call**
   ```python
   import openai
   openai.api_key = "your-key-here"
   response = openai.ChatCompletion.create(
       model="gpt-3.5-turbo",
       messages=[{"role": "user", "content": "Hello!"}]
   )
   print(response.choices[0].message.content)
   ```

2. **Load and Display Data**
   ```python
   import pandas as pd
   data = pd.read_csv("sample.csv")
   print(data.head())
   ```

3. **Create and Run a Jupyter Notebook**
   - Create cells with Python code
   - Add markdown cells with notes
   - Practice running cells in different orders

---

## ✅ Checkpoint Tasks

Complete these to verify your setup:

### Task 1: Environment Setup (Total: 30 min)
- [ ] Create a new folder: `genai-learning`
- [ ] Create a virtual environment
- [ ] Activate it
- [ ] Run: `python --version` (should be 3.9+)

### Task 2: Package Installation (Total: 30 min)
- [ ] Install: `pip install requests python-dotenv jupyter`
- [ ] Create `requirements.txt`
- [ ] Create a new virtual env and install from `requirements.txt`

### Task 3: API Key Setup (Total: 45 min)
- [ ] Get a free API key from OpenAI (ChatGPT API)
- [ ] Create `.env` file with your key
- [ ] Write a test script that loads the key without printing it
- [ ] Confirm the key is loaded successfully

### Task 4: First Jupyter Notebook (Total: 1 hour)
- [ ] Launch Jupyter notebook
- [ ] Create a new notebook: `hello.ipynb`
- [ ] Add 3 cells:
  - Cell 1: Code that prints "Hello, GenAI!"
  - Cell 2: Markdown with "## My Learning"
  - Cell 3: Code that imports and uses one library (requests, dotenv, etc.)
- [ ] Run all cells and verify output

### Task 5: API Test (Total: 1 hour)
- [ ] Create a notebook: `api_test.ipynb`
- [ ] Load your API key from `.env`
- [ ] Make a simple API call to your chosen provider
- [ ] Print the response
- [ ] Don't commit the notebook with your key!

---

## 💡 Common Issues & Solutions

**Issue:** "Python command not found"
- **Solution:** Reinstall Python, make sure it's in PATH

**Issue:** "ModuleNotFoundError: No module named 'xyz'"
- **Solution:** Install the package: `pip install xyz`

**Issue:** "API key not recognized"
- **Solution:** Check `.env` file format, ensure no quotes around key

**Issue:** "Jupyter doesn't start"
- **Solution:** Try `python -m jupyter notebook`

---

## 🎓 Next Steps

Once you complete all checkpoint tasks:

1. ✅ Your environment is ready
2. ✅ You can run Python and notebooks
3. ✅ You have API access
4. ✅ You can manage dependencies

**Ready for Level 1?** → [LLM Basics](./level-1.md)

---

## 📖 FAQ

**Q: Which API key should I start with?**  
A: OpenAI is most popular. You get $5 free credits. Gemini also has a free tier.

**Q: Do I need to pay for APIs?**  
A: Not immediately. All major providers have free tiers for learning.

**Q: Virtual environment or conda?**  
A: Either works. Conda is easier for installing some packages, venv is lighter.

**Q: Can I use Google Colab instead of local setup?**  
A: Yes, but we recommend local setup to learn full development workflow.

---

## 🔗 Resources

- [Python Official Docs](https://docs.python.org/)
- [Virtual Environments Guide](https://docs.python.org/3/tutorial/venv.html)
- [Jupyter Getting Started](https://jupyter.org/install)
- [SemVer API Keys Guide](https://cheatsheetseries.owasp.org/cheatsheets/API_Key_Management_Cheat_Sheet.html)

---

**Status:** Prerequisites Complete ✓  
**Next:** [Level 1: LLM Basics →](./level-1.md)
