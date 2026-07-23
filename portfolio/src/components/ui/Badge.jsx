export default function Badge({ children, color = 'bondi', className = '' }) {
  const colors = {
    bondi: 'bg-bondi-50 text-bondi-400 border-bondi-200',
    blue: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
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
