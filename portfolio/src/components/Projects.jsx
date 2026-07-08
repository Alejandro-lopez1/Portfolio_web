import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'MotoFix',
    description:
      'PWA de gestión integral para talleres mecánicos. Incluye control de inventario, órdenes de reparación, historial de clientes y notificaciones. Arquitectura modular con frontend en React/Vite y backend en Django REST Framework con PostgreSQL.',
    stack: ['React', 'Vite', 'PWA', 'Django REST', 'PostgreSQL', 'Docker', 'Nginx'],
    github: 'https://github.com/Alejandro-lopez1/MotoFix',
    demo: 'https://motofix-frontend.onrender.com',
  },
  {
    title: 'Backoffice Académico',
    description:
      'Sistema de gestión universitaria desarrollado en Java con Spring Boot. Proyecto grupal que implementa CRUD de estudiantes, cursos, inscripciones y generación de reportes académicos con autenticación por roles.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Maven'],
    github: 'https://github.com/Alejandro-lopez1/Backoffice',
    demo: '#', // TODO: reemplazar con URL real
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-4"
        >
          Proyectos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-center max-w-xl mx-auto mb-16"
        >
          Proyectos reales que reflejan mi experiencia técnica y capacidad de ejecución
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className="group rounded-xl bg-zinc-900/50 border border-zinc-800/50 p-6 hover:border-zinc-700/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-800/50 text-gray-400 hover:text-white hover:bg-zinc-700/50 transition-all"
                    aria-label={`GitHub de ${project.title}`}
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-800/50 text-gray-400 hover:text-white hover:bg-zinc-700/50 transition-all"
                    aria-label={`Demo de ${project.title}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium font-mono rounded-full bg-zinc-800/80 text-gray-300 border border-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
