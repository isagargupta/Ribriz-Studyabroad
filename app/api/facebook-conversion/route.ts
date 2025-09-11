import { NextRequest, NextResponse } from 'next/server'
import facebookConversionAPI from '../../lib/facebook-conversion-api'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { eventType, userData, customData } = body

    // Get client IP and user agent
    const clientIp = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    '127.0.0.1'
    const userAgent = request.headers.get('user-agent') || ''

    // Add client info to user data
    const enhancedUserData = {
      ...userData,
      clientIp,
      userAgent
    }

    let result

    switch (eventType) {
      case 'form_submission':
        result = await facebookConversionAPI.trackFormSubmission(
          customData.formType,
          enhancedUserData
        )
        break
      
      case 'page_view':
        result = await facebookConversionAPI.trackPageView(
          customData.pageName,
          enhancedUserData
        )
        break
      
      case 'button_click':
        result = await facebookConversionAPI.trackButtonClick(
          customData.buttonName,
          enhancedUserData
        )
        break
      
      default:
        return NextResponse.json(
          { error: 'Invalid event type' },
          { status: 400 }
        )
    }

    return NextResponse.json({ success: true, result })

  } catch (error) {
    console.error('Facebook Conversion API Route Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
