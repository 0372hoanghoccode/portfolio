---
title: SocialMicro
description: A social platform built on a microservices architecture using Neo4j for social graphs, MongoDB for posts, MySQL for users, and AI-powered content features with LangChain4j.
tech:
  [
    Spring Boot,
    React,
    Microservices,
    Neo4j,
    MongoDB,
    MySQL,
    Docker,
    LangChain4j,
    RAG,
    Java,
  ]
github: https://github.com/0372hoanghoccode/SocialMicro
featured: true
status: active
stats:
  "Architecture": "Microservices"
  "Databases": "3 (Neo4j, MongoDB, MySQL)"
  "AI": "RAG + LangChain4j"
date: 2024-09-01
order: 3
---

## Overview

SocialMicro is a production-grade social media platform built with a **true microservices architecture**. Each service owns its data and communicates asynchronously, showcasing advanced distributed systems design.

## Architecture

| Service      | Database | Responsibility                    |
| ------------ | -------- | --------------------------------- |
| User Service | MySQL    | Auth, profiles, sessions          |
| Post Service | MongoDB  | Posts, media, feeds               |
| Social Graph | Neo4j    | Follows, friends, recommendations |
| AI Service   | VectorDB | RAG & content recommendations     |

## Key Features

- **Neo4j** graph database for social connections and recommendations
- **MongoDB** for flexible post/media storage
- **MySQL** for structured user data and auth
- **LangChain4j RAG** for AI-powered content search & recommendations
- React frontend consuming multiple microservice APIs
- Service-to-service JWT authentication

## Technical Highlights

- Each microservice independently deployable via Docker
- Saga pattern for distributed transactions
- API Gateway for routing and rate limiting
- LangChain4j for embedding generation and RAG pipeline
