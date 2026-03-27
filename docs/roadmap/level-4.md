# Level 4: Production Systems

**Duration:** 6-8 weeks  
**Target:** Deploy robust, scalable GenAI systems in real environments

---

## 🎯 Learning Outcomes

By the end of this level, you will:

✓ Build production-ready applications  
✓ Implement monitoring and logging  
✓ Handle errors and edge cases  
✓ Optimize performance and costs  
✓ Set up CI/CD pipelines  
✓ Scale applications  

---

## 📚 What You Learn

### 1. Production Architecture (4-5 hours)

**GenAI App Architecture:**
```
User Request
    ↓
[API Layer] ← Load Balancer
    ↓
[Validation & Auth]
    ↓
[Queue (for async)]
    ↓
[Worker Pool] ← Multiple instances
    ↓
[LLM Cache]
    ↓
[Vector DB] [External APIs]
    ↓
[Response]
    ↓
[Logging & Monitoring]
```

**Key Components:**

**a) API Framework (FastAPI)**
```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import logging

app = FastAPI()
logger = logging.getLogger(__name__)

class QueryRequest(BaseModel):
    text: str
    model: str = "gpt-3.5-turbo"

@app.post("/chat")
async def chat(request: QueryRequest):
    try:
        # Validate
        if len(request.text) > 10000:
            raise HTTPException(400, "Text too long")
        
        # Process
        response = llm.invoke(request.text)
        
        # Log
        logger.info(f"Processed: {request.text[:50]}")
        
        return {"response": response.content}
    
    except Exception as e:
        logger.error(f"Error: {e}")
        raise HTTPException(500, "Internal error")

# Run: uvicorn main:app --reload
```

**b) Error Handling & Retries**
```python
from tenacity import retry, wait_exponential, stop_after_attempt

@retry(
    wait=wait_exponential(multiplier=1, min=2, max=10),
    stop=stop_after_attempt(3)
)
def call_llm_with_retry(prompt):
    return llm.invoke(prompt)

# Automatically retries with backoff
```

**c) Caching (Avoid Redundant Calls)**
```python
from functools import lru_cache
import redis

# Simple local cache
@lru_cache(maxsize=128)
def get_embedding(text):
    return embeddings.embed_query(text)

# Distributed cache with Redis
redis_client = redis.Redis(host='localhost', port=6379)

def cached_llm_call(prompt):
    cache_key = f"llm:{hash(prompt)}"
    cached = redis_client.get(cache_key)
    if cached:
        return cached.decode()
    
    result = llm.invoke(prompt)
    redis_client.setex(cache_key, 3600, result)  # Cache for 1 hour
    return result
```

### 2. Monitoring & Logging (3-4 hours)

**Logging Best Practices:**
```python
import logging
from pythonjsonlogger import jsonlogger

# JSON logging for easy parsing
logHandler = logging.StreamHandler()
formatter = jsonlogger.JsonFormatter()
logHandler.setFormatter(formatter)
logger = logging.getLogger()
logger.addHandler(logHandler)

logger.info("Event occurred", extra={
    "user_id": 123,
    "model": "gpt-4",
    "tokens": 150,
    "cost": 0.003
})
```

**Metrics to Track:**
```python
from prometheus_client import Counter, Histogram, Gauge

# Request counter
request_count = Counter(
    'llm_requests_total', 'Total requests'
)

# Response time histogram
response_time = Histogram(
    'response_time_seconds', 'Response time in seconds'
)

# Active requests gauge
active_requests = Gauge(
    'active_requests', 'Currently processing'
)

# Usage in code
@app.post("/chat")
async def chat(request):
    request_count.inc()
    with response_time.time():
        active_requests.inc()
        response = process(request)
        active_requests.dec()
    return response
```

**Monitoring Stack:**
- **Logging:** CloudWatch, ELK Stack, Datadog
- **Metrics:** Prometheus, CloudWatch, DataDog
- **Tracing:** Jaeger, Datadog, New Relic
- **Dashboards:** Grafana, CloudWatch

### 3. Testing (3-4 hours)

**Unit Testing:**
```python
import pytest
from unittest.mock import patch

def test_chat_endpoint():
    with patch('llm.invoke') as mock_llm:
        mock_llm.return_value = "test response"
        
        response = chat(QueryRequest(text="hello"))
        
        assert response["response"] == "test response"
        mock_llm.assert_called_once()

def test_input_validation():
    with pytest.raises(HTTPException):
        chat(QueryRequest(text="x" * 50000))
```

**Integration Testing:**
```python
@pytest.fixture
def client():
    return TestClient(app)

def test_full_flow(client):
    # Test API endpoint
    response = client.post("/chat", json={"text": "hello"})
    assert response.status_code == 200
    assert "response" in response.json()
```

**Load Testing:**
```python
from locust import HttpUser, task, between

class ChatUser(HttpUser):
    wait_time = between(1, 5)
    
    @task
    def chat(self):
        self.client.post("/chat", json={"text": "hello"})

# Run: locust -f locustfile.py --host=http://localhost:8000
```

**LLM Output Testing:**
```python
# Verify outputs are reasonable
def test_response_quality():
    response = llm.invoke("Explain Python")
    
    assert len(response) > 100, "Response too short"
    assert "Python" in response, "Topic not addressed"
    assert len(response) < 10000, "Response too long"

# Use LLM judges for quality
def test_with_llm_judge():
    generated = model.generate(prompt)
    judge_prompt = f"Is this good? {generated}"
    judgment = judge_model.invoke(judge_prompt)
    assert "good" in judgment.lower()
```

### 4. Deployment (4-5 hours)

**Docker Container:**
```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]
```

**Docker Compose (with Redis, etc.):**
```yaml
services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    depends_on:
      - redis

  redis:
    image: redis:7
    ports:
      - "6379:6379"
```

**Cloud Deployment Options:**

1. **Heroku (Simple, Free)**
   ```bash
   git push heroku main
   ```

2. **Google Cloud Run (Serverless)**
   ```bash
   gcloud run deploy myapp --source .
   ```

3. **AWS Lambda + API Gateway**
   - Use SAM or Serverless framework
   - Handle cold starts for LLM

4. **Railway / Render (Developer Friendly)**
   - Connect GitHub repo
   - Auto-deploy on push
   - Environment variables in UI

### 5. Cost Optimization (3-4 hours)

**Token Usage Optimization:**
```python
def optimize_prompt(user_input):
    # Remove unnecessary whitespace
    cleaned = user_input.strip()
    
    # Use cheaper model for simple tasks
    if len(cleaned) < 100:
        model = "gpt-3.5-turbo"
    else:
        model = "gpt-4"
    
    return model, cleaned

# Track costs
from langchain.callbacks import get_openai_callback
with get_openai_callback() as cb:
    result = chain.run(input)
    print(f"Cost: ${cb.total_cost}")
    logger.info("call_cost", extra={"cost": cb.total_cost})
```

**Caching Strategies:**
- Cache embeddings
- Cache LLM responses (same prompt = same output)
- Use Redis for distributed cache
- Implement TTL and eviction policies

**Batch Processing:**
```python
# Process multiple requests at once = cheaper
def process_batch(prompts):
    # Instead of calling LLM N times
    # Call once with all and parse results
    combined = "\n".join(prompts)
    responses = llm.invoke(combined)
    return parse_responses(responses)
```

---

## 📚 Projects to Explore

### Repository Projects for Level 4

**Production Applications:**
- `ai-apps-collection/cerebras_inferance_comparision/`
- `llm-testing/` (Testing & Evaluation)
- `ai-agents/` (Enterprise Agent Systems)
- `workshop/` (Production Patterns)

**Advanced Integration:**
- `ai-apps-collection/MCP_Implementation/`
- `ai-apps-collection/TypeSafe_Agno/`
- `rag/` (With Production Features)

---

## ✅ Checkpoint Tasks

Complete these to master Level 4:

### Task 1: FastAPI Application (2 hours)
- [ ] Create FastAPI app with 3+ endpoints
- [ ] Implement input validation
- [ ] Add error handling
- [ ] Test with curl/Postman
- [ ] Save as `main.py`

### Task 2: Logging & Monitoring (2 hours)
- [ ] Add structured logging with JSON
- [ ] Implement Prometheus metrics (3+ metrics)
- [ ] Log all important events
- [ ] Verify logs in console
- [ ] Save config in `logging_config.py`

### Task 3: Unit & Integration Tests (2 hours)
- [ ] Write 5+ unit tests with pytest
- [ ] Write 2+ integration tests
- [ ] Test error scenarios
- [ ] Achieve 80%+ coverage
- [ ] Save as `test_main.py`

### Task 4: Dockerization (1.5 hours)
- [ ] Create Dockerfile
- [ ] Build and test locally
- [ ] Create docker-compose with Redis
- [ ] Verify app runs in container
- [ ] Save Docker files

### Task 5: Deploy to Cloud (2 hours)
- [ ] Deploy to Heroku, Railway, or Google Cloud Run
- [ ] Set environment variables
- [ ] Test live endpoint
- [ ] Document deployment steps
- [ ] Document URL

### Task 6: Cost & Performance Optimization (2 hours)
- [ ] Analyze token usage
- [ ] Implement caching
- [ ] Measure performance before/after
- [ ] Document optimizations in `optimization.md`
- [ ] Calculate cost reduction

### Task 7: Production Checklist (3 hours)
Create production-ready system:
- [ ] FastAPI with validation
- [ ] Comprehensive logging
- [ ] Error handling & retries
- [ ] Metrics and monitoring
- [ ] Unit tests (80%+ coverage)
- [ ] Docker container
- [ ] Deployed and tested
- [ ] Documentation complete

---

## 💡 Best Practices

1. **Never Hardcode Secrets**
   ```python
   import os
   api_key = os.getenv('OPENAI_API_KEY')
   ```

2. **Implement Circuit Breaker**
   ```python
   from pybreaker import CircuitBreaker
   breaker = CircuitBreaker(fail_max=5, reset_timeout=60)
   
   @breaker
   def call_llm():
       return llm.invoke(prompt)
   ```

3. **Version Your APIs**
   ```python
   @app.post("/v1/chat")
   async def chat_v1():
       pass
   
   @app.post("/v2/chat")
   async def chat_v2():
       pass
   ```

4. **Monitor Costs Closely**
   - Set API spending limits
   - Track cost per feature
   - Optimize expensive operations

5. **Graceful Degradation**
   - Fallback to cheaper models
   - Cache when possible
   - Queue long operations

---

## ⚠️ Common Pitfalls

- **Insufficient Logging:** Can't debug production issues
- **No Error Recovery:** Single failure = system down
- **Unbounded Costs:** No monitoring = expensive bills
- **Tight Coupling:** Hard to scale components
- **No Load Testing:** Breaks under real traffic

---

## 🎓 Next Steps

Once you complete all checkpoint tasks:

1. ✅ Your app is production-grade
2. ✅ You have monitoring and logging
3. ✅ You can deploy to cloud
4. ✅ You understand cost optimization

**Ready for Level 5?** → [Advanced GenAI](./level-5.md)

---

## 📖 FAQ

**Q: Should I use Heroku or AWS?**  
A: Heroku/Railway for simplicity. AWS for scale and cost control.

**Q: How much will my app cost?**  
A: Depends on usage. Start monitoring immediately to understand patterns.

**Q: What's the best way to handle rate limits?**  
A: Use queue systems (Celery, RQ) to spread requests over time.

**Q: How do I handle model changes?**  
A: Version your API endpoints. Test new models in parallel.

---

## 🔗 Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Pytest Guide](https://docs.pytest.org/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Monitoring Guide](https://prometheus.io/docs/guides/basic/)
- [Cost Optimization](https://openai.com/blog/reducing-costs-with-function-calling/)

---

**Status:** Production Systems Complete ✓  
**Next:** [Level 5: Advanced GenAI →](./level-5.md)
