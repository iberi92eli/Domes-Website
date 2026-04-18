"use client"

import { FormEvent, useState } from 'react'

export function InquiryForm({ endpoint = '/api/contact', mode = 'contact' }: { endpoint?: string; mode?: 'contact' | 'workspace' }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    setMessage('')
    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data?.message || 'Unable to send form.')
      setStatus('done')
      setMessage(data.message || 'Request received.')
      form.reset()
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Something went wrong.')
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} />
      <div className="form-grid">
        <label>
          Full name
          <input name="name" required maxLength={120} placeholder="Your full name" />
        </label>
        <label>
          Company / organisation
          <input name="company" maxLength={160} placeholder="Company or organisation (if applicable)" />
        </label>
      </div>
      <div className="form-grid">
        <label>
          Email
          <input type="email" name="email" required maxLength={160} placeholder="name@example.com" />
        </label>
        <label>
          Phone
          <input name="phone" maxLength={80} placeholder="Phone number" />
        </label>
      </div>
      <div className="form-grid">
        <label>
          Inquiry type
          <select name="inquiryType" defaultValue={mode === 'workspace' ? 'confidential-intake' : 'general'}>
            <option value="general">General inquiry</option>
            <option value="corporate">Corporate & commercial</option>
            <option value="disputes">Disputes & litigation</option>
            <option value="regulatory">Regulatory & compliance</option>
            <option value="employment">Employment & internal operations</option>
            <option value="projects">Projects & asset-based matters</option>
            <option value="sensitive">Rights-sensitive / urgent personal matter</option>
            <option value="confidential-intake">Confidential intake request</option>
          </select>
        </label>
        <label>
          Urgency
          <select name="urgency" defaultValue="standard">
            <option value="standard">Standard</option>
            <option value="priority">Priority</option>
            <option value="urgent">Urgent</option>
          </select>
        </label>
      </div>
      <label>
        Subject
        <input name="subject" required maxLength={180} placeholder="Short description of the matter" />
      </label>
      <label>
        Matter summary
        <textarea name="message" required maxLength={5000} placeholder="Provide a concise outline of the matter, relevant context, the current stage, and any timing pressure." />
      </label>
      <label>
        <input type="checkbox" name="consent" required />
        <span className="utility-note">
          I understand that this form is for initial contact only and does not by itself create a lawyer-client relationship.
        </span>
      </label>
      <div className="hero-actions">
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : mode === 'workspace' ? 'Submit confidential intake' : 'Send enquiry'}
        </button>
      </div>
      {message ? (
        <div className={status === 'done' ? 'notice' : 'callout'}>{message}</div>
      ) : null}
    </form>
  )
}
