export interface Experience {
  date: string;
  company: string;
  role: string;
  description: string;
  type: 'work' | 'education' | 'project';
}

export const experiences: Experience[] = [
  {
    date: '2024 — Present',
    company: 'Personal / Open Source',
    role: 'Fullstack Developer',
    description: 'Building production-grade web applications and microservice systems. Focused on scalability, performance, and modern architecture patterns.',
    type: 'work',
  },
  {
    date: '2023 — 2024',
    company: 'Self-Directed Learning',
    role: 'Backend Engineer (Spring Boot + Java)',
    description: 'Deep dive into microservices architecture with Spring Boot, event-driven systems with RabbitMQ, and AI-powered features with RAG + LangChain4j.',
    type: 'work',
  },
  {
    date: '2022 — 2023',
    company: 'University Projects',
    role: 'Frontend Developer (React + Next.js)',
    description: 'Started with React and Next.js, built several full-stack projects with Firebase and Node.js backends. Developed strong UI/UX sensibility.',
    type: 'education',
  },
];
