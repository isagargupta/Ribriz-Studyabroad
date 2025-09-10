# Ribriz Overseas - Premium Global Career Solutions

A Next.js application with authentication for international career placement services.

## Features

- **Next.js 14** with App Router
- **NextAuth.js** authentication with Google and LinkedIn
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Responsive design** with premium UI/UX
- **Dashboard** for authenticated users

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Copy `.env.local` and add your OAuth credentials:
   ```bash
   # NextAuth Configuration (REQUIRED)
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   
   # Google OAuth (Get from Google Cloud Console)
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

   # LinkedIn OAuth (Get from LinkedIn Developer Portal)
   LINKEDIN_CLIENT_ID=your-linkedin-client-id
   LINKEDIN_CLIENT_SECRET=your-linkedin-client-secret

   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## OAuth Setup

### Google OAuth Setup:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

### LinkedIn OAuth Setup:
1. Go to [LinkedIn Developer Portal](https://www.linkedin.com/developers/)
2. Create a new app
3. Add OAuth 2.0 redirect URL: `http://localhost:3000/api/auth/callback/linkedin`
4. Request access to Sign In with LinkedIn

## Project Structure

```
app/
├── api/auth/[...nextauth]/     # NextAuth.js API routes
├── auth/                       # Authentication pages
├── components/                 # Reusable components
├── dashboard/                  # Protected dashboard
├── providers/                  # Context providers
├── globals.css                 # Global styles
├── layout.tsx                  # Root layout
└── page.tsx                    # Home page
```

## Authentication Flow

1. Users can sign in with Google or LinkedIn
2. After authentication, they're redirected to the dashboard
3. Protected routes automatically redirect to sign-in if not authenticated
4. User session is managed by NextAuth.js

## Deployment

The app can be deployed to Vercel, Netlify, or any platform supporting Next.js.

For production deployment, make sure to:
1. Update `NEXTAUTH_URL` to your production domain
2. Update OAuth redirect URIs in Google/LinkedIn consoles
3. Set all environment variables in your hosting platform