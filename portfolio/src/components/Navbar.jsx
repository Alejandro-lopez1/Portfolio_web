import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Proyectos' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-zinc-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className="text-lg font-semibold text-white hover:text-violet-400 transition-colors"
          >
            AL<span className="text-violet-500">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-zinc-800/50 bg-[#0a0a0a]/95 backdrop-blur-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(false)
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="block py-2 text-sm text-gray-400 hover:text-white transition-colors"
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
