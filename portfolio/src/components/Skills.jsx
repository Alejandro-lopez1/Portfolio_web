import { motion } from 'framer-motion'
import {
  Code2,
  Server,
  Database,
  Container,
  Wrench,
} from 'lucide-react'

const categories = [
  {
    id: 'frontend',
    icon: Code2,
    label: 'Frontend',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    items: ['React', 'Vite', 'PWA', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'backend',
    icon: Server,
    label: 'Backend',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    items: ['Django', 'Django REST Framework', 'FastAPI', 'Java', 'Spring Boot'],
  },
  {
    id: 'data',
    icon: Database,
    label: 'Data',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    items: ['MySQL', 'PostgreSQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    id: 'devops',
    icon: Container,
    label: 'DevOps',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    items: ['Docker', 'Nginx', 'Render', 'Linux', 'SSH'],
  },
  {
    id: 'tools',
    icon: Wrench,
    label: 'Herramientas',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    items: ['Git/GitHub', 'LangGraph', 'Groq API', 'Anthropic SDK', 'BI', 'OpenCode', 'Ollama', 'GitHub Copilot', 'Codex'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-4"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-center max-w-xl mx-auto mb-16"
        >
          Tecnologías y herramientas con las que trabajo día a día
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-lg ${cat.bg} flex items-center justify-center`}>
                    <cat.icon className={cat.color} size={18} />
                  </div>
                  <h3 className="text-white font-medium text-sm">{cat.label}</h3>
                </div>
                <ul className="space-y-1.5">
                  {cat.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-400 text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-zinc-600" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
