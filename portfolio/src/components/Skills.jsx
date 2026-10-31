import { motion } from 'framer-motion'
import Section from './ui/Section'
import Badge from './ui/Badge'
import PixelIcon from './ui/PixelIcon'

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: 'brand',
    items: ['JavaScript', 'TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: 'deep',
    items: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'Java', 'Spring Boot'],
  },
  {
    id: 'data',
    label: 'Data',
    color: 'brand',
    items: ['Excel', 'Power BI','MySQL', 'PostgreSQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'DBeaver', 'phpMyAdmin'],
  },
  {
    id: 'devops',
    label: 'DevOps',
    color: 'outline',
    items: ['Git','Docker', 'Linux', 'SSH', 'Jira'],
  },
  {
    id: 'tools',
    label: 'Herramientas',
    color: 'mint',
    items: ['Git/GitHub', 'GitHub Copilot', 'BI', 'OpenCode', 'Ollama', 'IntelliJ IDEA', 'VS Code', 'Postman', 'Figma', 'Canva'],
  },
  {
    id: 'analysis',
    label: 'Analisis',
    color: 'brand',
    items: ['Trello', 'Jira', 'Obsidian', 'Draw.io', 'Lucidchart', 'Miro', 'Notion'],
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
