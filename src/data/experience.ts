export interface Experience {
  date: string;
  company: string;
  role: string;
  description: string;
  type: 'work' | 'education' | 'project';
}

export const experiences: Experience[] = [
  {
    date: 'Jan 2026',
    company: 'shadcn/ui (Open Source)',
    role: 'Contributor — PR #9292 merged',
    description: 'Contributed a bug fix to the Calendar component. PR reviewed and merged by the maintainers.',
    type: 'project',
  },
  {
    date: '2026',
    company: 'Personal Project',
    role: 'Fullstack Developer — Movie-Chill',
    description: 'Built a movie discovery platform as a personal project. Chose Next.js + Firebase for a 100% free hosting stack. Reached 400+ daily users and 600+ accounts.',
    type: 'project',
  },
  {
    date: '2024 — 2025',
    company: 'University Project',
    role: 'Fullstack Developer — SocialMicro',
    description: 'Designed and built a microservices-based social platform end-to-end (frontend + backend). Used Neo4j, MongoDB, MySQL, Spring Boot, React, RAG, and LangChain4j.',
    type: 'education',
  },
  {
    date: '2024 — 2025',
    company: 'University Project',
    role: 'Fullstack Developer — TourManagementSystem',
    description: 'Developed a full-stack tour management system with AI-powered search (RAG + VectorDB), real-time WebSocket, and event-driven architecture with RabbitMQ.',
    type: 'education',
  },
];
