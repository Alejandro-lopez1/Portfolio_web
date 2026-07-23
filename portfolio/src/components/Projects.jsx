import { motion } from 'framer-motion'
import Section from './ui/Section'
import Badge from './ui/Badge'
import PixelButton from './ui/PixelButton'
import Window from './ui/Window'

const projects = [
  {
    title: 'MotoFix',
    description:
      'PWA de gestion integral para talleres mecanicos. Incluye control de inventario, ordenes de reparacion, historial de clientes y notificaciones. Arquitectura modular con frontend en React/Vite y backend en Django REST Framework con PostgreSQL.',
    stack: ['React', 'Vite', 'PWA', 'Django REST', 'PostgreSQL', 'Docker', 'Nginx'],
    github: 'https://github.com/Alejandro-lopez1/MotoFix',
    demo: 'https://motofix-frontend.onrender.com',
    icon: '🔧',
    featured: true,
  },
  {
    title: 'Backoffice Academico',
    description:
      'Sistema de gestion universitaria desarrollado en Java con Spring Boot. Proyecto grupal que implementa CRUD de estudiantes, cursos, inscripciones y generacion de reportes academicos con autenticacion por roles.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Maven'],
    github: 'https://github.com/Alejandro-lopez1/Backoffice',
    demo: null,
    icon: '🎓',
    featured: false,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Proyectos"
      subtitle="Proyectos reales que reflejan mi experiencia tecnica y capacidad de ejecucion"
    >
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
            className={`relative ${project.featured ? 'md:col-span-2' : ''}`}
          >
            <Window title={`${project.title}.app`}>
              <div className="p-5 sm:p-6">
                {project.featured && (
                  <div className="absolute top-3 right-4 z-10">
                    <span className="px-2 py-0.5 text-[9px] font-pixel font-bold bg-bondi-500 text-white rounded-mac">
                      PROYECTO PRINCIPAL
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 rounded-mac bg-bondi-50/30 border border-bondi-200/30 flex items-center justify-center text-2xl">
                    {project.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-retro-text font-pixel mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-retro-muted leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech) => (
                    <Badge key={tech} color="gray">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  <PixelButton
                    href={project.github}
                    variant="secondary"
                    size="sm"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    GitHub
                  </PixelButton>
                  {project.demo && (
                    <PixelButton
                      href={project.demo}
                      variant="primary"
                      size="sm"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M4 12L12 4M12 4H6M12 4v6" />
                      </svg>
                      Demo
                    </PixelButton>
                  )}
                </div>
              </div>
            </Window>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
