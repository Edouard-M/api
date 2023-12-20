# The first instruction is what image we want to base our container on
# We Use an official Python runtime as a parent image
FROM python:3.10

# The enviroment variable ensures that the python output is set straight
# to the terminal with out buffering it first
ENV PYTHONUNBUFFERED 1

# Create/Set working directory
RUN mkdir /api_service
WORKDIR /api_service

# Copy/Install requirements
COPY requirements.txt /api_service/
RUN pip install -r requirements.txt

# Copy project
COPY . /api_service/

# Port where the Django app runs
#EXPOSE 8000

# Start server
CMD python src/manage.py runserver 0.0.0.0:8000
