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
