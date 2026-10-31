import { motion } from 'framer-motion'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiFramer,
  SiPython,
  SiDjango,
  SiFastapi,
  SiOpenjdk,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiDbeaver,
  SiPhpmyadmin,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiJira,
  SiGithubcopilot,
  SiOpencode,
  SiOllama,
  SiIntellijidea,
  SiPostman,
  SiFigma,
  SiTrello,
  SiObsidian,
  SiDiagramsdotnet,
  SiLucid,
  SiMiro,
  SiNotion,
} from 'react-icons/si'
import {
  FaChartArea,
  FaChartColumn,
  FaChartLine,
  FaChartPie,
  FaFileExcel,
  FaPalette,
  FaTerminal,
} from 'react-icons/fa6'
import { VscVscode } from 'react-icons/vsc'
import Section from './ui/Section'
import Badge from './ui/Badge'
import PixelIcon from './ui/PixelIcon'

const skillIcons = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  Vite: SiVite,
  'Tailwind CSS': SiTailwindcss,
  'Framer Motion': SiFramer,

  Python: SiPython,
  Django: SiDjango,
  'Django REST Framework': SiDjango,
  FastAPI: SiFastapi,
  Java: SiOpenjdk,
  'Spring Boot': SiSpringboot,

  Excel: FaFileExcel,
  'Power BI': FaChartColumn,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  Matplotlib: FaChartLine,
  Seaborn: FaChartArea,
  DBeaver: SiDbeaver,
  phpMyAdmin: SiPhpmyadmin,

  Git: SiGit,
  Docker: SiDocker,
  Linux: SiLinux,
  SSH: FaTerminal,
  Jira: SiJira,

  'Git/GitHub': [SiGit, SiGithub],
  'GitHub Copilot': SiGithubcopilot,
  BI: FaChartPie,
  OpenCode: SiOpencode,
  Ollama: SiOllama,
  'IntelliJ IDEA': SiIntellijidea,
  'VS Code': VscVscode,
  Postman: SiPostman,
  Figma: SiFigma,
  Canva: FaPalette,

  Trello: SiTrello,
  Obsidian: SiObsidian,
  'Draw.io': SiDiagramsdotnet,
  Lucidchart: SiLucid,
  Miro: SiMiro,
  Notion: SiNotion,
}

const categories = [
  {
    id: 'frontend',
    icon: 'react',
    label: 'Frontend',
    color: 'brand',
    items: ['JavaScript', 'TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'backend',
    icon: 'django',
    label: 'Backend',
    color: 'deep',
    items: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'Java', 'Spring Boot'],
  },
  {
    id: 'data',
    icon: 'database',
    label: 'Data',
    color: 'brand',
    items: ['Excel', 'Power BI','MySQL', 'PostgreSQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'DBeaver', 'phpMyAdmin'],
  },
  {
    id: 'devops',
    icon: 'docker',
    label: 'DevOps',
    color: 'outline',
    items: ['Git','Docker', 'Linux', 'SSH', 'Jira'],
  },
  {
    id: 'tools',
    icon: 'git',
    label: 'Herramientas',
    color: 'mint',
    items: ['Git/GitHub', 'GitHub Copilot', 'BI', 'OpenCode', 'Ollama', 'IntelliJ IDEA', 'VS Code', 'Postman', 'Figma', 'Canva'],
  },
  {
    id: 'analysis',
    icon: 'chart',
    label: 'Analisis',
    color: 'brand',
    items: ['Trello', 'Jira', 'Obsidian', 'Draw.io', 'Lucidchart', 'Miro', 'Notion'],
  },
]

function SkillBadge({ name, color }) {
  const icon = skillIcons[name]
  const icons = Array.isArray(icon) ? icon : icon ? [icon] : []

  return (
    <Badge color={color} className="gap-1.5">
      {icons.length > 0 && (
        <span
          className="inline-flex items-center gap-0.5 shrink-0"
          aria-hidden="true"
        >
          {icons.map((Icon, i) => (
            <Icon key={i} size={12} />
          ))}
        </span>
      )}
      {name}
    </Badge>
  )
}

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
                <SkillBadge key={skill} name={skill} color={cat.color} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
