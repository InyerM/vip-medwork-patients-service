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
  /modules         → Feature modules (patients, providers, etc.)
  /controllers     → Route handlers
  /services        → Business logic
  /entities        → TypeORM/Prisma models
  /dtos            → Data transfer objects
  /config          → Environment + database config
  /utils           → Shared helpers
main.ts            → App bootstrap file
```

---

## ⚠️ Notes

• Each service must be configured with its own .env file. • All responses should follow the
GenericResponse<T> structure. • Statuses must be preloaded in statuses-service with parent-child
relations using a proper seeding strategy. • Database migration/seeding can be done via dedicated
seed.ts scripts or custom NestJS commands.

---

## 👨‍💻 Author

Built by Inyer 👨‍💻
