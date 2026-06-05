# Proyecto-Sistemas-Operativos2
Aplicación web completamente funcional bajo la arquitectura de microservicios, aplicando los conceptos de contenerización, orquestación y balanceo de carga

## Descripción
Aplicación web de gestión académica desplegada bajo arquitectura de microservicios usando Angular, Spring Boot, PostgreSQL, Nginx, Docker Swarm, Prometheus y Grafana.

## Arquitectura
- Nginx: balanceador de carga y punto de entrada.
- Frontend: Angular servido con Nginx, 2 réplicas.
- Backend: Spring Boot, 2 réplicas.
- PostgreSQL: base de datos persistente.
- Prometheus: recolección de métricas.
- Grafana: visualización de métricas.
- cAdvisor: métricas de contenedores.

## Diagrama de arquitectura

Usuario
↓
Nginx Load Balancer :80
↓
Frontend Angular x2
↓
Nginx /api/
↓
Backend Spring Boot x2
↓
PostgreSQL

Prometheus + cAdvisor + Grafana monitorean los contenedores.

```mermaid
flowchart TD
    U[Usuario / Navegador] --> N[Nginx Load Balancer :80]

    N --> F1[Frontend Angular Replica 1]
    N --> F2[Frontend Angular Replica 2]

    N -->|/api| B1[Backend Spring Boot Replica 1]
    N -->|/api| B2[Backend Spring Boot Replica 2]

    B1 --> DB[(PostgreSQL)]
    B2 --> DB

    C[cAdvisor] --> P[Prometheus]
    P --> G[Grafana]

## Requisitos
- Docker Desktop
- Docker Swarm inicializado
- Imágenes publicadas en Docker Hub

## Despliegue

```bash
docker swarm init
docker stack deploy -c stack.yml proyecto
