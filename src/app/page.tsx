import SubmissionForm from '@/app/components/SubmissionForm'
import SubmissionsList from '@/app/components/SubmissionsList'

export default function Home() {
  return (
    <main className="main-container">
      <header className="page-header">
        <h1>Startup Ideas Forum</h1>
        <p>Share your business ideas and browse submissions from others</p>
      </header>

      <SubmissionForm />
      
      <SubmissionsList />
    </main>
  )
}
