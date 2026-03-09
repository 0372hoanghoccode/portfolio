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
    company: 'react-router / remix-run (Open Source)',
    role: 'Contributor — PR #14741 & #14714',
    description: 'Submitted bug fix PRs to react-router — the standard routing library for React used by millions of developers (56k+ GitHub stars). Fixed TypeScript compatibility and URL parsing edge cases.',
    type: 'project',
  },
  {
    date: 'Jan 2026',
    company: 'shadcn/ui (Open Source)',
    role: 'Contributor — PR #9292 merged',
    description: 'Contributed a bug fix to shadcn/ui — one of the most widely used open-source UI libraries in the React ecosystem (70k+ GitHub stars). PR reviewed and merged by the maintainers.',
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
    date: '2022 — Present',
    company: 'Đại học Sài Gòn (Saigon University)',
    role: 'Bachelor of Information Technology',
    description: 'Studying Information Technology at Saigon University, Ho Chi Minh City. Built multiple fullstack projects as part of coursework and self-directed learning.',
    type: 'education',
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
