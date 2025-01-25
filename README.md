# Node.js Application Deployment on Kubernetes

This project demonstrates how to create a simple Node.js application, containerize it using Docker, and deploy it on a Kubernetes cluster using Minikube. The deployment includes a Horizontal Pod Autoscaler (HPA) to scale the application based on CPU utilization.

---

## Prerequisites

Before starting, ensure you have the following installed on your system:

- Node.js (v18 or later)
- Docker
- Minikube
- kubectl

---

## Application Overview
```bash
.
└── node_app
    ├── Dockerfile
    ├── manifest
    │   ├── deployment.yml
    │   ├── hpa.yml
    │   └── service.yml
    ├── package-lock.json
    ├── package.json
    └── src
        └── index.js

```

The application is a simple Node.js web server built using the express framework. It responds with a "Hello, World!" message when accessed via HTTP.

---

## Screenshots
<img width="1000" alt="image" src="https://github.com/user-attachments/assets/6a6591e3-04fa-48c7-a19c-fafcb00c9807" />
<br/>
<img width="1000" alt="image" src="https://github.com/user-attachments/assets/e67c57f1-7a7e-446b-b13c-280c8e0ba65d" />
<br/>
<img width="1000" alt="image" src="https://github.com/user-attachments/assets/7403c200-0edf-4eed-aa1e-3ae5d47b74b6" />
<br/>
<img width="1000" alt="image" src="https://github.com/user-attachments/assets/9f2b7108-0f68-438c-812a-4a8e5232de41" />
<br/>
<img width="1000" alt="image" src="https://github.com/user-attachments/assets/2cd53338-66b8-4a0e-9c57-7043dd4dab37" />

---




