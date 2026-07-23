const icons = {
  java: (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <rect width="32" height="32" rx="4" fill="#F89820"/>
      <text x="16" y="22" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">J</text>
    </svg>
  ),
  python: (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <rect width="32" height="32" rx="4" fill="#3776AB"/>
      <text x="16" y="22" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">Py</text>
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <rect width="32" height="32" rx="4" fill="#0A7EA4"/>
      <text x="16" y="22" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">SQL</text>
    </svg>
  ),
  react: (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <rect width="32" height="32" rx="4" fill="#61DAFB"/>
      <text x="16" y="22" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="#1E1E1E" textAnchor="middle">Re</text>
    </svg>
  ),
  django: (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <rect width="32" height="32" rx="4" fill="#092E20"/>
      <text x="16" y="22" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="#44B78B" textAnchor="middle">Dj</text>
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <rect width="32" height="32" rx="4" fill="#2496ED"/>
      <text x="16" y="22" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">Dk</text>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <rect width="32" height="32" rx="4" fill="#F05032"/>
      <text x="16" y="22" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">Gt</text>
    </svg>
  ),
  linux: (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <rect width="32" height="32" rx="4" fill="#FCC624"/>
      <text x="16" y="22" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#1E1E1E" textAnchor="middle">Ln</text>
    </svg>
  ),
  database: (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <rect width="32" height="32" rx="4" fill="#336791"/>
      <text x="16" y="22" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">DB</text>
    </svg>
  ),
  api: (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <rect width="32" height="32" rx="4" fill="#6C63FF"/>
      <text x="16" y="22" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">API</text>
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <rect width="32" height="32" rx="4" fill="#10B981"/>
      <text x="16" y="22" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">📊</text>
    </svg>
  ),
  spring: (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <rect width="32" height="32" rx="4" fill="#6DB33F"/>
      <text x="16" y="22" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">SB</text>
    </svg>
  ),
  pwa: (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <rect width="32" height="32" rx="4" fill="#5A0FC8"/>
      <text x="16" y="22" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">PW</text>
    </svg>
  ),
}

export default function PixelIcon({ name, size = 32, className = '' }) {
  const icon = icons[name]
  if (!icon) {
    return (
      <div
        className={`bg-bondi-100 rounded-mac flex items-center justify-center ${className}`}
        style={{ width: size, height: size }}
      >
        <span className="text-bondi-500 font-pixel text-[10px]">?</span>
      </div>
    )
  }

  return (
    <div className={className} style={{ width: size, height: size }}>
      {icon}
    </div>
  )
}
