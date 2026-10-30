export default function Badge({ children, color = 'brand', className = '' }) {
  const colors = {
    brand: 'bg-brand-500/10 text-brand-400 border-brand-500/25',
    mint: 'bg-brand-300/10 text-brand-300 border-brand-300/25',
    deep: 'bg-brand-700/15 text-brand-300 border-brand-700/40',
    outline: 'bg-transparent text-brand-400 border-brand-500/30',
    gray: 'bg-retro-border-light/60 text-retro-muted border-retro-border',
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[11px] font-pixel font-medium border rounded-mac ${colors[color]} ${className}`}
    >
      {children}
    </span>
  )
}
