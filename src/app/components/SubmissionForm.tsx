'use client'

import { useState, FormEvent } from 'react'
import { submitIdea } from '@/app/actions/submitIdea'

export default function SubmissionForm() {
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [idea, setIdea] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const result = await submitIdea(email, idea, title)

    if (result.success) {
      setMessage({ type: 'success', text: 'Your idea has been submitted successfully!' })
      setEmail('')
      setTitle('')
      setIdea('')
      // Clear success message after 5 seconds
      setTimeout(() => setMessage(null), 5000)
    } else {
      setMessage({ type: 'error', text: result.error || 'Failed to submit idea' })
    }

    setIsSubmitting(false)
  }

  return (
    <div className="submission-form-container">
      <h2>Share Your Startup or Business Idea</h2>
      <form onSubmit={handleSubmit} className="submission-form">
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your.email@example.com"
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title (Optional)</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="A brief title for your idea"
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="idea">Your Idea *</label>
          <textarea
            id="idea"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            required
            rows={6}
            placeholder="Describe your startup or business idea in detail..."
            disabled={isSubmitting}
          />
        </div>

        {message && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? 'Submitting...' : 'Submit Idea'}
        </button>
      </form>
    </div>
  )
}

