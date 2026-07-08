import { motion } from 'framer-motion'
import { ArrowDown, ExternalLink, FileText } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <img
            src="/perfil.png"
            alt="Alejandro Lopez"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-violet-500/30 shadow-lg shadow-violet-600/10 mx-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-violet-400 font-medium text-sm sm:text-base mb-4 tracking-wider uppercase">
            Estudiante · Analista de Datos · Analista de Sistemas · Desarrollador Fullstack
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Hola, soy{' '}
          <span className="bg-gradient-to-r from-violet-400 via-violet-500 to-cyan-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Alejandro Lopez
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Estudiante, analista de datos, desarrollador fullstack y emprendedor con experiencia real en negocios.
          Construyo soluciones que unen tecnología y propósito.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-violet-600/20 hover:shadow-violet-500/30"
          >
            Ver Proyectos
            <ExternalLink size={16} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-200"
          >
            <FileText size={16} />
            Descargar CV
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="text-gray-500 hover:text-white transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
