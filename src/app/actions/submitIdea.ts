'use server'

import { createClient } from '@/app/utils/supabase-server'
import { revalidatePath } from 'next/cache'

export interface SubmissionResult {
  success: boolean
  error?: string
}

export async function submitIdea(
  email: string,
  idea: string,
  title?: string
): Promise<SubmissionResult> {
  // Validate inputs
  if (!email || !idea) {
    return { success: false, error: 'Email and idea are required' }
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Please enter a valid email address' }
  }

  // Validate idea length
  if (idea.trim().length < 10) {
    return { success: false, error: 'Idea must be at least 10 characters long' }
  }

  try {
    const supabase = await createClient()
    
    const { error } = await supabase
      .from('submissions')
      .insert([
        {
          email: email.trim(),
          idea: idea.trim(),
          title: title?.trim() || null,
        },
      ])

    if (error) {
      console.error('Supabase error:', error)
      return { success: false, error: 'Failed to submit idea. Please try again.' }
    }

    // Revalidate the page to show the new submission
    revalidatePath('/')
    
    return { success: true }
  } catch (error) {
    console.error('Submission error:', error)
    return { success: false, error: 'An unexpected error occurred. Please try again.' }
  }
}

