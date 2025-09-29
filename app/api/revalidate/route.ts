import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { secret, path, tag } = body

    // Verify the secret token
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    // Revalidate specific path
    if (path) {
      revalidatePath(path)
      return NextResponse.json({ 
        message: `Path ${path} revalidated successfully`,
        revalidated: true,
        now: Date.now()
      })
    }

    // Revalidate specific tag
    if (tag) {
      revalidateTag(tag)
      return NextResponse.json({ 
        message: `Tag ${tag} revalidated successfully`,
        revalidated: true,
        now: Date.now()
      })
    }

    // Revalidate all sitemaps
    revalidatePath('/sitemap.xml')
    revalidatePath('/sitemaps/pages-0.xml')
    revalidatePath('/sitemaps/blog-0.xml')
    revalidatePath('/sitemaps/jobs-0.xml')
    revalidatePath('/sitemaps/universities-0.xml')
    revalidatePath('/robots.txt')

    return NextResponse.json({ 
      message: 'All sitemaps revalidated successfully',
      revalidated: true,
      now: Date.now()
    })

  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      { message: 'Error revalidating' }, 
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Revalidation endpoint is active',
    timestamp: Date.now()
  })
}
