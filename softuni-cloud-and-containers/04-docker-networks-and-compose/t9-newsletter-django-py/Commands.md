1. Create the `Dockerfile` sequence
2. Build the image using the `Dockerfile`
3. `docker build -t simplepageapp .`
4. Run the container
5. `docker run -d -p 8000:8000 simplepageapp:1.0.0`
6. Create a `docker-compose.yml` file to run it via that
7. `docker compose build`
8. ALternative `CMD` option added to `Dockerfile`
9. `CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]`
10. This way static files are properly served