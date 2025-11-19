# Startup Ideas Forum

A simple Next.js forum application where users can submit and browse startup/business ideas. This is a public forum requiring no authentication or sign-up.

## Features

- Submit startup/business ideas with email
- Browse all submitted ideas
- No authentication required (public forum)
- Responsive design

## Tech Stack

- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Database**: Supabase (PostgreSQL)
- **Styling**: Plain CSS

## Prerequisites

- Node.js 18+ installed
- A Supabase account ([sign up here](https://supabase.com))

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Go to [Supabase Dashboard](https://app.supabase.com) and create a new project (or use an existing one)

2. In your Supabase project, go to the SQL Editor and run the following SQL to create the `submissions` table:

```sql
CREATE TABLE submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  idea TEXT NOT NULL,
  title TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (optional, but recommended)
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read submissions
CREATE POLICY "Allow public read access"
  ON submissions
  FOR SELECT
  USING (true);

-- Create a policy that allows anyone to insert submissions
CREATE POLICY "Allow public insert access"
  ON submissions
  FOR INSERT
  WITH CHECK (true);
```

3. Get your Supabase credentials:
   - Go to Project Settings → API
   - Copy the **Project URL** (this is your `NEXT_PUBLIC_SUPABASE_URL`)
   - Copy the **anon/public** key (this is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace `your_supabase_project_url` and `your_supabase_anon_key` with the values from step 2.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/
├── app/
│   ├── actions/
│   │   └── submitIdea.ts        # Server action for form submission
│   ├── components/
│   │   ├── SubmissionForm.tsx   # Form component for submitting ideas
│   │   └── SubmissionsList.tsx  # Component to display all submissions
│   ├── utils/
│   │   ├── supabase.ts          # Client-side Supabase client
│   │   └── supabase-server.ts   # Server-side Supabase client
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main page
```

## Usage

1. **Submit an Idea**: Fill out the form at the top of the page with your email and business idea. Optionally add a title.

2. **Browse Ideas**: Scroll down to see all submitted ideas displayed in a grid layout. Ideas are shown in reverse chronological order (newest first).

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This application can be deployed to platforms like Vercel, Netlify, or any hosting service that supports Next.js.

**Important**: Make sure to set the environment variables (`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`) in your deployment platform's environment variable settings.

## License

MIT
