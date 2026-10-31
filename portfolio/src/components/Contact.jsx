import { motion } from 'framer-motion'
import { Github, Linkedin, MapPin } from 'lucide-react'
import Window from './ui/Window'
import Section from './ui/Section'
import ContactForm from './ui/ContactForm'

const contacts = [
  {
    icon: Github,
    label: 'GitHub',
    value: '@Alejandro-lopez1',
    href: 'https://github.com/Alejandro-lopez1',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Alejandro Lopez',
    href: 'https://www.linkedin.com/in/alejandro-lopez-analyst/',
  },
]

export default function Contact({ quoteRequest = { service: '', id: 0 } }) {
  return (
    <Section
      id="contact"
      title="Contacto"
      subtitle="Contame tu idea o proyecto directamente desde el formulario. Te respondo a la brevedad."
    >
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6 items-start">
        <Window title="contact_info.sh" variant="terminal">
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-retro-border">
              <span className="mac-btn-close" />
              <span className="mac-btn-minimize" />
              <span className="mac-btn-maximize" />
              <span className="ml-2 text-[11px] text-retro-muted font-mono">
                terminal — bash
              </span>
            </div>

            <div className="space-y-3 font-mono text-sm">
              <div className="flex items-start gap-2">
                <span className="text-brand-400 shrink-0">$</span>
                <span className="text-retro-text">cat contact_info.json</span>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="pl-4 border-l border-retro-border space-y-2"
              >
                {contacts.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-2 px-3 rounded-mac hover:bg-white/5 transition-colors group"
                  >
                    <item.icon
                      size={16}
                      className="text-brand-400 shrink-0 group-hover:text-brand-300 transition-colors"
                    />
                    <div className="min-w-0">
                      <p className="text-[11px] text-retro-muted font-pixel">
                        {item.label}
                      </p>
                      <p className="text-xs text-retro-text group-hover:text-brand-300 transition-colors truncate">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </motion.div>

              <div className="flex items-center gap-2 pt-2">
                <span className="text-brand-400">$</span>
                <span className="text-retro-text flex items-center gap-1.5">
                  <MapPin size={12} className="text-retro-muted" />
                  Argentina
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-brand-400">$</span>
                <span className="text-retro-text">echo &quot;Gracias por visitar&quot;</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-400">→</span>
                <span className="text-brand-300">Gracias por visitar</span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <span className="text-brand-400">$</span>
                <span className="terminal-cursor" />
              </div>
            </div>
          </div>
        </Window>

        <div id="contact-form" className="scroll-mt-24">
          <Window title="contacto.form">
            <div className="p-5 sm:p-6">
              <ContactForm
                defaultService={quoteRequest.service}
                requestKey={quoteRequest.id}
                source="Contacto"
                submitLabel="Enviar mensaje"
              />
            </div>
          </Window>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-16 pt-6 border-t border-retro-border">
        <p className="text-center text-retro-muted text-xs">
          &copy; {new Date().getFullYear()} Alejandro Lopez
        </p>
      </div>
    </Section>
  )
}
