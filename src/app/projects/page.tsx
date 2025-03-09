'use client'

import { useState } from 'react'
import { Project, projects } from '../data/projects'

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 md:p-6 p-2">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Meus Projetos</h1>

      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const youtubeUrl = project.youtubeId;
  const videoId = youtubeUrl!.split('v=')[1].split('&')[0]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="bg-white md:p-6 p-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{project.name}</h2>
      <p className="text-gray-500 text-sm mb-4">{project?.subtitle}</p>
      <div className="relative mb-4">
        <div className="overflow-hidden rounded-lg">
          <img
            src={project.images[currentImageIndex]}
            alt={`Imagem do projeto ${project.name}`}
            className="w-full h-96 object-cover"
          />
        </div>
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &gt;
        </button>
        <p className="text-gray-700 mt-4">{project.description}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Tecnologias Utilizadas</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.youtubeId && (
        <div className="mb-4">
          <h3 className="text-base font-bold text-gray-900 mb-2">Assista o vídeo a seguir para saber mais sobre o projeto craque do jogo</h3>
          <a
            href={project.youtubeId}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={`Thumbnail do vídeo do projeto ${project.name}`}
              className="rounded-lg w-full h-64 object-cover"
            />
          </a>
        </div>
      )}
    </div>
  )
}