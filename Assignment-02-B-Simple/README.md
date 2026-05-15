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

## Conclusion

In this assignment, a Docker image is created using a Dockerfile and a container is run from that image. The sample HTML page is served using Nginx inside the Docker container.
