import Link from 'next/link';
import FloatingLogos from './components/floatindLogos';

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
    </div>
  );
}