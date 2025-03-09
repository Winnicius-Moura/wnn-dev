export interface Project {
  id: string
  name: string
  subtitle?: string
  description: string
  technologies: string[]
  youtubeId?: string
  images?: string[]
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
    subtitle: 'Sistema escolar para gestão de eventos, relatórios, notas e provas',
    description: 'Bolsa de Longa Duração - DesenvolvimentoTecnológico - Front-end',
    technologies: ['React', 'TypeScript', 'TailwindCss', 'Redux-Toolkit', 'Vite.js'],
    images: ['/images/plataforma.png', '/images/plataforma2.png', '/images/plataforma3.png', '/images/plataforma4.png', '/images/plataforma5.png',
      '/images/plataforma6.png', '/images/plataforma1.jpg'],
  },
  {
    id: 'projeto-4',
    name: 'Bolão da sorte Cariri',
    subtitle: 'Site de apostas baseado nas loterias Caixa',
    description: 'Desenvolvimento Front-end Freelancer',
    technologies: ['React', 'Axios', 'Styled Components', 'Vitejs', 'TypeScript', 'Redux'],
    images: ['/images/bolao1.jpg',]
  },
  {
    id: 'projeto-5',
    name: 'Bets Provider Tools',
    subtitle: 'Provedor de dados para sites de apostas',
    description: 'Desenvolvimento CLT full stack onde participei ativamente desde a concepção inicial do projeto em reuniões com General Manager, Tech Lead e CTO até sua entrega final',
    technologies: ['React', 'TypeScript', 'Styled Components', 'CRA', 'Redux', 'Mongodb', 'NodeJS', 'ExpressJS', 'RabbitMQ', 'AWS SDK S3', 'Persistors'],
  },
  {
    id: 'projeto-6',
    name: 'SL7 Messenger',
    subtitle: 'Aplicativo de chat em tempo real para atendimento e suporte a usuários',
    description: 'Desenvolvimento CLT full stack',
    technologies: ['Flutter', 'Dart', 'Socket.io', 'ExpressJs', 'Mongodb', 'React', 'TypeScript', ],
  },
  {
    id: 'projeto-7',
    name: 'Feirão das apostas - bets hub',
    subtitle: 'Aplicativo para exibição e criação de tickets em sites de apostas',
    description: 'Desenvolvimento CLT full stack',
    technologies: ['Flutter', 'Dart', 'Pymongo', 'Python', 'Mongodb', 'Flask'],
  },
  {
    id: 'projeto-8',
    name: 'Rifa',
    subtitle: 'Site para cadastro e sorteio de rifas online',
    description: 'Desenvolvimento CLT full stack',
    technologies: ['React', 'TypeScript', 'Styled Components', 'CRA', 'Redux', 'Mongodb', 'NodeJS', 'ExpressJS',],
  },
  {
    id: 'projeto-9',
    name: 'Data Center',
    subtitle: 'Site para gerenciamento administrativo',
    description: 'Desenvolvimento CLT full stack',
    technologies: ['React', 'TypeScript', 'Styled Components', 'CRA', 'Redux', 'Mongodb', 'NodeJS', 'ExpressJS',],
  },
  {
    id: 'projeto-10',
    name: 'Bets App Flutter',
    subtitle: 'Site de apostas personalizavel',
    description: 'Desenvolvimento CLT full stack',
    technologies: ['Flutter', 'Dart', 'Providers', 'notifyListeners', 'Mongodb'],
  },
];