---
title: TourManagementSystem
description: A tour management platform featuring AI-powered RAG search, real-time WebSocket communication, and event-driven architecture with RabbitMQ.
tech:
  [
    Spring Boot,
    Next.js,
    PostgreSQL,
    Redis,
    RabbitMQ,
    WebSocket,
    VectorDB,
    RAG,
    Spring AI,
    Spring Data JPA,
    JWT,
    JUnit,
    Mockito,
    JavaMailSender,
    Java,
  ]
github: https://github.com/0372hoanghoccode/TourManagementSystem
featured: true
status: active
stats:
  "Architecture": "Monolith → Modular"
  "AI Features": "RAG + Spring AI"
  "Payments": "VNPay + PayPal"
  "Cache": "Redis"
date: 2024-09-01
order: 2
---

## Overview

TourManagementSystem is an comprehensive platform for managing tours, bookings, and customer interactions. It combines a robust **Spring Boot** backend with a modern **Next.js** frontend, enriched with AI-powered features.

## Key Features

- Full tour lifecycle management (create, book, track)
- **VNPay & PayPal** payment gateway integration
- **RAG (Retrieval-Augmented Generation)** for intelligent tour recommendations
- **VectorDB** integration for semantic search across tour descriptions
- **WebSocket** for real-time notifications and booking updates
- **RabbitMQ** for async event processing between services
- PostgreSQL for relational data with complex queries

## Technical Highlights

- Spring Boot REST API with Spring Data JPA and JWT authentication
- Spring AI for RAG pipeline and VectorDB integration
- Redis caching for performance-critical queries
- JavaMailSender for email notifications
- JUnit + Mockito for unit and integration testing
- Next.js frontend with Server Components
- PostgreSQL + pgvector for vector similarity search
- RabbitMQ message queuing for event-driven flows
- WebSocket real-time bidirectional communication
