import { createClient } from '@/app/utils/supabase-server'

interface Submission {
  id: string
  email: string
  idea: string
  title: string | null
  created_at: string
}

async function getSubmissions(): Promise<Submission[]> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('submissions')
    .select('id, email, idea, title, created_at')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching submissions:', error)
    return []
  }

  return data || []
}

export default async function SubmissionsList() {
  const submissions = await getSubmissions()

  if (submissions.length === 0) {
    return (
      <div className="submissions-list-container">
        <h2>Browse Ideas</h2>
        <p className="no-submissions">No ideas submitted yet. Be the first to share your idea!</p>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="submissions-list-container">
      <h2>Browse Ideas ({submissions.length})</h2>
      <div className="submissions-grid">
        {submissions.map((submission) => (
          <div key={submission.id} className="submission-card">
            {submission.title && (
              <h3 className="submission-title">{submission.title}</h3>
            )}
            <p className="submission-idea">{submission.idea}</p>
            <div className="submission-footer">
              <span className="submission-email">{submission.email}</span>
              <span className="submission-date">{formatDate(submission.created_at)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

