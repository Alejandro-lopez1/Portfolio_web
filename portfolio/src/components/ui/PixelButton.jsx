export default function PixelButton({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-pixel font-medium transition-all duration-150 cursor-pointer select-none active:translate-y-px'

  const variants = {
    primary:
      'bg-bondi-500 text-white hover:bg-bondi-600 shadow-apple hover:shadow-apple-lg',
    secondary:
      'bg-retro-surface text-retro-text border border-retro-border hover:border-bondi-500 hover:text-bondi-400 shadow-apple',
    ghost:
      'bg-transparent text-retro-muted hover:text-bondi-400 hover:bg-bondi-50/20',
    terminal:
      'bg-retro-surface text-bondi-300 border border-retro-border hover:border-bondi-500 hover:text-bondi-300',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-[10px] rounded-mac',
    md: 'px-5 py-2.5 text-xs rounded-mac',
    lg: 'px-7 py-3 text-sm rounded-mac',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
