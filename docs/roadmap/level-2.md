# Level 2: Simple GenAI Apps

**Duration:** 3-4 weeks  
**Target:** Build real GenAI applications with libraries like LangChain and frameworks

---

## 🎯 Learning Outcomes

By the end of this level, you will:

✓ Build chat applications with memory  
✓ Implement LangChain chains  
✓ Use templates and output parsing  
✓ Build simple web apps with Streamlit  
✓ Handle user input and state management  
✓ Deploy your first app online  

---

## 📚 What You Learn

### 1. LangChain Basics (4-5 hours)

**What is LangChain?**
- Framework for building applications with LLMs
- Abstracts away API complexity
- Provides tools for chaining operations
- Great for production debugging and monitoring

**Core Components:**

**a) LLM Integration**
```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.7)
response = llm.invoke("Hello!")
print(response.content)
```

**b) Prompts & Templates**
```python
from langchain.prompts import ChatPromptTemplate

template = """Answer the question based on this context:
Context: {context}
Question: {question}
Answer:"""

prompt = ChatPromptTemplate.from_template(template)
formatted = prompt.format(context="...", question="...")
```

**c) Chains (Sequential Operations)**
```python
from langchain.chains import LLMChain

chain = prompt | llm
result = chain.invoke({
    "context": "Python is a programming language",
    "question": "What is Python?"
})
```

**d) Memory (Remember Conversations)**
```python
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain

memory = ConversationBufferMemory()
conversation = ConversationChain(
    llm=llm,
    memory=memory,
    verbose=True
)

response = conversation.invoke({"input": "My name is Alice"})
response = conversation.invoke({"input": "What's my name?"})
# Model remembers!
```

### 2. Building Chat Applications (4-5 hours)

**Simple Chatbot Architecture:**
```python
from langchain.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

class SimpleChatbot:
    def __init__(self):
        self.llm = ChatOpenAI(model="gpt-3.5-turbo")
        self.system_message = "You are a helpful assistant."
    
    def chat(self, user_input, conversation_history):
        # Add message to history
        conversation_history.append({
            "role": "user",
            "content": user_input
        })
        
        # Get response
        response = self.llm.invoke(conversation_history)
        
        # Save response
        conversation_history.append({
            "role": "assistant",
            "content": response.content
        })
        
        return response.content

# Usage
bot = SimpleChatbot()
history = []
while True:
    user_input = input("You: ")
    response = bot.chat(user_input, history)
    print(f"Bot: {response}")
```

**Advanced Features:**
- Context window management (trim old messages)
- Streaming responses for better UX
- Error handling and retries
- System prompts for personality
- Token counting to prevent overflow

### 3. Output Parsing (3-4 hours)

**Getting Structured Data from LLMs:**

**Simple Text Parsing:**
```python
response = llm.invoke("Give me 3 fruits: apple, banana, orange")
fruits = response.content.split(", ")
```

**JSON Parsing:**
```python
from langchain.output_parsers import JSONOutputParser

parser = JSONOutputParser()
prompt = ChatPromptTemplate.from_template(
    "Response in JSON: {format_instructions}\n{question}"
)

chain = prompt | llm | parser
result = chain.invoke({
    "format_instructions": '{"name": "...", "age": ...}',
    "question": "Tell me about yourself"
})
# Returns actual Python dict!
```

**Pydantic Models (Best Practice):**
```python
from pydantic import BaseModel
from langchain.output_parsers import PydanticOutputParser

class Person(BaseModel):
    name: str
    age: int
    hobbies: list[str]

parser = PydanticOutputParser(pydantic_object=Person)
prompt = ChatPromptTemplate.from_template(
    "Extract person info: {query}\n{format_instructions}"
)

chain = prompt | llm | parser
result = chain.invoke({
    "query": "My name is John, I'm 25, I like coding and hiking",
    "format_instructions": parser.get_format_instructions()
})
# result is a Person instance!
```

### 4. Streamlit for Web Apps (4-5 hours)

**What is Streamlit?**
- Turn Python scripts into web apps instantly
- No HTML/CSS required
- Hot reload (changes update instantly)
- Great for demos and MVPs

**Basic Streamlit App:**
```python
import streamlit as st
from langchain_openai import ChatOpenAI

st.title("My ChatBot")

llm = ChatOpenAI(model="gpt-3.5-turbo")

user_input = st.text_input("Ask me something:")
if user_input:
    response = llm.invoke(user_input)
    st.write(response.content)
```

**Run:** `streamlit run app.py`

**Advanced Features:**
```python
import streamlit as st

# Sidebar for controls
st.sidebar.slider("Temperature", 0.0, 1.0, 0.7)

# Chat interface
if "messages" not in st.session_state:
    st.session_state.messages = []

for message in st.session_state.messages:
    st.chat_message(message["role"]).write(message["content"])

if user_input := st.chat_input("Your message:"):
    st.session_state.messages.append({
        "role": "user",
        "content": user_input
    })
    
    response = llm.invoke(user_input)
    st.session_state.messages.append({
        "role": "assistant",
        "content": response.content
    })
    st.rerun()
```

### 5. Deployment (3-4 hours)

**Deploy on Streamlit Cloud (Free):**
1. Push code to GitHub
2. Go to [share.streamlit.io](https://share.streamlit.io)
3. Connect GitHub repo
4. Select script to deploy
5. Your app is live!

**Deploy on HuggingFace Spaces (Free):**
1. Create new Space on HuggingFace
2. Upload code
3. Add `requirements.txt`
4. App deploys automatically

**Environment Variables:**
```python
import os
import streamlit as st

# In Streamlit cloud, add secrets:
# Settings → Secrets
api_key = st.secrets["openai_api_key"]

# Or use environment variables
api_key = os.getenv("OPENAI_API_KEY")
```

---

## 📚 Projects to Explore

### Repository Projects for Level 2

**Chat Applications:**
- `ai-apps-collection/Chat_with_pdf_or_webpage/`
- `ai-apps-collection/chat-with-gpt-oss/`
- `ai-apps-collection/Sutra_V2_Multilingual_Chatbot/`

**Library Tutorials:**
- `100-os-libraries/LangChain_Basics_Building_Intelligent_Workflows.ipynb`
- `100-os-libraries/Getting_Started_with_Pydantic_AI.ipynb`
- `100-os-libraries/CrewAI_Essentials_Quick_Start_Guide.ipynb`

**Simple Apps:**
- `ai-apps-collection/AI_Business_Consultant/`
- `ai-apps-collection/Vibe_Voice_TTS/`
- `ai-apps-collection/language-learner/`

---

## ✅ Checkpoint Tasks

Complete these to master Level 2:

### Task 1: LangChain Chat Chain (1.5 hours)
- [ ] Create a Python script using LangChain
- [ ] Implement a multi-turn conversation
- [ ] Use ConversationBufferMemory
- [ ] Test with 3+ back-and-forth exchanges
- [ ] Save as `langchain_chat.py`

### Task 2: Prompt Templates (1 hour)
- [ ] Create 3 prompt templates for different use cases
- [ ] Use ChatPromptTemplate
- [ ] Format with different variables
- [ ] Compare output quality
- [ ] Document in `templates_experiment.txt`

### Task 3: Output Parsing (1.5 hours)
- [ ] Create a prompt that should return JSON
- [ ] Use PydanticOutputParser with a model
- [ ] Parse 3 different inputs
- [ ] Verify you get proper Python objects
- [ ] Save as `output_parser_demo.py`

### Task 4: Streamlit App (2 hours)
- [ ] Create a Streamlit app (any type: chat, summarizer, etc.)
- [ ] Include at least:
  - Title and markdown
  - User input field
  - LLM response display
  - At least one control (slider, dropdown, etc.)
- [ ] Test locally with `streamlit run app.py`
- [ ] Save as `app.py` in dedicated folder

### Task 5: Deploy Your App (1 hour)
- [ ] Push Streamlit app to GitHub
- [ ] Deploy to Streamlit Cloud or HuggingFace Spaces
- [ ] Test the live app
- [ ] Document the URL in `README.md`
- [ ] Share the link!

### Task 6: Full Application Build (3 hours)
Create your first complete GenAI application:
- [ ] Choose a use case (summarizer, tutor, helper, etc.)
- [ ] Build in Streamlit
- [ ] Use LangChain for logic
- [ ] Include error handling
- [ ] Add configuration/settings
- [ ] Document usage
- [ ] Deploy online

---

## 💡 Best Practices

1. **Memory Management**
   - Don't keep infinite conversation history
   - Trim old messages after N tokens
   - Use summary instead of full history for long conversations

2. **Error Handling**
   ```python
   try:
       response = llm.invoke(user_input)
   except Exception as e:
       st.error(f"Error: {e}")
   ```

3. **Configuration**
   - Use environment variables
   - Allow users to adjust temperature, model, etc.
   - Document all settings

4. **Testing**
   - Test with edge cases (empty input, very long input, etc.)
   - Monitor API calls and costs
   - Test error scenarios

5. **User Experience**
   - Show loading states
   - Provide clear instructions
   - Handle long responses gracefully

---

## ⚠️ Common Pitfalls

- **Memory explosion:** Don't save infinite conversation history
- **Token limits:** Track total tokens, not just one message
- **Blocking UI:** Use async for long operations
- **No error handling:** Users expect graceful failures
- **Hardcoded secrets:** Use environment variables always

---

## 🎓 Next Steps

Once you complete all checkpoint tasks:

1. ✅ You can build basic GenAI apps
2. ✅ You understand LangChain patterns
3. ✅ You've deployed an app online
4. ✅ You know Streamlit basics

**Ready for Level 3?** → [RAG + Agents](./level-3.md)

---

## 📖 FAQ

**Q: Do I need to know HTML/CSS?**  
A: No! Streamlit handles it all for you.

**Q: Can I use Streamlit in production?**  
A: Yes, but scale is limited. Consider Cloud Run, Railway, or Fly.io for high traffic.

**Q: What if my app is slow?**  
A: Use `@st.cache_resource` to cache models, implement streaming, optimize LLM calls.

**Q: How do I handle multiple users?**  
A: Each user gets their own session state automatically in Streamlit Cloud.

---

## 🔗 Resources

- [LangChain Docs](https://python.langchain.com/)
- [Streamlit Docs](https://docs.streamlit.io/)
- [Streamlit Cloud](https://streamlit.io/cloud)
- [HuggingFace Spaces](https://huggingface.co/spaces)
- [LangChain Templates](https://github.com/langchain-ai/langchain/tree/master/templates)

---

**Status:** Simple GenAI Apps Complete ✓  
**Next:** [Level 3: RAG + Agents →](./level-3.md)
