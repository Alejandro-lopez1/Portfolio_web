import { motion } from 'framer-motion'
import Section from './ui/Section'
import Badge from './ui/Badge'
import PixelIcon from './ui/PixelIcon'

const categories = [
  {
    id: 'frontend',
    icon: 'react',
    label: 'Frontend',
    color: 'blue',
    items: ['React', 'Vite', 'PWA', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'backend',
    icon: 'django',
    label: 'Backend',
    color: 'green',
    items: ['Django', 'Django REST Framework', 'FastAPI', 'Java', 'Spring Boot'],
  },
  {
    id: 'data',
    icon: 'database',
    label: 'Data',
    color: 'bondi',
    items: ['MySQL', 'PostgreSQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    id: 'devops',
    icon: 'docker',
    label: 'DevOps',
    color: 'amber',
    items: ['Docker', 'Nginx', 'Render', 'Linux', 'SSH'],
  },
  {
    id: 'tools',
    icon: 'git',
    label: 'Herramientas',
    color: 'violet',
    items: ['Git/GitHub', 'LangGraph', 'Groq API', 'Anthropic SDK', 'BI', 'OpenCode', 'Ollama', 'GitHub Copilot', 'Codex'],
  },
  {
    id: 'analysis',
    icon: 'chart',
    label: 'Analisis',
    color: 'rose',
    items: ['Trello', 'Jira (basic)', 'Obsidian', 'Draw.io', 'Lucidchart', 'PostgreSQL', 'DBeaver', 'phpMyAdmin', 'Postman (basic)'],
  },
]

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Tecnologias y herramientas con las que trabajo dia a dia"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="bg-retro-surface rounded-mac border border-retro-border p-5 shadow-apple hover:shadow-apple-lg transition-shadow duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <PixelIcon name={cat.icon} size={36} />
              <h3 className="text-sm font-semibold text-retro-text font-sans">
                {cat.label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((skill) => (
                <Badge key={skill} color={cat.color}>
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
