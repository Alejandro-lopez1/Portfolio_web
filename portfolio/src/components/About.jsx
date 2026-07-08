import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, BarChart3, Lightbulb } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Desarrollador Fullstack',
    description: 'React, Django, APIs, bases de datos — de la idea al deploy.',
  },
  {
    icon: BarChart3,
    title: 'Analista de Datos',
    description: 'Python, SQL, visualización — convierto datos en decisiones.',
  },
  {
    icon: Lightbulb,
    title: 'Emprendedor',
    description: 'Negocios reales: hamburguesería, taller de motos. Sé lo que cuesta hacer que algo funcione.',
  },
]

function SectionTitle({ children }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl font-bold text-white mb-4"
    >
      {children}
    </motion.h2>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionTitle>Sobre mí</SectionTitle>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            No vengo solo de la academia. He construido negocios desde cero, atendido clientes, y
            aprendido que el software vale cuando resuelve problemas reales.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed">
              Soy estudiante de análisis de sistemas con experiencia como desarrollador fullstack,
              analista de datos y emprendedor. He trabajado con tecnologías modernas como React,
              Django, FastAPI y PostgreSQL, y también sé lo que es gestionar un inventario, negociar
              con proveedores y mantener un negocio a flote.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Esa combinación —técnica + negocio— me permite entender el panorama completo: desde
              cómo se escribe una consulta SQL hasta por qué un cliente necesita tal funcionalidad.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Actualmente busco oportunidades donde pueda aportar como desarrollador, analista o
              ambos, y seguir creciendo profesionalmente.
            </p>
          </motion.div>

          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="flex gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-violet-600/10 flex items-center justify-center">
                  <item.icon className="text-violet-400" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
