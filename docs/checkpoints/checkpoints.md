# Learning Checkpoints

Track your progress through the GenAI curriculum. Complete checkpoint tasks at each level to verify your understanding and build a portfolio.

---

## 📋 Level 0: Prerequisites Checkpoints

**Estimated Time:** 1-2 weeks

### Checkpoint 0.1: Environment Setup ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Python 3.9+ installed and verified
- [ ] Virtual environment created
- [ ] Jupyter notebook installed and working
- [ ] First .ipynb notebook created and saved
- [ ] Can run: `jupyter notebook` successfully

**Validation:**
```bash
python --version  # Should be 3.9+
jupyter --version # Should work
```

**Portfolio Piece:** Screenshot of working Jupyter

---

### Checkpoint 0.2: API Key Management ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Obtained API key from OpenAI (or alternative)
- [ ] Created `.env` file (in .gitignore)
- [ ] Loaded API key with python-dotenv
- [ ] Created test script that uses API key
- [ ] Verified API key works without printing it

**Sample Code:**
```python
from dotenv import load_dotenv
import os
load_dotenv()
api_key = os.getenv('OPENAI_API_KEY')
# Use api_key safely
```

**Portfolio Piece:** GitHub commit with .env in .gitignore

---

### Checkpoint 0.3: Package Management ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Created requirements.txt file
- [ ] Installed 5+ packages via pip
- [ ] Created fresh venv and installed from requirements.txt
- [ ] Verified all packages work
- [ ] Pushed requirements.txt to GitHub

**Sample requirements.txt:**
```
python-dotenv==1.0.0
requests==2.31.0
jupyter==1.0.0
openai==1.0.0
pandas==2.0.0
```

**Portfolio Piece:** GitHub repo with requirements.txt

---

## ✅ Level 1: LLM Basics Checkpoints

**Estimated Time:** 2-3 weeks

### Checkpoint 1.1: First API Call ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Chose LLM provider (OpenAI/Gemini/Claude)
- [ ] Made successful API call
- [ ] Displayed response in console
- [ ] Tracked tokens and cost
- [ ] Committed code to GitHub

**Sample:**
```python
from openai import OpenAI
client = OpenAI()
response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "Hello!"}]
)
print(response.choices[0].message.content)
```

**Portfolio Piece:** GitHub repo with `first_api_call.py`

---

### Checkpoint 1.2: Prompt Engineering ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Written 5 different prompts for same task
- [ ] Compared output quality
- [ ] Used system message effectively
- [ ] Tested few-shot prompting
- [ ] Documented best practice

**Experiments:**
- Basic prompt (e.g., "Explain Python")
- Specific prompt (e.g., "Explain Python in 3 sentences for a beginner")
- System message + prompt
- Few-shot example
- Chain-of-thought prompt

**Portfolio Piece:** Markdown file comparing prompts and results

---

### Checkpoint 1.3: Token Counting ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Used tiktoken to count tokens
- [ ] Calculated costs for 3 prompts
- [ ] Compared token efficiency
- [ ] Understood context window limits
- [ ] Documented findings

**Sample:**
```python
import tiktoken
enc = tiktoken.encoding_for_model("gpt-3.5-turbo")
tokens = len(enc.encode("Your text"))
cost = (tokens / 1000) * 0.0015  # pricing
```

**Portfolio Piece:** Jupyter notebook with token analysis

---

### Checkpoint 1.4: Streaming ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Implemented streaming API call
- [ ] Displayed output in real-time
- [ ] Measured latency vs non-streaming
- [ ] Tested with Streamlit app
- [ ] Pushed to GitHub

**Portfolio Piece:** `streaming_demo.py` with before/after comparison

---

## ✅ Level 2: Simple GenAI Apps Checkpoints

**Estimated Time:** 3-4 weeks

### Checkpoint 2.1: LangChain Chain ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Created ChatPromptTemplate
- [ ] Built conversation chain with memory
- [ ] Tested multi-turn conversation
- [ ] Saved as `langchain_chat.py`
- [ ] Pushed to GitHub

**Tests:**
- 3+ back-and-forth exchanges
- Memory works correctly
- Context window doesn't exceed limits

**Portfolio Piece:** GitHub repo with `langchain_chat.py`

---

### Checkpoint 2.2: Streamlit App ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Built interactive Streamlit app
- [ ] Included: chat interface, controls, output display
- [ ] Tested locally with `streamlit run app.py`
- [ ] Added at least one feature (mode, temperature, etc.)
- [ ] Committed to GitHub

**App Requirements:**
- Title and description
- User text input
- LLM response output
- At least one control (slider/dropdown)
- Error handling

**Portfolio Piece:** Live Streamlit app link

---

### Checkpoint 2.3: Output Parsing ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Created Pydantic model
- [ ] Implemented JSONOutputParser
- [ ] Extracted structured data from LLM
- [ ] Tested with 3+ different inputs
- [ ] Verified Python object output

**Sample:**
```python
from pydantic import BaseModel
from langchain.output_parsers import PydanticOutputParser

class Person(BaseModel):
    name: str
    age: int

parser = PydanticOutputParser(pydantic_object=Person)
```

**Portfolio Piece:** `output_parsing_demo.py` notebook

---

### Checkpoint 2.4: Deploy App ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Deployed to Streamlit Cloud OR HuggingFace Spaces
- [ ] Set environment variables for API keys
- [ ] Tested live endpoint
- [ ] Added to portfolio website
- [ ] Shared link publicly

**Deployment Checklist:**
- App works locally first
- requirements.txt included
- API key in .gitignore
- .env secrets configured
- README with instructions

**Portfolio Piece:** Live deployed app URL

---

## ✅ Level 3: RAG + Agents Checkpoints

**Estimated Time:** 4-6 weeks

### Checkpoint 3.1: RAG System ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Created document loader
- [ ] Built vector database with embeddings
- [ ] Implemented similarity search
- [ ] Tested with 5+ queries
- [ ] Saved as `rag_system.py`

**Verification:**
- Retrieved documents are relevant
- Similarity scores make sense
- Response quality improved

**Portfolio Piece:** Working RAG system code

---

### Checkpoint 3.2: Vector Database ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Indexed 10+ documents
- [ ] Tested similarity search
- [ ] Compared top-3 vs top-5 results
- [ ] Added metadata filtering
- [ ] Documented performance

**Tests:**
- Semantic search works
- Metadata filtering reduces results
- Recall rate measured

**Portfolio Piece:** Comparison report

---

### Checkpoint 3.3: Simple Agent ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Defined 3-5 custom tools
- [ ] Built agent that selects tools
- [ ] Tested with 5+ prompts
- [ ] Verified tool selection is correct
- [ ] Saved as `simple_agent.py`

**Tools Examples:**
- Calculator tool
- Web search tool
- Database lookup tool
- File reader tool

**Portfolio Piece:** Agent code + sample outputs

---

### Checkpoint 3.4: RAG + Agent System ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Combined RAG with agent
- [ ] Agent uses RAG as tool
- [ ] Tested complex multi-step queries
- [ ] Deployed as Streamlit app
- [ ] Saved as `rag_agent_app.py`

**Examples:**
- "Find articles about X and summarize"
- "Search documents and compare Y and Z"
- "Look up data and calculate metrics"

**Portfolio Piece:** Live RAG+Agent app

---

## ✅ Level 4: Production Systems Checkpoints

**Estimated Time:** 6-8 weeks

### Checkpoint 4.1: FastAPI App ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Created FastAPI app with 3+ endpoints
- [ ] Implemented input validation with Pydantic
- [ ] Added error handling
- [ ] Tested with curl/Postman
- [ ] Deployed to cloud

**Endpoints:**
- `POST /chat` - Chat endpoint
- `GET /health` - Health check
- `POST /feedback` - User feedback

**Portfolio Piece:** FastAPI code + API docs

---

### Checkpoint 4.2: Logging & Monitoring ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Added structured JSON logging
- [ ] Implemented 3+ Prometheus metrics
- [ ] Logged all important events
- [ ] Set up alerts
- [ ] Verified metrics in console

**Metrics:**
- Request count
- Response time
- Error rate
- Token usage

**Portfolio Piece:** Monitoring dashboard screenshot

---

### Checkpoint 4.3: Testing ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Wrote 5+ unit tests
- [ ] Wrote 2+ integration tests
- [ ] Achieved 80%+ code coverage
- [ ] All tests pass
- [ ] Saved as `test_main.py`

**Test Types:**
- Endpoint tests
- Error handling tests
- Input validation tests
- Integration tests

**Portfolio Piece:** Test file + coverage report

---

### Checkpoint 4.4: Docker & Deployment ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Created Dockerfile
- [ ] Built and tested image locally
- [ ] Created docker-compose with Redis
- [ ] Deployed to Heroku/Railway/Cloud Run
- [ ] Documented deployment steps

**Verification:**
- App runs in Docker
- Environment variables work
- Database connection works
- Deployed publicly accessible

**Portfolio Piece:** Deployed app link + Docker repo

---

## ✅ Level 5: Advanced GenAI Checkpoints

**Estimated Time:** 8-12 weeks

### Checkpoint 5.1: Fine-Tuning ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Prepared training dataset (50+ examples)
- [ ] Fine-tuned model (OpenAI or local)
- [ ] Compared with base model
- [ ] Measured cost improvement
- [ ] Documented results

**Metrics:**
- Quality improvement %
- Cost reduction %
- Response time delta
- User preference test results

**Portfolio Piece:** Fine-tuning report + code

---

### Checkpoint 5.2: Multimodal App ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Built app handling images OR audio OR video
- [ ] Integrated vision/audio model
- [ ] Tested with various inputs
- [ ] Deployed to web
- [ ] Documented capabilities

**Examples:**
- Image analysis app
- Audio transcription + analysis
- Video frame extraction + analysis

**Portfolio Piece:** Live multimodal app

---

### Checkpoint 5.3: Advanced Agent ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Built hierarchical/graph-based agent
- [ ] Implemented 3+ specialized sub-agents
- [ ] Tested complex multi-step workflows
- [ ] Documented architecture
- [ ] Saved as `advanced_agent.py`

**Architecture:**
- Main agent orchestrator
- Specialized sub-agents
- Clear data flow
- Error recovery

**Portfolio Piece:** Agent code + architecture diagram

---

### Checkpoint 5.4: Model Benchmarking ✓
**Status:** ___ (Not Started / In Progress / Complete)

**Tasks:**
- [ ] Benchmarked 3+ models on same task
- [ ] Compared: cost, speed, quality
- [ ] Created comparison table
- [ ] Generated recommendations
- [ ] Saved results to GitHub

**Metrics:**
- Time to response
- Token usage
- Cost
- Quality score
- Consistency

**Portfolio Piece:** Benchmark report + visualizations

---

## ✅ Level 6: Specialization Checkpoints

Choose your path and complete the relevant checkpoints:

### Path: AI App Developer
- [ ] Full-stack app with auth and database
- [ ] Deployed and getting real users
- [ ] Payment integration (Stripe)
- [ ] Analytics dashboard
- [ ] 50+ users or paying customers

### Path: AI Engineer
- [ ] 10x cost reduction on inference
- [ ] System handling 1000+ req/min
- [ ] Complete monitoring dashboard
- [ ] Published performance benchmarks
- [ ] Open source contribution

### Path: ML Researcher
- [ ] 20+ papers read and summarized
- [ ] Reproduced published method
- [ ] Novel contribution paper drafted
- [ ] Code released on GitHub
- [ ] Submitted to conference/ArXiv

### Path: AI Product Manager
- [ ] Market analysis document
- [ ] Product PRD with user research
- [ ] MVP built and launched
- [ ] 20+ beta users with feedback
- [ ] Metrics dashboard and roadmap

---

## 📊 Progress Dashboard

Track your overall progress:

**Level 0:** Checkpoints passed: __ / 3  
**Level 1:** Checkpoints passed: __ / 4  
**Level 2:** Checkpoints passed: __ / 4  
**Level 3:** Checkpoints passed: __ / 4  
**Level 4:** Checkpoints passed: __ / 4  
**Level 5:** Checkpoints passed: __ / 4  
**Level 6:** Specialization path: __ / __  

**Total Progress:** __ / 28 checkpoints

---

## 🎓 Portfolio Building

Each checkpoint produces something for your portfolio:

1. **GitHub Repository**
   - All code
   - Commit history
   - READMEs
   - Documentation

2. **Live Projects**
   - Deployed apps
   - Active systems
   - Live dashboards

3. **Documentation**
   - Blog posts
   - Technical write-ups
   - Case studies

4. **Open Source**
   - Contributing to projects
   - Creating libraries
   - Sharing tools

5. **Professional Network**
   - Connections made
   - Collaborations
   - Mentoring others

---

## 🏆 Completion Certificate

When you complete all 28 checkpoints:

```
Congratulations! You've completed the
GenAI Curriculum from Level 0 to Level 6.

You are now an advanced GenAI developer/engineer/researcher.

Share this achievement with #GenAICurriculum
```

---

## 🚀 What's Next?

After completing this curriculum:

1. **Continue learning** - Stay current with new models/techniques
2. **Build in public** - Share your work with the community
3. **Mentor others** - Help beginners on their journey
4. **Contribute** - Add to open source projects
5. **Create impact** - Build products/research that matters

The AI field moves fast. Keep growing. 🚀

---

**Status:** Checkpoints framework complete ✓
