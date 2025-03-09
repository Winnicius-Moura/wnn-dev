import Link from 'next/link'
import FloatingLogos from './components/floatindLogos'
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center p-8">
      <img
        src={'/icon-wnn.png'}
        alt={'wnn icon'}
        className="h-10 w-fit my-4"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Olá, eu sou Winnícius
      </h1>
      <p className="text-xl text-gray-700 mb-28">
        Desenvolvedor Full Stack e Tech Lead com experiência em soluções inovadoras
      </p>
      <Link
        href="/projects"
        className="bg-gray-200  text-gray-900 px-2 py-3 rounded-lg hover:bg-primary-dark transition-colors animate-pulse"
      >
        Conheça meus projetos
      </Link>

      <FloatingLogos />
      <p className='text-gray-300 text-xs'>Canais de exibição | Apoio | Patrocício | Realização</p>

      <div className="mt-28 ">
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-center gap-2">
            <FaGithub className="text-gray-700" />
            <a
              href="https://github.com/winnicius-moura"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-dark"
            >
              GitHub
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaLinkedin className="text-gray-700" />
            <a
              href="https://www.linkedin.com/in/winnicius-moura"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-dark"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaPhone className="text-gray-700" />
            <a href="https://wa.me/5583981829881" className="text-gray-700 hover:text-primary-dark">
              (83) 98182-9881
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-gray-700" />
            <a href="mailto:winnicius.moura@gmail.com" className="text-gray-700 hover:text-primary-dark">
              winnicius.moura@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}