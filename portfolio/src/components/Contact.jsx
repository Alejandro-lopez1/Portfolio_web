import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'

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
    <section id="contact" className="py-24 sm:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Contacto
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-xl mx-auto mb-4"
        >
          Estoy abierto a oportunidades laborales, colaboraciones y proyectos interesantes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-12"
        >
          <MapPin size={14} />
          Argentina
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {contacts.map((item) => (
            <motion.a
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50 hover:bg-zinc-800/50 transition-all duration-200 group w-full sm:w-auto justify-center"
            >
              <item.icon size={18} className="text-gray-400 group-hover:text-violet-400 transition-colors" />
              <div className="text-left">
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-zinc-800/50">
        <p className="text-center text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Alejandro Lopez &mdash; Built with React & Tailwind CSS
        </p>
      </div>
    </section>
  )
}
