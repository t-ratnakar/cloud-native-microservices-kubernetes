# Cloud-Native Microservices Deployment with Kubernetes

## 📌 Project Overview
This project demonstrates an end-to-end **cloud-native microservices architecture** using **Docker, Kubernetes, Helm, Autoscaling (HPA), Ingress, and CI pipelines**.  
It follows real-world DevOps practices for containerization, orchestration, and deployment.

The application consists of:
- A **Frontend** service (Node.js)
- A **Backend** service (Python Flask)
- Deployed on **Kubernetes (Docker Desktop)**
- Managed using **Helm charts**
- Scaled automatically using **Horizontal Pod Autoscaler (HPA)**
- Exposed using **NGINX Ingress**
- Automated builds via **GitHub Actions CI**

---

## 🧰 Tech Stack
- **Docker** – Containerization
- **Kubernetes** – Container orchestration
- **Helm** – Kubernetes package management
- **NGINX Ingress Controller** – Traffic routing
- **Horizontal Pod Autoscaler (HPA)** – Auto scaling
- **GitHub Actions** – CI pipeline
- **Docker Hub** – Container registry

---

## 📁 Project Structure
```

cloud-native-microservices-kubernetes/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
├── helm-chart/
│   └── microservices/
│       ├── Chart.yaml
│       ├── values.yaml
│       └── templates/
│           ├── backend-deployment.yaml
│           ├── frontend-deployment.yaml
│           ├── services.yaml
│           └── ingress.yaml
└── .github/
└── workflows/
└── ci-cd.yml

````

---

## 🚀 Features Implemented
- Dockerized frontend and backend services
- Kubernetes deployments using Helm
- Service discovery using ClusterIP
- External access using NGINX Ingress
- Horizontal Pod Autoscaler (HPA)
- Rolling updates with zero downtime
- CI pipeline to build and push Docker images

---

## ▶️ How to Run (Local Kubernetes)
### 1. Build & Push Images
```bash
docker build -t bobbylab/backend:v1 ./backend
docker build -t bobbylab/frontend:v1 ./frontend
docker push bobbylab/backend:v1
docker push bobbylab/frontend:v1
````

### 2. Deploy to Kubernetes

```bash
helm install microservices ./helm-chart/microservices
```

### 3. Verify

```bash
kubectl get pods
kubectl get svc
kubectl get ingress
```

---

## 🔄 Autoscaling Test

```bash
kubectl get hpa
kubectl top pods
```

---

## 🧪 CI Pipeline

GitHub Actions automatically:

* Builds Docker images
* Pushes images to Docker Hub on every push to `main`

---

## 📌 Learning Outcomes

* Hands-on Kubernetes troubleshooting
* Helm-based deployments
* Real-world DevOps CI practices
* Autoscaling and traffic management

---

## 🔹 Component Breakdown

### 1️⃣ Frontend Service
- Built using **Node.js**
- Exposed internally via **Kubernetes Service**
- Handles user requests
- Communicates with backend using service discovery

---

### 2️⃣ Backend Service
- Built using **Python Flask**
- Exposed internally using **ClusterIP**
- Handles API logic
- Scales independently using HPA

---

### 3️⃣ Kubernetes
- Orchestrates containers
- Manages pods, deployments, services
- Handles self-healing and rolling updates

---

### 4️⃣ Helm
- Manages Kubernetes manifests
- Simplifies deployments and upgrades
- Enables version-controlled releases

---

### 5️⃣ Horizontal Pod Autoscaler (HPA)
- Monitors CPU metrics via Metrics Server
- Automatically scales frontend and backend pods
- Ensures performance during load

---

### 6️⃣ NGINX Ingress Controller
- Acts as an entry point to the cluster
- Routes external traffic to frontend service
- Provides production-style access

---

### 7️⃣ CI Pipeline (GitHub Actions)
- Triggered on every push to GitHub
- Builds Docker images
- Pushes images to Docker Hub
- Prepares application for deployment
