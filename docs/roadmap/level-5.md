# Level 5: Advanced GenAI

**Duration:** 8-12 weeks  
**Target:** Master cutting-edge techniques and build advanced systems

---

## 🎯 Learning Outcomes

By the end of this level, you will:

✓ Fine-tune LLMs for specific tasks  
✓ Build multimodal applications  
✓ Implement advanced agent architectures  
✓ Work with custom models  
✓ Handle complex reasoning  
✓ Explore emerging research  

---

## 📚 What You Learn

### 1. Fine-Tuning (4-5 hours)

**When to Fine-Tune:**
- Specific domain knowledge
- Particular writing style
- Cost reduction (smaller models)
- Following strict output format

**Types of Fine-Tuning:**

**a) Standard Fine-Tuning (Full)**
```python
import openai

# Prepare training data
training_data = [
    {
        "messages": [
            {"role": "system", "content": "You are a Python tutor"},
            {"role": "user", "content": "What is a list?"},
            {"role": "assistant", "content": "A list is..."}
        ]
    },
    # ... more examples
]

# Create fine-tuning job
response = openai.FineTuningJob.create(
    training_file="file_id",
    model="gpt-3.5-turbo",
    hyperparameters={"n_epochs": 3}
)

# Use fine-tuned model
completion = openai.ChatCompletion.create(
    model=f"ft:gpt-3.5-turbo:dev:abc123:xyz",
    messages=[...]
)
```

**b) Low-Rank Adaptation (LoRA)**
```python
from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import get_peft_model, LoraConfig

# Load base model
model = AutoModelForCausalLM.from_pretrained("mistral-7b")

# Add LoRA
lora_config = LoraConfig(
    r=8,
    lora_alpha=32,
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)
model = get_peft_model(model, lora_config)

# Fine-tune (memory efficient)
# ... training loop
```

**c) Prompt Engineering vs Fine-Tuning Decision:**
```
Use Prompt Engineering if:
- Need flexibility
- Limited training data
- Task varies

Use Fine-Tuning if:
- Consistent specific task
- Many examples available (100+)
- Want cost efficiency
- Need precise format
```

### 2. Multimodal Applications (4-5 hours)

**Working with Images, Audio, Video:**

**Image Understanding (Vision Models):**
```python
from openai import OpenAI
import base64

client = OpenAI()

# Option 1: URL-based
response = client.chat.completions.create(
    model="gpt-4-vision-preview",
    messages=[{
        "role": "user",
        "content": [
            {"type": "text", "text": "What's in this image?"},
            {
                "type": "image_url",
                "image_url": {"url": "https://example.com/image.jpg"}
            }
        ]
    }]
)

# Option 2: Local file
with open("image.jpg", "rb") as f:
    image_data = base64.b64encode(f.read()).decode()

response = client.chat.completions.create(
    model="gpt-4-vision-preview",
    messages=[{
        "role": "user",
        "content": [
            {"type": "text", "text": "Analyze this image"},
            {
                "type": "image_url",
                "image_url": {"url": f"data:image/jpeg;base64,{image_data}"}
            }
        ]
    }]
)
```

**Audio Processing:**
```python
from openai import OpenAI

client = OpenAI()

# Transcription
with open("audio.mp3", "rb") as audio_file:
    transcript = client.audio.transcriptions.create(
        model="whisper-1",
        file=audio_file
    )
print(transcript.text)

# Text-to-Speech
response = client.audio.speech.create(
    model="tts-1",
    voice="alloy",
    input="Hello, this is text-to-speech!"
)
response.stream_to_file("output.mp3")
```

**Video Analysis (Frame by Frame):**
```python
import cv2
from openai import OpenAI

def analyze_video(video_path):
    cap = cv2.VideoCapture(video_path)
    frames = []
    
    # Extract frames every N seconds
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        frames.append(frame)
    
    cap.release()
    
    # Analyze with vision model
    # ... send frames to GPT-4V for analysis
```

### 3. Advanced Agent Patterns (4-5 hours)

**Hierarchical Agents:**
```
Main Agent
├── Research Sub-Agent
├── Analysis Sub-Agent
└── Writing Sub-Agent
```

**Graph-Based Workflow:**
```python
from langgraph.graph import StateGraph, START, END

def route_to_agent(state):
    if state["needs_research"]:
        return "research"
    return "analysis"

workflow = StateGraph(State)
workflow.add_node("research", research_agent)
workflow.add_node("analysis", analysis_agent)
workflow.add_conditional_edges(
    START,
    route_to_agent,
    {"research": "research", "analysis": "analysis"}
)
workflow.add_edge("research", END)
workflow.add_edge("analysis", END)

graph = workflow.compile()
result = graph.invoke({"input": "..."})
```

**Reflection & Refinement:**
```
Initial Generation
    ↓
Reflection: "Is this good?"
    ↓
No → Refine → Improved
    ↓
Yes → Done
```

**Tool Use Mastery:**
```python
# Complex tool orchestration
executor = AgentExecutor.from_agent_and_tools(
    agent=agent,
    tools=[
        database_tool,
        api_tool,
        calculator_tool,
        search_tool
    ],
    max_iterations=10,
    early_stopping_method="generate"
)
```

### 4. Custom Models & Frameworks (3-4 hours)

**Working with Open-Source Models:**

**a) Using Ollama (Local Models)**
```python
import requests
import json

# Run with: ollama run mistral

response = requests.post(
    "http://localhost:11434/api/generate",
    json={
        "model": "mistral",
        "prompt": "What is AI?",
        "stream": False
    }
)

result = response.json()
print(result["response"])
```

**b) HuggingFace Models:**
```python
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

model_id = "mistralai/Mistral-7B"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.float16,
    device_map="auto"
)

inputs = tokenizer("Hello AI", return_tensors="pt")
outputs = model.generate(**inputs, max_length=100)
response = tokenizer.decode(outputs[0])
```

**c) Quick Local Testing with LLaMA.cpp:**
```bash
# Download model
wget https://huggingface.co/TheBloke/Mistral-7B-GGUF/resolve/main/mistral-7b.Q4_K_M.gguf

# Run
./main -m mistral-7b.Q4_K_M.gguf -p "Once upon a time"
```

### 5. Model Evaluation & Benchmarking (3-4 hours)

**Benchmarking Models:**
```python
import timeit
from langchain.callbacks import get_openai_callback

models = ["gpt-3.5-turbo", "gpt-4", "claude-3"]

for model in models:
    with get_openai_callback() as cb:
        start = timeit.default_timer()
        response = llm.invoke(prompt)
        duration = timeit.default_timer() - start
        
        print(f"{model}:")
        print(f"  Cost: ${cb.total_cost}")
        print(f"  Time: {duration:.2f}s")
        print(f"  Tokens: {cb.total_tokens}")
        print(f"  Quality: {assess_quality(response)}")
```

**Custom Evaluation Metrics:**
```python
from ragas import evaluate
from ragas.metrics import (
    faithfulness,
    answer_relevancy,
    context_precision
)

# Evaluate RAG system
results = evaluate(
    dataset=eval_dataset,
    metrics=[
        faithfulness,
        answer_relevancy,
        context_precision
    ]
)
```

**A/B Testing:**
```python
import random

def ab_test(prompts, model_a, model_b, n=100):
    results_a, results_b = [], []
    
    for _ in range(n):
        prompt = random.choice(prompts)
        
        # Test model A
        response_a = model_a.invoke(prompt)
        score_a = evaluate_response(response_a)
        results_a.append(score_a)
        
        # Test model B
        response_b = model_b.invoke(prompt)
        score_b = evaluate_response(response_b)
        results_b.append(score_b)
    
    return {
        "model_a": sum(results_a) / len(results_a),
        "model_b": sum(results_b) / len(results_b)
    }
```

---

## 📚 Projects to Explore

### Repository Projects for Level 5

**Fine-Tuning:**
- `fine-tuning/Fine_Tuning_LLMs_with_Nebius_TokenFactory.ipynb`
- `experiment/Educhain_Step_3_5_Flash_Cookbook.ipynb`

**Multimodal:**
- `experiment/` (Experimental Implementations)
- `ai-apps-collection/Gemini-2.0-Multimodal/`
- `llm-testing/gemini/gemini_embedding_2_cookbook.ipynb`

**Advanced Agents:**
- `ai-agents/LangGraph_Multi_Agent_Swarm.ipynb`
- `ai-apps-collection/MCP_Implementation/`
- `workshop/MCP_Workshop.ipynb`

**Model Testing:**
- `llm-testing/` (Complete Directory)
- `ai-apps-collection/cerebras_inferance_comparision/`

---

## ✅ Checkpoint Tasks

Complete these to master Level 5:

### Task 1: Fine-Tune a Model (3 hours)
- [ ] Prepare training dataset (50+ examples)
- [ ] Fine-tune using OpenAI API or LoRA
- [ ] Compare with base model
- [ ] Measure cost improvement
- [ ] Document in `fine_tuning_report.md`

### Task 2: Multimodal Application (3 hours)
- [ ] Build app that handles images OR audio OR video
- [ ] Implement in Streamlit
- [ ] Test with various inputs
- [ ] Document capabilities
- [ ] Deploy online

### Task 3: Advanced Agent (2-3 hours)
- [ ] Build hierarchical or graph-based agent
- [ ] Implement 3+ specialized sub-agents
- [ ] Test complex multi-step tasks
- [ ] Document architecture
- [ ] Save as `advanced_agent.py`

### Task 4: Open-Source Model Integration (2-3 hours)
- [ ] Run local open-source model (Ollama/LLaMA.cpp)
- [ ] Integrate with your application
- [ ] Compare performance vs API models
- [ ] Document setup and results
- [ ] Save performance comparison

### Task 5: Model Benchmarking (2-3 hours)
- [ ] Benchmark 3+ models on same prompts
- [ ] Compare: cost, speed, quality
- [ ] Create evaluation metrics
- [ ] Generate comparison report
- [ ] Document findings

### Task 6: Advanced Application (5-6 hours)
Build an ambitious project combining:
- [ ] Multiple modalities (images + text)
- [ ] Advanced agent reasoning
- [ ] Custom evaluation
- [ ] Production deployment
- [ ] Comprehensive documentation

---

## 💡 Best Practices

1. **Fine-Tuning Data Quality**
   - Diverse, representative examples
   - Correct format and structure
   - High-quality demonstrations
   - Balanced distribution

2. **Multimodal Considerations**
   - Different models for different modalities
   - Compression for efficiency
   - Privacy for user-provided media
   - Format validation

3. **Model Selection**
   - Consider: cost, latency, accuracy
   - Test on your specific task
   - Monitor performance in production
   - Plan for model updates

4. **Evaluation**
   - Mix automated and human evaluation
   - Include edge cases
   - Track metrics over time
   - A/B test major changes

---

## ⚠️ Common Pitfalls

- **Poor Fine-Tuning Data:** Garbage in, garbage out
- **Ignoring Costs:** Fine-tuning can be expensive
- **No Human Review:** Automated metrics miss important issues
- **Overfitting:** Fine-tuning too much on small data
- **Model Drift:** Monitoring quality degradation over time

---

## 🎓 Next Steps

Once you complete all checkpoint tasks:

1. ✅ You can fine-tune models
2. ✅ You can build multimodal apps
3. ✅ You master advanced architectures
4. ✅ You evaluate models rigorously

**Ready for Level 6?** → [Specialization Paths](./level-6.md)

---

## 📖 FAQ

**Q: Should I fine-tune or use RAG?**  
A: RAG for dynamic information. Fine-tuning for style/format/knowledge.

**Q: Can I fine-tune locally?**  
A: Yes! Use LoRA + open-source models. Much cheaper than API fine-tuning.

**Q: Is multimodal the future?**  
A: Yes. Vision + text + audio = better understanding. Start learning now.

**Q: How do I handle model hallucinations?**  
A: Knowledge grounding + RAG + prompt engineering + evaluation.

---

## 🔗 Resources

- [OpenAI Fine-Tuning](https://platform.openai.com/docs/guides/fine-tuning)
- [PEFT (LoRA)](https://huggingface.co/docs/peft/)
- [Vision Models Guide](https://platform.openai.com/docs/guides/vision)
- [LLaMA.cpp GitHub](https://github.com/ggerganov/llama.cpp)
- [Model Evaluation](https://ragas.io/)

---

**Status:** Advanced GenAI Complete ✓  
**Next:** [Level 6: Specialization →](./level-6.md)
