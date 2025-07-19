# VIP Medwork - Patients Microservice

This repository contains the patients microservice required by the VIP Medwork system.

---

## 🧰 Technologies

• NestJS • TypeScript • PostgreSQL • TypeORM • RabbitMQ • Docker • Zod

---

## 📦 Requirements

• Docker • Docker Compose (optional if using multiple services)

---

## 🚀 How to Run a Microservice

Each microservice has its own Dockerfile. You can build and run it individually:

1. Navigate to the microservice folder

cd patients-service # or providers-service, etc.

2. Build the Docker image

```bash
docker build -t vip-medwork-patients .
```

Replace vip-medwork-patients with the appropriate name for each service.

3. Run the container

```bash
docker run -d --env-file .env vip-medwork-patients
```

---

## 🗂 Folder Structure (Each Service)

```bash
/src
  /app             → Application files (app.module.ts)
  /modules         → Feature modules (patients, providers, etc.)
  /common          → Common files (utils, enums, etc.)
  /router          → API routes
  /main.ts         → App bootstrap file
```

---

## ⚠️ Notes

• Each service must be configured with its own .env file. • All responses should follow the
GenericResponse<T> structure.

---

## 👨‍💻 Author

Built by Inyer 👨‍💻
