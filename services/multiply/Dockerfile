# services/addition/Dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY src/ .

EXPOSE 10002

CMD ["gunicorn", "--bind", "0.0.0.0:10002", "app:app"]
