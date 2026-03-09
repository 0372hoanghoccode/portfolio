---
title: TourManagementSystem
description: An enterprise-grade tour management platform featuring AI-powered RAG search, real-time WebSocket communication, and event-driven architecture with RabbitMQ.
tech:
  [Spring Boot, Next.js, PostgreSQL, RabbitMQ, WebSocket, VectorDB, RAG, Java]
github: https://github.com/0372hoanghoccode/TourManagementSystem
featured: true
status: active
stats:
  "Architecture": "Monolith → Modular"
  "AI Features": "RAG + VectorDB"
  "Realtime": "WebSocket"
date: 2024-06-01
order: 2
---

## Overview

TourManagementSystem is an enterprise-grade platform for managing tours, bookings, and customer interactions. It combines a robust **Spring Boot** backend with a modern **Next.js** frontend, enriched with AI-powered features.

## Key Features

- Full tour lifecycle management (create, book, track)
- **RAG (Retrieval-Augmented Generation)** for intelligent tour recommendations
- **VectorDB** integration for semantic search across tour descriptions
- **WebSocket** for real-time notifications and booking updates
- **RabbitMQ** for async event processing between services
- PostgreSQL for relational data with complex queries

## Technical Highlights

- Spring Boot REST API with comprehensive CRUD operations
- Next.js 14 frontend with Server Components
- PostgreSQL + pgvector for vector similarity search
- RabbitMQ message queuing for event-driven flows
- WebSocket real-time bidirectional communication
