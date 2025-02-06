FROM python:3.9-slim

WORKDIR /app

RUN apt-get update && apt-get install -y dnsutils

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY src/ .

EXPOSE 11002

CMD ["gunicorn", "--bind", "0.0.0.0:11002", "app:app"]
