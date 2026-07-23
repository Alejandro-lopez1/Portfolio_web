import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import Window from './ui/Window'
import Section from './ui/Section'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'alejandro.lopez14591@gmail.com',
    href: 'mailto:alejandro.lopez14591@gmail.com',
  },
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

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contacto"
      subtitle="Estoy abierto a oportunidades laborales, colaboraciones y proyectos interesantes."
    >
      <div className="max-w-2xl mx-auto">
        <Window title="terminal.app" variant="terminal">
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
              <span className="mac-btn-close" />
              <span className="mac-btn-minimize" />
              <span className="mac-btn-maximize" />
              <span className="ml-2 text-[11px] text-gray-500 font-mono">
                terminal — bash
              </span>
            </div>

            <div className="space-y-3 font-mono text-sm">
              <div className="flex items-start gap-2">
                <span className="text-bondi-400 shrink-0">$</span>
                <span className="text-gray-300">cat contact_info.json</span>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="pl-4 border-l border-gray-700 space-y-2"
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
                      className="text-bondi-400 shrink-0 group-hover:text-bondi-300 transition-colors"
                    />
                    <div className="min-w-0">
                      <p className="text-[11px] text-gray-500 font-pixel">
                        {item.label}
                      </p>
                      <p className="text-xs text-gray-300 group-hover:text-white transition-colors truncate">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </motion.div>

              <div className="flex items-center gap-2 pt-2">
                <span className="text-bondi-400">$</span>
                <span className="text-gray-300 flex items-center gap-1.5">
                  <MapPin size={12} className="text-gray-500" />
                  Argentina
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-bondi-400">$</span>
                <span className="text-gray-300">echo &quot;Gracias por visitar&quot;</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-bondi-400">→</span>
                <span className="text-bondi-300">Gracias por visitar</span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <span className="text-bondi-400">$</span>
                <span className="terminal-cursor" />
              </div>
            </div>
          </div>
        </Window>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-retro-border-light">
        <p className="text-center text-retro-muted text-xs">
          &copy; {new Date().getFullYear()} Alejandro Lopez — Built with React & Tailwind CSS
        </p>
      </div>
    </Section>
  )
}
