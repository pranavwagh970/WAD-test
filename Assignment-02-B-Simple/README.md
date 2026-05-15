# Assignment-02-B Simple

## Problem Statement

Create Docker Container Environment using NVIDIA Docker or any other Docker container.

## Aim

To create a simple Docker container environment and run a web page inside a container.

## What Is Docker?

Docker is a platform used to create and run applications inside containers. A container contains the application code and required environment, so the application can run the same way on any system.

## Requirements

- Docker Desktop installed.
- Basic HTML file.
- Dockerfile.

## Project Files

- `index.html` contains a simple web page.
- `Dockerfile` contains instructions to create the Docker image.
- `docker-commands.txt` contains all commands used in this assignment.

## Dockerfile Explanation

```dockerfile
FROM nginx:alpine
```

This line uses the lightweight Nginx image as the base image.

```dockerfile
COPY index.html /usr/share/nginx/html/index.html
```

This line copies our HTML file into the Nginx web server folder inside the container.

```dockerfile
EXPOSE 80
```

This line tells Docker that the container uses port `80`.

## Steps To Create And Run Docker Container

### 1. Check Docker Version

```bash
docker --version
```

### 2. Build Docker Image

Run this command inside the `Assignment-02-B-Simple` folder:

```bash
docker build -t wad-docker-demo .
```

Here, `wad-docker-demo` is the image name.

### 3. Run Docker Container

```bash
docker run -d -p 8080:80 --name wad-container wad-docker-demo
```

Explanation:

- `-d` runs the container in background.
- `-p 8080:80` maps local port `8080` to container port `80`.
- `--name wad-container` gives a name to the container.

### 4. Open In Browser

Open this URL:

```text
http://localhost:8080
```

### 5. Check Running Containers

```bash
docker ps
```

### 6. Stop Container

```bash
docker stop wad-container
```

### 7. Remove Container

```bash
docker rm wad-container
```

## Optional NVIDIA Docker Command

If NVIDIA Docker is installed, GPU support can be tested using:

```bash
docker run --gpus all nvidia/cuda:12.3.2-base-ubuntu22.04 nvidia-smi
```

This assignment uses a normal Docker container because the problem statement allows NVIDIA Docker or any other container.

## How To Run In VS Code

1. Open Docker Desktop and wait until Docker is running.
2. Open VS Code.
3. Open the folder `Assignment-02-B-Simple`.
4. Open terminal and run:

```bash
docker build -t wad-docker-demo .
docker run -d -p 8080:80 --name wad-container wad-docker-demo
```

5. Open `http://localhost:8080` in the browser.

If the container name already exists, stop and remove it:

```bash
docker stop wad-container
docker rm wad-container
```

Then run the container again.

## Common Problems And Solutions

### Problem 1: `docker` is not recognized

Error:

```text
docker : The term 'docker' is not recognized
```

Reason:

Docker Desktop is not installed, not opened, or Docker is not added to PATH.

Solution:

1. Install Docker Desktop for Windows.
2. Choose **Download for Windows - AMD64** for normal Windows laptops.
3. After installation, restart the PC if asked.
4. Open Docker Desktop from Start Menu.
5. Wait until Docker is running.
6. Check again:

```bash
docker --version
```

### Problem 2: Container name already exists

Error:

```text
Conflict. The container name "/wad-container" is already in use
```

Reason:

The container was already created earlier with the same name.

Solution:

Stop and remove the old container:

```bash
docker stop wad-container
docker rm wad-container
```

Then run again:

```bash
docker run -d -p 8080:80 --name wad-container wad-docker-demo
```

### Problem 3: Browser page does not open

Reason:

The container may not be running.

Solution:

Check running containers:

```bash
docker ps
```

If `wad-container` is listed, open:

```text
http://localhost:8080
```

### Problem 4: During Docker installation, desktop shortcut option

The desktop shortcut is optional. If unchecked, Docker can still be opened from the Start Menu by searching **Docker Desktop**.

### Problem 5: Which installer should be downloaded?

For most Windows laptops and desktops, download:

```text
Download for Windows - AMD64
```

Do not select ARM64 unless the system has an ARM processor.

## Viva Questions

### 1. What is Docker?

Docker is a containerization platform used to package and run applications in isolated environments called containers.

### 2. What is a container?

A container is a lightweight isolated environment that contains the application and everything required to run it.

### 3. What is a Docker image?

A Docker image is a blueprint or template used to create containers.

### 4. What is the difference between image and container?

An image is a template. A container is a running instance of that image.

### 5. What is Dockerfile?

A Dockerfile is a file that contains instructions to create a Docker image.

### 6. What is the use of `FROM nginx:alpine`?

It uses the lightweight Nginx image as the base image for serving the HTML page.

### 7. What is Nginx?

Nginx is a web server used to serve web pages and static files.

### 8. What is the use of `COPY index.html /usr/share/nginx/html/index.html`?

It copies our local `index.html` file into the Nginx web server folder inside the Docker image.

### 9. What is the use of `EXPOSE 80`?

It indicates that the container application uses port `80`.

### 10. What does `docker build -t wad-docker-demo .` do?

It builds a Docker image from the Dockerfile and gives it the name `wad-docker-demo`.

### 11. What does `docker run -d -p 8080:80 --name wad-container wad-docker-demo` do?

It creates and starts a container from the image. It maps local port `8080` to container port `80`.

### 12. Why do we use port mapping?

Port mapping allows us to access the application running inside the container from the host machine browser.

### 13. What is the use of `docker ps`?

It shows the list of currently running containers.

### 14. What is the use of `docker stop`?

It stops a running container.

### 15. What is the use of `docker rm`?

It removes a stopped container.

## Conclusion

In this assignment, a Docker image is created using a Dockerfile and a container is run from that image. The sample HTML page is served using Nginx inside the Docker container.
