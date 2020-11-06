FROM python:3.8-slim-buster

COPY . /app

WORKDIR /app

RUN \
    pip3 install --upgrade pip && \
    pip3 install gunicorn && \
    pip3 install .

EXPOSE 8000

CMD ["gunicorn", "-c", "docker/dev/gunicorn/config.py", "lns.wsgi"]
