import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const TYPING_SPEED = 40
const PAUSE_AFTER_TYPE = 2000

export default function Terminal({
  lines = [],
  className = '',
  showPrompt = true,
  autoType = true,
}) {
  const [displayedLines, setDisplayedLines] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!autoType || lines.length === 0) return

    const line = lines[currentLine]
    if (!line) return

    if (isTyping) {
      if (currentChar < line.text.length) {
        const timeout = setTimeout(() => {
          setCurrentChar((c) => c + 1)
        }, TYPING_SPEED)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => [...prev, line])
          setCurrentLine((l) => l + 1)
          setCurrentChar(0)
          if (currentLine + 1 >= lines.length) {
            setIsTyping(false)
          }
        }, PAUSE_AFTER_TYPE)
        return () => clearTimeout(timeout)
      }
    }
  }, [currentChar, currentLine, isTyping, lines, autoType])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [displayedLines, currentChar])

  if (!autoType) {
    return (
      <div className={`font-mono text-sm leading-relaxed ${className}`}>
        {lines.map((line, i) => (
          <div key={i} className="flex gap-2">
            {line.prompt && (
              <span className="text-bondi-400 shrink-0">{line.prompt}</span>
            )}
            <span className="text-gray-300">{line.text}</span>
          </div>
        ))}
      </div>
    )
  }

  const currentLineText = lines[currentLine]
    ? lines[currentLine].text.slice(0, currentChar)
    : ''

  return (
    <div
      ref={containerRef}
      className={`font-mono text-sm leading-relaxed overflow-y-auto ${className}`}
    >
      {displayedLines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex gap-2"
        >
          {line.prompt && (
            <span className="text-bondi-400 shrink-0">{line.prompt}</span>
          )}
          <span className={line.color || 'text-gray-300'}>{line.text}</span>
        </motion.div>
      ))}
      {currentLineText !== undefined && currentLine < lines.length && (
        <div className="flex gap-2">
          {lines[currentLine]?.prompt && (
            <span className="text-bondi-400 shrink-0">
              {lines[currentLine].prompt}
            </span>
          )}
          <span className={lines[currentLine]?.color || 'text-gray-300'}>
            {currentLineText}
          </span>
          {showPrompt && <span className="terminal-cursor" />}
        </div>
      )}
      {!isTyping && showPrompt && (
        <div className="flex gap-2 mt-1">
          <span className="text-bondi-400">❯</span>
          <span className="terminal-cursor" />
        </div>
      )}
    </div>
  )
}
