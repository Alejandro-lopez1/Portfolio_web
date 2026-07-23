import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Sobre mi' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#timeline', label: 'Trayectoria' },
  { href: '#contact', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-retro-surface/90 backdrop-blur-xl border-b border-retro-border shadow-apple'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Navegacion principal"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <a
            href="#hero"
            className="flex items-center gap-2 text-bondi-400 font-pixel font-bold text-base hover:text-bondi-300 transition-colors"
            aria-label="Ir al inicio"
          >
            <div className="w-7 h-7 bg-bondi-500 rounded-mac flex items-center justify-center">
              <span className="text-white text-[10px] font-pixel font-bold">AL</span>
            </div>
            <span className="hidden sm:inline">System Analyst</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-[13px] font-medium text-retro-muted hover:text-bondi-400 hover:bg-bondi-50/20 rounded-mac transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1 rounded-mac hover:bg-retro-border-light/50 transition-colors"
            aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            <span
              className={`w-4 h-0.5 bg-retro-text transition-all duration-200 ${
                open ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`w-4 h-0.5 bg-retro-text transition-all duration-200 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-4 h-0.5 bg-retro-text transition-all duration-200 ${
                open ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-retro-border bg-retro-surface/95 backdrop-blur-xl"
          >
            <div className="px-4 py-3 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(false)
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="block py-2 px-3 text-sm text-retro-muted hover:text-bondi-400 hover:bg-bondi-50/20 rounded-mac transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
