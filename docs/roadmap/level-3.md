# Level 3: RAG + Agents

**Duration:** 4-6 weeks  
**Target:** Build intelligent systems that can retrieve information and take actions

---

## 🎯 Learning Outcomes

By the end of this level, you will:

✓ Implement Retrieval-Augmented Generation (RAG)  
✓ Work with vector databases  
✓ Build AI agents with tools  
✓ Create multi-agent systems  
✓ Handle complex workflows  
✓ Debug agent behavior  

---

## 📚 What You Learn

### 1. Retrieval-Augmented Generation (4-5 hours)

**What is RAG?**
- Combines LLM with document retrieval
- LLM gets accurate, recent information
- Reduces hallucinations
- Foundation for knowledge systems

**RAG Architecture:**
```
User Query
    ↓
[Search Documents] ← Vector Database
    ↓
[Relevant Context Found]
    ↓
[Add to Prompt]
    ↓
[LLM Generates Answer]
    ↓
[User Gets Answer]
```

**Basic RAG Implementation:**
```python
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings
from langchain.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter

# 1. Load documents
loader = TextLoader("document.txt")
documents = loader.load()

# 2. Split into chunks
splitter = CharacterTextSplitter(chunk_size=1000)
chunks = splitter.split_documents(documents)

# 3. Create embeddings & store in vector DB
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(chunks, embeddings)

# 4. Create retriever
retriever = vectorstore.as_retriever()

# 5. Build RAG chain
from langchain.chains import RetrievalQA
from langchain_openai import ChatOpenAI

qa = RetrievalQA.from_chain_type(
    llm=ChatOpenAI(),
    chain_type="stuff",
    retriever=retriever
)

# 6. Ask questions
answer = qa.run("What is the main topic?")
```

### 2. Vector Databases (3-4 hours)

**What are Vector Databases?**
- Store text as vectors (embeddings)
- Find similar documents via vector similarity
- Enable semantic search

**Popular Vector DBs:**

**a) Chroma (Local & Simple)**
```python
from langchain.vectorstores import Chroma
vectorstore = Chroma.from_documents(documents, embeddings)
results = vectorstore.similarity_search("query", k=3)
```

**b) Pinecone (Cloud & Scalable)**
```python
from langchain.vectorstores import Pinecone
import pinecone

pinecone.init(api_key="...", environment="...")
vectorstore = Pinecone.from_documents(
    documents, embeddings, index_name="index"
)
```

**c) Weaviate (Open Source & Powerful)**
```python
from langchain.vectorstores import Weaviate
vectorstore = Weaviate.from_documents(
    documents, embeddings, by_text=False
)
```

**d) Supabase (PostgreSQL + Vectors)**
```python
from langchain.vectorstores import SupabaseVectorStore
vectorstore = SupabaseVectorStore.from_documents(
    documents, embeddings, client=supabase
)
```

**Key Concepts:**
- **Embedding Model:** Converts text to vectors (OpenAI, Cohere, HuggingFace)
- **Similarity Search:** Find most relevant documents (cosine similarity)
- **Indexing:** Speed up search (HNSW, IVF)
- **Metadata Filtering:** Filter results by tags/properties before search

### 3. AI Agents (4-5 hours)

**What are Agents?**
- Programs that decide which tools to use
- Take actions based on observations
- Learn from interactions
- Autonomous decision-making

**Agent Anatomy:**
```
User: "What's the weather in NYC?"
    ↓
[Agent Thinks] 
"I need to check weather. I'll use weather_tool"
    ↓
[Uses Tool] weather_tool("NYC")
    ↓
[Observes Result] "72°F, Sunny"
    ↓
[Generates Response] "It's 72°F and sunny in NYC"
    ↓
User Gets Answer
```

**Building Agents with LangChain:**
```python
from langchain.agents import AgentExecutor, create_openai_functions_agent
from langchain.tools import Tool
from langchain_openai import ChatOpenAI

# 1. Define tools
def search_user(name):
    return f"User {name} found in database"

def send_email(email, message):
    return f"Email sent to {email}"

tools = [
    Tool(
        name="search_user",
        func=search_user,
        description="Search for a user by name"
    ),
    Tool(
        name="send_email",
        func=send_email,
        description="Send email to user"
    )
]

# 2. Create agent
prompt = create_openai_functions_agent_prompt_template()
agent = create_openai_functions_agent(
    llm=ChatOpenAI(model="gpt-3.5-turbo"),
    tools=tools,
    prompt=prompt
)

# 3. Execute
executor = AgentExecutor.from_agent_and_tools(
    agent=agent,
    tools=tools,
    verbose=True
)

# 4. Run
result = executor.invoke({
    "input": "Find user John and send him an email about the update"
})
```

**Tool Types:**
- **Search tools:** Web search, document search, database query
- **Calculation tools:** Math operations, data processing
- **API tools:** External services (weather, stock prices, etc.)
- **File tools:** Read/write files, process documents
- **Custom tools:** Your own functions

### 4. Multi-Agent Systems (4-5 hours)

**When to Use Multiple Agents:**
- Different expertise (researcher agent, writer agent, editor agent)
- Parallel processing
- Specialization by domain
- Complex workflows

**Simple Multi-Agent Pattern:**
```
Task: "Write a research report on AI"
    ↓
[Researcher Agent]
"I'll search for information"
    ↓
[Gathers Data]
    ↓
[Writer Agent]
"I'll write an article from this"
    ↓
[Editor Agent]
"I'll review and improve it"
    ↓
Final Report
```

**Implementation with CrewAI:**
```python
from crewai import Agent, Task, Crew

# 1. Define agents
researcher = Agent(
    role="Researcher",
    goal="Find and summarize information",
    backstory="Expert researcher with 10 years experience"
)

writer = Agent(
    role="Writer",
    goal="Write engaging articles",
    backstory="Award-winning journalist"
)

# 2. Define tasks
research_task = Task(
    description="Research the topic of AI",
    agent=researcher
)

writing_task = Task(
    description="Write article from research",
    agent=writer
)

# 3. Organize into crew
crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, writing_task]
)

# 4. Execute
result = crew.kickoff()
```

### 5. Debugging Agents (2-3 hours)

**Common Agent Issues:**

**a) Agent Gets Stuck in Loop**
```python
executor = AgentExecutor.from_agent_and_tools(
    agent=agent,
    tools=tools,
    max_iterations=5,  # Set limit
    verbose=True       # See what it's doing
)
```

**b) Wrong Tool Selection**
- Make tool descriptions very specific
- Provide examples of when to use each tool
- Test individual tools first

**c) Agent Forgets Context**
- Include recent messages in prompt
- Use better summarization
- Provide explicit instructions

**Debugging Techniques:**
```python
# Enable verbose mode to see reasoning
agent.verbose = True

# Add logging to tools
import logging
logging.basicConfig(level=logging.DEBUG)

# Test individual tool calls
tool_result = search_tool("query")
print(tool_result)

# Check token usage
from langchain.callbacks import get_openai_callback
with get_openai_callback() as cb:
    result = executor.invoke({"input": "question"})
    print(f"Tokens: {cb.total_tokens}")
    print(f"Cost: ${cb.total_cost}")
```

---

## 📚 Projects to Explore

### Repository Projects for Level 3

**RAG Systems:**
- `rag/How_to_build_Claude_powered_RAG_from_Scratch.ipynb`
- `rag/RAG_Interactive.ipynb`
- `rag/vision_rag_with_cohere_embed_v4__gemini_flash.ipynb`
- `ai-apps-collection/chroma-cloud-rag/`

**Agent Projects:**
- `ai-agents/CSV_Agents_with_LangChain_&_LlamaIndex.ipynb`
- `ai-agents/AgentScope.ipynb`
- `ai-agents/Kimi_K2_5_Agent_Swarm_Cookbook.ipynb`
- `ai-agents/LangGraph_Multi_Agent_Swarm.ipynb`

**Advanced Applications:**
- `ai-apps-collection/Stock_Market_Agent/`
- `ai-apps-collection/deep-agent-stock-research/`
- `ai-apps-collection/AI_Business_Consultant/`

---

## ✅ Checkpoint Tasks

Complete these to master Level 3:

### Task 1: Basic RAG System (2 hours)
- [ ] Create text document with domain content
- [ ] Build RAG system with document loading
- [ ] Create vector database (Chroma or Pinecone)
- [ ] Test with 5+ different queries
- [ ] Verify retrieval is working correctly
- [ ] Save as `rag_system.py`

### Task 2: Vector Database Exploration (1.5 hours)
- [ ] Create embeddings for 10+ documents
- [ ] Test similarity search with different queries
- [ ] Compare top-3 vs top-5 results
- [ ] Add metadata filtering
- [ ] Document in `vector_db_notes.md`

### Task 3: Simple Agent with Tools (2 hours)
- [ ] Define 3 custom tools (functions)
- [ ] Create an agent that uses them
- [ ] Write descriptions that guide tool selection
- [ ] Test agent with 5+ different prompts
- [ ] Save as `simple_agent.py`

### Task 4: Advanced RAG (2 hours)
- [ ] Build RAG with metadata filtering
- [ ] Implement similarity search + keyword search
- [ ] Add query expansion (multiple queries)
- [ ] Handle multi-document scenarios
- [ ] Save as `advanced_rag.py`

### Task 5: Multi-Agent System (3 hours)
- [ ] Create 2-3 agents with different roles
- [ ] Define tasks for each agent
- [ ] Use CrewAI or LangChain orchestration
- [ ] Test coordination between agents
- [ ] Document workflow in `multi_agent_notes.md`

### Task 6: RAG + Agent Combination (3 hours)
Create a system combining both:
- [ ] Build RAG system with documents
- [ ] Create agent that uses RAG tool
- [ ] Test complex queries
- [ ] Handle multi-step reasoning
- [ ] Deploy as Streamlit app
- [ ] Save as `rag_agent_app.py`

---

## 💡 Best Practices

1. **RAG Optimization**
   - Use semantic search, not keyword search
   - Chunk documents thoughtfully (not just by length)
   - Include metadata for better filtering
   - Test embedding models (different = different quality)

2. **Agent Design**
   - Give clear, concise tool descriptions
   - Provide examples of tool usage
   - Name tools descriptively
   - Set reasonable iteration limits

3. **Vector Database**
   - Monitor embedding costs
   - Use right granularity for chunks
   - Implement caching
   - Version your embeddings

4. **Multi-Agent**
   - Clear role definitions
   - Explicit task interdependencies
   - Good communication between agents
   - Fallback strategies when agents disagree

---

## ⚠️ Common Pitfalls

- **RAG Degradation:** Poor embedding model = poor retrieval
- **Agent Confusion:** Overlapping tool names confuse LLM
- **Infinite Loops:** Agents keep using same tool endlessly
- **Context Explosion:** Too much retrieved context confuses model
- **Cost Explosion:** Re-embedding same data repeatedly

---

## 🎓 Next Steps

Once you complete all checkpoint tasks:

1. ✅ You can implement RAG systems
2. ✅ You understand vector databases
3. ✅ You can build agents with tools
4. ✅ You can orchestrate multi-agent workflows

**Ready for Level 4?** → [Production Systems](./level-4.md)

---

## 📖 FAQ

**Q: Should I use RAG or just fine-tuning?**  
A: RAG for dynamic information, fine-tuning for specific style/knowledge.

**Q: How many documents can RAG handle?**  
A: Vector DBs can handle millions. Focus on retrieval quality, not quantity.

**Q: Can agents use APIs?**  
A: Yes! Wrap API calls as tools. That's the best use case.

**Q: How do I measure agent effectiveness?**  
A: Track: correct tool selection rate, task completion rate, token efficiency.

---

## 🔗 Resources

- [LangChain RAG Guide](https://python.langchain.com/docs/use_cases/question_answering/)
- [Vector DB Comparison](https://www.llamaindex.ai/blog/vector-databases)
- [CrewAI Documentation](https://docs.crewai.com/)
- [LangGraph for Agents](https://python.langchain.com/docs/langgraph/)
- [Agent Concepts](https://www.promptingguide.ai/techniques/tot)

---

**Status:** RAG + Agents Complete ✓  
**Next:** [Level 4: Production Systems →](./level-4.md)
