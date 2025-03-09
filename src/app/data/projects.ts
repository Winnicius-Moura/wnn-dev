export interface Project {
  id: string
  name: string
  subtitle?: string
  description: string
  technologies: string[]
  youtubeId?: string
  images: string[]
}


export const projects: Project[] = [
  {
    id: 'projeto-1',
    name: 'Craque do jogo - Paulistão 2025',
    subtitle: 'Informações em tempo real e animações via web nos painéis de LED',
    description: 'Fui o único desenvolvedor responsável pelo projeto, atuando como líder técnico e desenvolvedor full stack. Tomei todas as decisões técnicas, incluindo a escolha de linguagens, frameworks e arquitetura. Desenvolvi a solução completa, desde o front-end até o back-end, com base nas necessidades apresentadas pelo sócio proprietário da empresa. A equipe de design contribuiu com a criação das artes e elementos visuais utilizados no projeto.',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'SQLite', 'Go-lang', 'Python', 'WebSocket', 'Redux-toolkit', 'ServiceWorkers', 'Docker', 'Linux', 'Vite.js'],
    youtubeId: 'https://www.youtube.com/watch?v=frh9aMJiarA&ab_channel=wnn-dev',
    images: ['/images/image1.png', '/images/image2.png', '/images/image3.jpg', '/images/image4.png',
      '/images/image5.jpg', '/images/image6.jpg',],
  },
];