FROM python:3.10-slim

WORKDIR /app

RUN apt-get update && apt-get install -y gcc libpq-dev
COPY requirements.txt /app/
RUN pip install -r requirements.txt

COPY . /app/
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
