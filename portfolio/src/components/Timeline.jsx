import { motion } from 'framer-motion'
import Window from './ui/Window'
import Section from './ui/Section'

const timelineData = [
  {
    year: '2024 - Actualidad',
    title: 'Estudiante de Analisis de Sistemas',
    company: 'Universidad',
    description:
      'Formacion en analisis de sistemas, bases de datos, ingenieria de software y metodologias agiles.',
  },
  {
    year: '2024',
    title: 'Desarrollador Fullstack',
    company: 'Proyectos personales',
    description:
      'Desarrollo de MotoFix (PWA) y Backoffice Academico. Stack: React, Django REST, PostgreSQL, Docker.',
  },
  {
    year: '2023 - 2024',
    title: 'Analista de Datos',
    company: 'Proyectos y formacion',
    description:
      'Trabajo con Python, SQL, Pandas, NumPy y herramientas de visualizacion para toma de decisiones.',
  },
  {
    year: '2022 - 2024',
    title: 'Emprendedor',
    company: 'Negocios propios',
    description:
      'Gestion de hamburgueseria y taller de motos. Inventario, proveedores, atencion al cliente y operaciones.',
  },
]

export default function TimelineSection() {
  return (
    <Section
      id="timeline"
      title="Trayectoria"
      subtitle="Mi evolucion profesional y tecnica"
    >
      <Window title="career_history.log">
        <div className="p-5 sm:p-8">
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-bondi-200 sm:-translate-x-px" />

            {timelineData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className={`relative flex items-start gap-6 mb-8 last:mb-0 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                <div className="hidden sm:block sm:w-1/2" />

                <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-bondi-500 border-2 border-white rounded-full -translate-x-1.5 z-10 shadow-apple mt-1.5" />

                <div className="pl-10 sm:pl-0 sm:w-1/2">
                  <div className="bg-retro-bg rounded-mac border border-retro-border-light p-4 hover:shadow-apple transition-shadow duration-200">
                    <span className="text-[10px] font-pixel font-medium text-bondi-500 mb-1 block">
                      {item.year}
                    </span>
                    <h3 className="text-sm font-semibold text-retro-text mb-0.5 font-sans">
                      {item.title}
                    </h3>
                    {item.company && (
                      <p className="text-xs text-bondi-500 font-medium mb-1.5 font-sans">
                        {item.company}
                      </p>
                    )}
                    <p className="text-xs text-retro-muted leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Window>
    </Section>
  )
}
