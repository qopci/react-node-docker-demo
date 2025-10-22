# 🐳 React + Node Docker Demo

A fun, containerized **React + Node.js** application that demonstrates how a frontend and backend can communicate seamlessly inside Docker using **Docker Compose**.

This project includes:
- A **React frontend** with Material UI styling 🎨 
- A **Node.js Express backend** that serves playful random messages 💌
- A **Docker Compose setup** that runs both services together ⚡  

---

## 🚀 Project Overview

This demo is part of the **Expert Groups – Dockerization & Container Deployment** assignment.  
The goal is to show how to Dockerize both a React frontend and Node backend, connect them using Compose, and serve them on different ports.

### 🧩 Architecture

| Service | Description | Port |
|----------|--------------|------|
| **frontend** | React app built with Material UI | `3000` |
| **backend** | Node.js Express API that serves random messages | `3001` |

---

## 🧰 Prerequisites

Make sure you have the following installed on your computer:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/downloads)

> ⚠️ Docker Desktop must be **running** before you execute any Docker commands.

---

## 📦 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/react-node-docker-demo.git
cd react-node-docker-demo
```
---

## 🏗️ Docker Commands
`docker compose up --build` - Builds images for Frontend and Backend.

`docker compose up` - Starts all services defined in docker-compose.yml

`docker compose down` - Stops all running containers.

---

## ⚙️ Dockerfile Explanation

Both the frontend and backend use Dockerfiles to define how their Docker images are built.  

**Key steps in both Dockerfiles:**

1. `FROM node:20` → Uses the official Node.js 20 base image.  
2. `WORKDIR /app` → Sets the working directory inside the container.  
3. `COPY package*.json ./` → Copies dependency files.  
4. `RUN npm install` → Installs all dependencies.  
5. `COPY . .` → Copies the rest of the project files.  
6. `EXPOSE <port>` → Exposes the container port (frontend: 3000, backend: 3001).  
7. `CMD [...]` → Command to run the app (`node index.js` for backend, `npm start` for frontend).  

This setup ensures that each service runs independently in its container with all dependencies installed and ports properly exposed for Docker Compose networking.

---

## 📝 Docker Compose YML File Explanation

The `docker-compose.yml` file defines the configuration for running both frontend and backend in Docker. Here's a breakdown:

### Explanation

- **version: "3.9"**  
  Specifies the Docker Compose file format version.

- **services**  
  Defines the containers to run.

  - **backend**  
    - `build: ./backend` → Builds the Docker image using the `backend` folder’s Dockerfile.  
    - `ports: "3001:3001"` → Maps container port `3001` to host port `3001`.

  - **frontend**  
    - `build: ./frontend` → Builds the Docker image using the `frontend` folder’s Dockerfile.  
    - `ports: "3000:3000"` → Maps container port `3000` to host port `3000`.  
    - `environment: CHOKIDAR_USEPOLLING=true` → Ensures file changes are detected properly on Windows/macOS for hot reloading.  
    - `depends_on: backend` → Ensures the frontend starts **after** the backend container is ready.
