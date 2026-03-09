export interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: '#61DAFB',
    items: ['React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#6DB33F',
    items: ['Spring Boot', 'Node.js', 'NestJS', 'Spring AI', 'REST API', 'WebSocket'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: '#336791',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Neo4j', 'Redis', 'VectorDB / pgvector'],
  },
  {
    category: 'Architecture & Infra',
    icon: '🏗️',
    color: '#FF9900',
    items: ['Microservices', 'RabbitMQ', 'Docker', 'GitHub Actions', 'RAG', 'LangChain4j'],
  },
  {
    category: 'Tools & Practices',
    icon: '🔧',
    color: '#F05032',
    items: ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code', 'Agile/Scrum'],
  },
];
