FROM python:3.9-slim

WORKDIR /app

RUN apt-get update && apt-get install -y dnsutils

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

RUN apt-get install -y traceroute
COPY src/ .

EXPOSE 11000

CMD ["gunicorn", "--bind", "0.0.0.0:11001", "app:app"]
