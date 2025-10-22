# 🐳 React + Node Docker Demo

A fun, containerized **React + Node.js** application that demonstrates how a frontend and backend can communicate seamlessly inside Docker using **Docker Compose**.

This project includes:
- A **React frontend** with Material UI styling 🐱  
- A **Node.js Express backend** that serves playful random messages 😸  
- A **Docker Compose setup** that runs both services together 😸  

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

### 🏗️ Docker Commands
`docker compose up --build` - Builds images for Frontend and Backend.

`docker compose up` - Starts all services defined in docker-compose.yml

`docker compose down` - Stops all running containers.
