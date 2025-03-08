import Link from 'next/link';
import FloatingLogos from './components/floatindLogos';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Olá, eu sou Winnícius
      </h1>
      <p className="text-xl text-gray-700 mb-28">
        Desenvolvedor Full Stack e Tech Lead com experiência em soluções inovadoras
      </p>
      <Link
        href="/projects"
        className="bg-primary text-gray-900 px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
      >
        Conheça meus projetos
      </Link>

      <FloatingLogos />
      <p className='text-gray-300 text-xs'>Canais de exibição | Apoio | Patrocício | Realização</p>
    </div>
  );
}