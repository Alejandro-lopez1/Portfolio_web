export default function Badge({ children, color = 'bondi', className = '' }) {
  const colors = {
    bondi: 'bg-bondi-50 text-bondi-500 border-bondi-100',
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    green: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    amber: 'bg-amber-50 text-amber-600 border-amber-100',
    rose: 'bg-rose-50 text-rose-600 border-rose-100',
    violet: 'bg-violet-50 text-violet-600 border-violet-100',
    gray: 'bg-gray-100 text-gray-600 border-gray-200',
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[11px] font-pixel font-medium border rounded-mac ${colors[color]} ${className}`}
    >
      {children}
    </span>
  )
}
