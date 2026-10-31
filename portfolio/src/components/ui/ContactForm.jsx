import { useEffect, useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import PixelButton from './PixelButton'

const FORM_ENDPOINT =
  'https://formsubmit.co/ajax/alejandro.lopez14591@gmail.com'

const serviceOptions = [
  'Consulta general',
  'Sitios web y landing pages',
  'Sistemas de gestion a medida',
  'Dashboards y analisis de datos',
  'Automatizacion de procesos',
  'APIs y backends',
  'Consultoria y analisis funcional',
  'Otro',
]

const initialForm = (service) => ({
  name: '',
  email: '',
  service: service || 'Consulta general',
  message: '',
})

const inputClass =
  'w-full rounded-mac border border-retro-border bg-retro-bg px-3 py-2.5 text-sm text-retro-text placeholder:text-retro-muted/60 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors'

const labelClass =
  'block text-[10px] font-pixel font-medium uppercase tracking-wider text-retro-muted mb-1.5'

export default function ContactForm({
  defaultService = '',
  requestKey = 0,
  source = 'Portfolio',
  submitLabel = 'Enviar mensaje',
}) {
  const [form, setForm] = useState(() => initialForm(defaultService))
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const prefix = `contact-${source.toLowerCase().replace(/\s+/g, '-')}`

  useEffect(() => {
    if (!defaultService) return

    setForm((current) => ({ ...current, service: defaultService }))
    setStatus('idle')
    setError('')
  }, [defaultService, requestKey])

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'submitting') return

    setStatus('submitting')
    setError('')

    const honey = new FormData(event.currentTarget).get('_honey') || ''

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          _replyto: form.email.trim(),
          service: form.service,
          message: form.message.trim(),
          _subject: `Nuevo mensaje desde ${source} - ${form.service}`,
          _template: 'table',
          _captcha: 'false',
          _honey: honey,
        }),
      })

      const data = await response.json().catch(() => ({}))
      const failed =
        !response.ok || data.success === false || data.success === 'false'

      if (failed) {
        throw new Error(data.message || 'No se pudo enviar el mensaje.')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err.message || 'No se pudo enviar el mensaje. Intenta de nuevo.')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="flex flex-col items-center text-center py-6"
        aria-live="polite"
      >
        <div className="w-12 h-12 rounded-mac bg-brand-500/10 border border-brand-500/25 flex items-center justify-center text-brand-400 mb-4">
          <CheckCircle2 size={24} aria-hidden="true" />
        </div>
        <h3 className="font-pixel text-base font-bold text-retro-text mb-1">
          Mensaje enviado
        </h3>
        <p className="text-xs text-retro-muted max-w-xs leading-relaxed">
          Gracias por escribirme. Te voy a responder a {form.email || 'tu correo'} a la brevedad.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialForm(defaultService))
            setStatus('idle')
            setError('')
          }}
          className="mt-4 text-[11px] font-pixel font-medium text-brand-400 hover:text-brand-300 transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${prefix}-name`} className={labelClass}>
            Nombre
          </label>
          <input
            id={`${prefix}-name`}
            name="name"
            type="text"
            value={form.name}
            onChange={updateField}
            required
            autoComplete="name"
            placeholder="Tu nombre"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`${prefix}-email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${prefix}-email`}
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            required
            autoComplete="email"
            placeholder="tu@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${prefix}-service`} className={labelClass}>
          Servicio de interes
        </label>
        <select
          id={`${prefix}-service`}
          name="service"
          value={form.service}
          onChange={updateField}
          className={inputClass}
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option} className="bg-retro-surface">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${prefix}-message`} className={labelClass}>
          Mensaje
        </label>
        <textarea
          id={`${prefix}-message`}
          name="message"
          value={form.message}
          onChange={updateField}
          required
          rows={4}
          placeholder="Contame que necesitas..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {status === 'error' && (
        <p
          className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-mac px-3 py-2"
          role="alert"
        >
          {error}
        </p>
      )}

      <PixelButton
        type="submit"
        variant="primary"
        size="md"
        className="w-full"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={14} className="animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          <>
            {submitLabel}
            <Send size={14} aria-hidden="true" />
          </>
        )}
      </PixelButton>

      <p className="text-[10px] text-retro-muted text-center leading-relaxed">
        El mensaje se envia sin salir de esta pagina.
      </p>
    </form>
  )
}
