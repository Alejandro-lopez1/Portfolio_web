import { motion } from 'framer-motion'
import Window from './ui/Window'
import Section from './ui/Section'

const highlights = [
  {
    icon: '💻',
    title: 'Desarrollador Fullstack',
    description:
      'React, Django, APIs, bases de datos — de la idea al deploy.',
  },
  {
    icon: '📊',
    title: 'Analista de Datos',
    description:
      'Python, SQL, visualizacion — convierto datos en decisiones.',
  },
  {
    icon: '💡',
    title: 'Emprendedor',
    description:
      'Negocios reales: hamburgueseria, taller de motos. Se lo que cuesta hacer que algo funcione.',
  },
]

export default function About() {
  return (
    <Section
      id="about"
      title="Sobre mi"
      subtitle="No vengo solo de la academia. He construido negocios desde cero, atendido clientes, y aprendido que el software vale cuando resuelve problemas reales."
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Window title="about_me.txt">
            <div className="p-5 space-y-4">
              <p className="text-sm text-retro-text leading-relaxed">
                Soy estudiante de analisis de sistemas con experiencia como
                desarrollador fullstack, analista de datos y emprendedor. He
                trabajado con tecnologias modernas como React, Django, FastAPI
                y PostgreSQL, y tambien se lo que es gestionar un inventario,
                negociar con proveedores y mantener un negocio a flote.
              </p>
              <p className="text-sm text-retro-muted leading-relaxed">
                Esa combinacion —tecnica + negocio— me permite entender el
                panorama completo: desde como se escribe una consulta SQL hasta
                por que un cliente necesita tal funcionalidad.
              </p>
              <p className="text-sm text-retro-muted leading-relaxed">
                Actualmente busco oportunidades donde pueda aportar como
                desarrollador, analista o ambos, y seguir creciendo
                profesionalmente.
              </p>
            </div>
          </Window>
        </motion.div>

        <div className="space-y-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 p-4 bg-retro-surface rounded-mac border border-retro-border shadow-apple hover:shadow-apple-lg transition-shadow duration-200"
            >
              <div className="shrink-0 w-10 h-10 rounded-mac bg-bondi-50/30 flex items-center justify-center text-lg">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-retro-text mb-0.5 font-sans">
                  {item.title}
                </h3>
                <p className="text-xs text-retro-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
