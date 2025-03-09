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
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'SQLite', 'Go-lang', 'Python', 'PyQt5', 'WebSocket', 'Redux-toolkit', 'ServiceWorkers', 'Docker', 'Linux', 'Vite.js', 'Lottie', 'NDI'],
    youtubeId: 'https://www.youtube.com/watch?v=frh9aMJiarA&ab_channel=wnn-dev',
    images: ['/images/image1.png', '/images/image2.png', '/images/image3.jpg', '/images/image4.png',
      '/images/image5.jpg', '/images/image6.jpg', '/images/image9.jpg'],
  },
  {
    id: 'projeto-2',
    name: 'Virada Recife 2025',
    subtitle: 'Contagem regressiva animada via web nos painéis de LED',
    description: 'Freelancer full stack. Equipe de design contribuiu com a criação das artes e elementos visuais utilizados no projeto.',
    technologies: ['Python', 'PyQt5', 'JavaScript', 'HTML', 'LottieJS', 'NDI'],
    youtubeId: 'https://youtube.com/shorts/gJqmvTK2-OQ?si=exbQ09eLEPFyKmqq',
    images: ['/images/virada1.png', '/images/virada.png'],
  },

  {
    id: 'projeto-3',
    name: 'MBA em Gestão Empreendedora e Inovação',
    subtitle: 'Sistema escolar para gestão de eventos e provas',
    description: 'Bolsa de Longa Duração - DesenvolvimentoTecnológico - Front-end',
    technologies: ['React', 'TypeScript', 'TailwindCss', 'Vite.js'],
    images: ['/images/plataforma.png', '/images/plataforma2.png', '/images/plataforma3.png', '/images/plataforma4.png', '/images/plataforma5.png', 
      '/images/plataforma6.png','/images/plataforma1.jpg'],
  },
];