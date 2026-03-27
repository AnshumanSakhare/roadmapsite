# Level 1: LLM Basics

**Duration:** 2-3 weeks  
**Target:** Understand how LLMs work and how to use them effectively

---

## 🎯 Learning Outcomes

By the end of this level, you will:

✓ Understand what LLMs are and how they work  
✓ Know the difference between models (GPT, Gemini, Claude, etc.)  
✓ Master prompt engineering basics  
✓ Understand tokens and context windows  
✓ Use LLM APIs effectively  
✓ Handle streaming responses  

---

## 📚 What You Learn

### 1. LLM Fundamentals (4-5 hours)

**What is an LLM?**
- Large Language Model: A neural network trained on vast text data
- Predicts next token (word piece) based on context
- Transformer architecture enables understanding of long sequences
- Not sentient - it's pattern matching at scale

**Key Concepts:**
- **Tokens:** Chunks of text (roughly 1 token = 4 characters)
- **Temperature:** Controls randomness (0 = deterministic, 1 = creative)
- **Context Window:** How much text the model can see at once (GPT-4 = 128K)
- **Embedding:** Converting text to numbers for comparison

**Model Variants:**
- **Chat models:** Optimized for conversation (gpt-3.5-turbo, claude-3-sonnet)
- **Text models:** For longer content (text-davinci-003)
- **Embedding models:** Convert text to vectors (text-embedding-3-small)
- **Vision models:** Can see and analyze images (gpt-4-vision)

### 2. Prompt Engineering (4-5 hours)

**What is Prompt Engineering?**
- The art of writing instructions that get the best results from LLMs
- Like learning to ask a smart assistant better questions

**Core Techniques:**

**a) Be Specific**
```
Bad: "Write about AI"
Good: "Write a 3-sentence beginner's explanation of how transformers work in LLMs"
```

**b) Use System Messages**
```
system = "You are a helpful Python tutor. Explain concepts simply."
user = "What is a list comprehension?"
```

**c) Few-Shot Prompting**
```
Example: How to summarize
Input: "Long article text..."
Output: "3-sentence summary..."

Now you try with this new article...
```

**d) Chain of Thought**
```
Problem: "Solve this math problem"
Better: "Think step-by-step: First identify what we're solving, 
then break it into parts, then solve each part"
```

**Best Practices:**
- Give context and role
- Be explicit about desired format
- Provide examples when possible
- Use clear separators (### , --- , etc.)

### 3. Working with APIs (4-5 hours)

**OpenAI API Example:**
```python
from openai import OpenAI

client = OpenAI(api_key="your-key")

response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are helpful."},
        {"role": "user", "content": "Hello!"}
    ],
    temperature=0.7,
    max_tokens=100
)

print(response.choices[0].message.content)
```

**Google Gemini API:**
```python
import google.generativeai as genai
genai.configure(api_key="your-key")
model = genai.GenerativeModel('gemini-pro')
response = model.generate_content("Your prompt here")
print(response.text)
```

**Anthropic Claude:**
```python
import anthropic
client = anthropic.Anthropic(api_key="your-key")
message = client.messages.create(
    model="claude-3-sonnet-20240229",
    max_tokens=100,
    messages=[{"role": "user", "content": "Hello!"}]
)
print(message.content[0].text)
```

### 4. Tokens & Context (3-4 hours)

**Understanding Tokens:**
- 1 token ≈ 4 characters ≈ 0.75 words
- Every API call charges by tokens (input + output)
- Longer context = more expensive

**Context Window by Model:**
- GPT-3.5-turbo: 4K (expandable to 16K)
- GPT-4: 8K or 32K or 128K variants
- Claude 3: Up to 200K tokens
- Gemini Pro: 32K tokens

**Cost Optimization:**
```python
# Count tokens before API call
import tiktoken
enc = tiktoken.encoding_for_model("gpt-3.5-turbo")
tokens = len(enc.encode("Your text here"))
print(f"Tokens: {tokens}")

# Estimate cost
cost = tokens * 0.0015 / 1000  # Approximate
print(f"Est. cost: ${cost}")
```

### 5. Streaming & Advanced Features (3-4 hours)

**Streaming Responses** (show output as it arrives):
```python
from openai import OpenAI

client = OpenAI()
with client.chat.completions.stream(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "Count to 10"}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

**Function Calling** (get structured output):
```python
client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[...],
    tools=[{
        "type": "function",
        "function": {
            "name": "get_weather",
            "parameters": {...}
        }
    }]
)
```

---

## 📚 Projects to Explore

### Repository Projects for Level 1

**Starter Projects:**
- `100-os-libraries/LangChain_Basics_Building_Intelligent_Workflows.ipynb`
- `100-os-libraries/Getting_Started_with_Pydantic_AI.ipynb`
- `100-os-libraries/Hugging_Face_Transformers_A_Powerful_Foundation_for_Generative_AI_and_NLP.ipynb`

**Model Testing & Comparison:**
- `llm-testing/openai/gpt_5_4_mini_nano_cookbook.ipynb`
- `llm-testing/gemini/gemini_embedding_2_cookbook.ipynb`
- `llm-testing/glm/glm_ocr_cookbook.ipynb`

---

## ✅ Checkpoint Tasks

Complete these to master Level 1:

### Task 1: Make Your First API Call (1 hour)
- [ ] Choose a model provider (OpenAI, Gemini, or Claude)
- [ ] Create a Python script that calls the API
- [ ] Send a prompt and display the response
- [ ] Print tokens used and estimated cost
- [ ] Commit to git (without API key in code!)

### Task 2: Prompt Engineering Experiments (1.5 hours)
- [ ] Write 5 different prompts for the same task
- [ ] Compare outputs and quality
- [ ] Document which technique worked best (specific, examples, role, etc.)
- [ ] Save examples in `prompt_examples.txt`

### Task 3: Token Counting (1 hour)
- [ ] Use tiktoken to count tokens in 3 different texts
- [ ] Calculate cost for each
- [ ] Find the context window limits for 3 different models
- [ ] Document findings in a notebook

### Task 4: Streaming Implementation (1 hour)
- [ ] Implement a streaming API call
- [ ] Display output as it arrives (real-time)
- [ ] Compare latency and UX vs. non-streaming
- [ ] Save as `streaming_example.py`

### Task 5: Model Comparison (1.5 hours)
- [ ] Send the same prompt to 2-3 different models
- [ ] Compare quality, speed, cost
- [ ] Create a comparison table
- [ ] Document which model is best for which use case

---

## 🧠 Concepts You Should Know

- **Transformer Architecture:** Why LLMs work (high level)
- **Attention Mechanism:** How models focus on relevant parts
- **Fine-tuning:** Later topic, but understand the concept
- **Embeddings:** How text becomes vectors
- **Hallucination:** When LLMs make up false information

**Read:** [Attention is All You Need](https://arxiv.org/abs/1706.03762) (optional)

---

## 💡 Best Practices

1. **Always use .env for keys**
   ```python
   from dotenv import load_dotenv
   import os
   load_dotenv()
   api_key = os.getenv('OPENAI_API_KEY')
   ```

2. **Plan for costs**
   - Start with cheaper models (gpt-3.5-turbo, Gemini)
   - Set spending limits in your provider dashboard
   - Log tokens for monitoring

3. **Test locally first**
   - Make sure your script works before deployment
   - Use cheaper test models first

4. **Handle errors gracefully**
   ```python
   try:
       response = client.chat.completions.create(...)
   except openai.APIError as e:
       print(f"API Error: {e}")
   ```

---

## ⚠️ Common Pitfalls

- **Forgetting context matters:** Short context = faster/cheaper but limited
- **Not reading output fully:** Always check `choices[0].message.content`
- **Hallucinating facts:** LLMs can confidently say false things
- **Not optimizing prompts:** First attempt rarely is best
- **Hardcoding costs:** Always calculate based on actual usage

---

## 🎓 Next Steps

Once you complete all checkpoint tasks:

1. ✅ You understand LLMs
2. ✅ You can use APIs effectively
3. ✅ You can optimize prompts
4. ✅ You know token economics

**Ready for Level 2?** → [Simple GenAI Apps](./level-2.md)

---

## 📖 FAQ

**Q: Which model should I use?**  
A: Start with GPT-3.5-turbo or Gemini (cheapest). Move to GPT-4 when you need better reasoning.

**Q: Can I use open-source models?**  
A: Absolutely! Explored in Level 2. Ollama and llama.cpp let you run models locally.

**Q: How do I get better at prompt engineering?**  
A: Practice! Experiment with different techniques on your own tasks.

**Q: What about guardrails and safety?**  
A: All major models have built-in safeguards. You'll learn advanced safety in Level 4.

---

## 🔗 Resources

- [OpenAI API Docs](https://platform.openai.com/docs)
- [Google Gemini API](https://ai.google.dev/)
- [Anthropic Claude Docs](https://docs.anthropic.com/)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)
- [Tokens Calculator](https://platform.openai.com/tokenizer)

---

**Status:** LLM Basics Complete ✓  
**Next:** [Level 2: Simple GenAI Apps →](./level-2.md)
