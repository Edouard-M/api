# The first instruction is what image we want to base our container on
# We Use an official Python runtime as a parent image
FROM python:3.10

# The enviroment variable ensures that the python output is set straight
# to the terminal with out buffering it first
ENV PYTHONUNBUFFERED 1

# create root directory for our project in the container
#RUN mkdir /api_service

# Set the working directory to /api_service
#WORKDIR /api_service

# Copy the current directory contents into the container at /api_service
#ADD . /api_service/

# Install any needed packages specified in requirements.txt
#RUN pip install -r requirements.txt

# Allows docker to cache installed dependencies between builds
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Mounts the application code to the image
COPY . api_service
WORKDIR /api_service

# port where the Django app runs
EXPOSE 8000

# start server
#CMD python src/manage.py runserver
CMD python src/manage.py runserver 0.0.0.0:8000
#CMD ["python", "src/manage.py", "runserver", "0.0.0.0:8000"]
# CMD ["gunicorn","--bind", ":5000", "core.wsgi:application"]
