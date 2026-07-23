import { motion } from 'framer-motion'
import Window from './ui/Window'
import PixelButton from './ui/PixelButton'

const tags = ['Java', 'SQL', 'Python', 'Analista Funcional']

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-bondi-500/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-bondi-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-3xl mx-auto"
      >
        <Window title="System Analyst OS v1.0" className="overflow-visible">
          <div className="p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="shrink-0"
              >
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-mac border-2 border-bondi-200 overflow-hidden shadow-apple-lg bg-retro-bg">
                  <img
                    src="/avatar-pixel.svg"
                    alt="Avatar pixel art de Alejandro Lopez"
                    className="w-full h-full"
                    loading="eager"
                  />
                </div>
              </motion.div>

              <div className="text-center sm:text-left flex-1 min-w-0">
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-retro-text leading-tight mb-2"
                >
                  Alejandro Lopez
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="text-bondi-400 font-pixel font-medium text-sm sm:text-base mb-4"
                >
                  Analista de Sistemas
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex flex-wrap justify-center sm:justify-start gap-2 mb-6"
                >
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[11px] font-pixel font-medium bg-bondi-50/40 text-bondi-300 border border-bondi-200/40 rounded-mac"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start"
                >
                  <PixelButton href="#projects" variant="primary" size="md">
                    Ver Proyectos
                  </PixelButton>
                  <PixelButton href="#" variant="secondary" size="md">
                    Descargar CV
                  </PixelButton>
                </motion.div>
              </div>
            </div>
          </div>
        </Window>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="text-retro-muted hover:text-bondi-400 transition-colors"
          aria-label="Scroll hacia abajo"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-6 border-2 border-current rounded-mac flex items-center justify-center"
          >
            <span className="text-[10px]">▼</span>
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
