import { motion } from 'framer-motion'

export default function Window({
  title = 'Untitled',
  children,
  className = '',
  variant = 'default',
  animate = true,
}) {
  const Wrapper = animate ? motion.div : 'div'
  const animProps = animate
    ? {
        initial: { opacity: 0, y: 20, scale: 0.98 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.4, ease: 'easeOut' },
      }
    : {}

  const variantStyles = {
    default: 'bg-white border border-retro-border shadow-apple',
    glass: 'bg-white/80 backdrop-blur-xl border border-retro-border-light shadow-glass',
    terminal: 'bg-[#1E1E1E] border border-gray-700 shadow-apple-lg',
  }

  return (
    <Wrapper
      className={`rounded-mac overflow-hidden ${variantStyles[variant]} ${className}`}
      {...animProps}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-b from-gray-100 to-gray-50 border-b border-retro-border-light select-none">
        <div className="flex gap-1.5">
          <span className="mac-btn-close" />
          <span className="mac-btn-minimize" />
          <span className="mac-btn-maximize" />
        </div>
        <span className="ml-2 text-xs font-medium text-retro-muted font-sans truncate">
          {title}
        </span>
      </div>
      <div>{children}</div>
    </Wrapper>
  )
}
