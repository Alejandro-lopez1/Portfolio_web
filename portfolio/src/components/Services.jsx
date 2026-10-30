import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Clock,
  Code2,
  Globe,
  LayoutDashboard,
  Lightbulb,
  Mail,
  Sparkles,
  Workflow,
} from 'lucide-react'
import Section from './ui/Section'
import Badge from './ui/Badge'
import PixelButton from './ui/PixelButton'
import Window from './ui/Window'

const contactEmail = 'alejandro.lopez14591@gmail.com'

const gmailCompose = (subject) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent(subject)}`

const mailtoLink = (subject) =>
  `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`

const services = [
  {
    icon: Globe,
    title: 'Sitios web y landing pages',
    tag: 'Web',
    color: 'brand',
    description:
      'Sitios rapidos, responsive y pensados para convertir visitas en consultas reales.',
    features: [
      'Diseno responsive',
      'SEO tecnico',
      'Formularios y WhatsApp',
      'Deploy incluido',
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Sistemas de gestion a medida',
    tag: 'Software',
    color: 'mint',
    description:
      'PWA y paneles administrativos para controlar inventario, clientes, ventas y procesos internos.',
    features: [
      'Inventario y ventas',
      'Roles y permisos',
      'Reportes operativos',
      'Acceso desde cualquier dispositivo',
    ],
    popular: true,
  },
  {
    icon: BarChart3,
    title: 'Dashboards y analisis de datos',
    tag: 'Data',
    color: 'deep',
    description:
      'Convierto tus datos en tableros claros para decidir con informacion y no con intuicion.',
    features: [
      'KPIs en tiempo real',
      'Limpieza de datos',
      'Reportes automaticos',
      'Visualizaciones claras',
    ],
  },
  {
    icon: Workflow,
    title: 'Automatizacion de procesos',
    tag: 'Automatizacion',
    color: 'outline',
    description:
      'Elimino tareas repetitivas conectando planillas, APIs y las herramientas que ya usas.',
    features: [
      'Integracion de APIs',
      'Scripts a medida',
      'Alertas automaticas',
      'Ahorro de horas de trabajo',
    ],
  },
  {
    icon: Code2,
    title: 'APIs y backends',
    tag: 'Backend',
    color: 'brand',
    description:
      'Construyo la base tecnica de tu producto: APIs seguras, bases de datos y logica de negocio.',
    features: [
      'Django / FastAPI',
      'PostgreSQL / MySQL',
      'Autenticacion',
      'Documentacion tecnica',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Consultoria y analisis funcional',
    tag: 'Consultoria',
    color: 'mint',
    description:
      'Revisamos tu idea o proceso y definimos el alcance tecnico antes de escribir una linea de codigo.',
    features: [
      'Relevamiento de procesos',
      'Documentacion funcional',
      'Priorizacion de alcance',
      'Acompanamiento',
    ],
  },
]

const steps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Entiendo tu negocio, el problema y el objetivo real.',
  },
  {
    number: '02',
    title: 'Propuesta',
    description: 'Defino alcance, tiempos y un presupuesto claro.',
  },
  {
    number: '03',
    title: 'Desarrollo',
    description: 'Construyo con entregas parciales y feedback continuo.',
  },
  {
    number: '04',
    title: 'Entrega',
    description: 'Deploy, capacitacion y soporte post-lanzamiento.',
  },
]

export default function Services() {
  return (
    <Section
      id="services"
      title="Servicios"
      subtitle="Productos digitales para que tu negocio venda mas, ahorre tiempo y tome mejores decisiones."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => {
          const Icon = service.icon

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="group relative flex flex-col rounded-mac border border-retro-border bg-retro-surface p-5 shadow-apple transition-all duration-200 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-glow"
            >
              {service.popular && (
                <span className="absolute top-0 right-4 -translate-y-1/2 px-2.5 py-1 text-[9px] font-pixel font-bold uppercase tracking-wider bg-brand-500 text-retro-bg rounded-mac">
                  Mas pedido
                </span>
              )}

              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-11 h-11 rounded-mac bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 transition-colors duration-200 group-hover:bg-brand-500 group-hover:text-retro-bg">
                  <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                </div>
                <Badge color={service.color}>{service.tag}</Badge>
              </div>

              <h3 className="text-base font-bold text-retro-text font-sans mb-2">
                {service.title}
              </h3>
              <p className="text-xs text-retro-muted leading-relaxed">
                {service.description}
              </p>

              <ul className="mt-4 mb-5 space-y-2 flex-1">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-[11px] text-retro-muted"
                  >
                    <Check
                      size={12}
                      className="text-brand-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-retro-border flex items-center justify-between gap-2">
                <span className="text-[10px] font-pixel uppercase tracking-wider text-retro-muted">
                  Presupuesto a medida
                </span>
                <a
                  href={gmailCompose(`Cotizacion: ${service.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-pixel font-medium text-brand-400 hover:text-brand-300 transition-colors"
                >
                  Cotizar
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          )
        })}
      </div>

      <div className="mt-16">
        <Window title="proceso_de_trabajo.sh">
          <div className="p-5 sm:p-8">
            <div className="flex items-center gap-2 mb-6 text-brand-400">
              <Sparkles size={14} aria-hidden="true" />
              <span className="font-pixel text-[11px] uppercase tracking-[0.2em]">
                Como trabajo
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="relative p-4 rounded-mac border border-retro-border bg-retro-bg"
                >
                  <span className="font-pixel text-2xl font-bold text-brand-500/40 block mb-2">
                    {step.number}
                  </span>
                  <h3 className="text-sm font-semibold text-retro-text font-sans mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-retro-muted leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Window>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative mt-8 overflow-hidden rounded-mac border border-brand-500/30 bg-brand-500/[0.06] p-6 sm:p-8"
      >
        <div
          className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-brand-500/10 blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="font-pixel text-[10px] uppercase tracking-[0.2em] text-brand-400 mb-2">
              Proyecto en mente
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-retro-text font-pixel">
              Contame que necesitas y armamos una propuesta.
            </h3>
            <p className="flex items-center gap-2 text-xs text-retro-muted mt-2">
              <Clock size={13} aria-hidden="true" />
              Respuesta en menos de 48 horas · Sin compromiso
            </p>
            <p className="flex items-center gap-2 text-xs text-retro-muted mt-1.5">
              <Mail size={13} aria-hidden="true" />
              <a
                href={mailtoLink('Consulta')}
                className="hover:text-brand-300 transition-colors"
              >
                {contactEmail}
              </a>
            </p>
          </div>

          <PixelButton
            href={gmailCompose('Solicitud de cotizacion')}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            className="shrink-0"
            title={`Escribir a ${contactEmail}`}
            aria-label={`Enviar solicitud de cotizacion a ${contactEmail}`}
          >
            Solicitar cotizacion
            <ArrowUpRight size={15} aria-hidden="true" />
          </PixelButton>
        </div>
      </motion.div>
    </Section>
  )
}
