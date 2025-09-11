// Facebook Conversion API Integration
// Using your specific access token and payload structure

interface FacebookConversionEvent {
  event_name: string
  event_time: number
  action_source: string
  user_data: {
    em?: string[] // email (hashed)
    ph?: string[] // phone (hashed)
    fn?: string[] // first name (hashed)
    ln?: string[] // last name (hashed)
    ct?: string[] // city (hashed)
    st?: string[] // state (hashed)
    zp?: string[] // zip code (hashed)
    country?: string[] // country (hashed)
    client_ip_address?: string
    client_user_agent?: string
    fbc?: string // Facebook click ID
    fbp?: string // Facebook browser ID
  }
  custom_data?: {
    currency?: string
    value?: string | number
    content_name?: string
    content_category?: string
    content_ids?: string[]
    num_items?: number
    order_id?: string
    search_string?: string
  }
  attribution_data?: {
    attribution_share?: string
  }
  original_event_data?: {
    event_name?: string
    event_time?: number
  }
}

interface FacebookConversionResponse {
  events_received: number
  messages: string[]
  fbtrace_id: string
}

class FacebookConversionAPI {
  private accessToken: string = 'EAARwkkqcZBPIBPdTS5QdzeFYcMcFVZCiKvFuuUJwqfHlSiKp8CSDlqvcujKT7ZAXMLXqq3X00mfTgwJNrfB2PvKHZC2UXzES4cwjZCZCPxtvCMzvKqmvYtzuXO4uptcAvH3wD97cO1UG8m1GbrR6uvbNnlp4lGyfcLL8xDnzDru4Omh6P94HZApVswp0IRRBAZDZD'
  private pixelId: string = 'YOUR_PIXEL_ID' // You'll need to provide this
  private apiVersion: string = 'v18.0'

  constructor(pixelId?: string) {
    if (pixelId) {
      this.pixelId = pixelId
    }
  }

  // Hash data for privacy (SHA-256)
  private async hashData(data: string): Promise<string> {
    const encoder = new TextEncoder()
    const dataBuffer = encoder.encode(data.toLowerCase().trim())
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  }

  // Prepare user data for Facebook
  private async prepareUserData(userData: {
    email?: string
    phone?: string
    firstName?: string
    lastName?: string
    city?: string
    state?: string
    zipCode?: string
    country?: string
    clientIp?: string
    userAgent?: string
    fbc?: string
    fbp?: string
  }) {
    const hashedData: any = {}

    if (userData.email) {
      hashedData.em = [await this.hashData(userData.email)]
    }
    if (userData.phone) {
      // Remove all non-digit characters
      const cleanPhone = userData.phone.replace(/\D/g, '')
      if (cleanPhone) {
        hashedData.ph = [await this.hashData(cleanPhone)]
      }
    }
    if (userData.firstName) {
      hashedData.fn = [await this.hashData(userData.firstName)]
    }
    if (userData.lastName) {
      hashedData.ln = [await this.hashData(userData.lastName)]
    }
    if (userData.city) {
      hashedData.ct = [await this.hashData(userData.city)]
    }
    if (userData.state) {
      hashedData.st = [await this.hashData(userData.state)]
    }
    if (userData.zipCode) {
      hashedData.zp = [await this.hashData(userData.zipCode)]
    }
    if (userData.country) {
      hashedData.country = [await this.hashData(userData.country)]
    }
    if (userData.clientIp) {
      hashedData.client_ip_address = userData.clientIp
    }
    if (userData.userAgent) {
      hashedData.client_user_agent = userData.userAgent
    }
    if (userData.fbc) {
      hashedData.fbc = userData.fbc
    }
    if (userData.fbp) {
      hashedData.fbp = userData.fbp
    }

    return hashedData
  }

  // Send conversion event to Facebook
  async sendConversionEvent(event: {
    eventName: string
    userData: {
      email?: string
      phone?: string
      firstName?: string
      lastName?: string
      city?: string
      state?: string
      zipCode?: string
      country?: string
      clientIp?: string
      userAgent?: string
      fbc?: string
      fbp?: string
    }
    customData?: {
      value?: number
      currency?: string
      contentName?: string
      contentCategory?: string
      contentIds?: string[]
      numItems?: number
      orderId?: string
      searchString?: string
    }
    attributionShare?: string
  }): Promise<FacebookConversionResponse | null> {
    try {
      const userData = await this.prepareUserData(event.userData)
      
      const conversionEvent: FacebookConversionEvent = {
        event_name: event.eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        user_data: userData
      }

      if (event.customData) {
        conversionEvent.custom_data = {
          currency: event.customData.currency || 'INR',
          value: event.customData.value?.toString() || '0',
          content_name: event.customData.contentName,
          content_category: event.customData.contentCategory,
          content_ids: event.customData.contentIds,
          num_items: event.customData.numItems,
          order_id: event.customData.orderId,
          search_string: event.customData.searchString
        }
      }

      if (event.attributionShare) {
        conversionEvent.attribution_data = {
          attribution_share: event.attributionShare
        }
      }

      // Add original event data for tracking
      conversionEvent.original_event_data = {
        event_name: event.eventName,
        event_time: Math.floor(Date.now() / 1000)
      }

      const response = await fetch(
        `https://graph.facebook.com/${this.apiVersion}/${this.pixelId}/events`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.accessToken}`
          },
          body: JSON.stringify({
            data: [conversionEvent]
          })
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Facebook Conversion API Error:', errorData)
        return null
      }

      const result: FacebookConversionResponse = await response.json()
      console.log('Facebook Conversion API Success:', result)
      return result

    } catch (error) {
      console.error('Facebook Conversion API Error:', error)
      return null
    }
  }

  // Track form submission (Lead event)
  async trackFormSubmission(formType: 'study_abroad' | 'career_application', userData: {
    email: string
    phone?: string
    fullName: string
    country?: string
    clientIp?: string
    userAgent?: string
    fbc?: string
    fbp?: string
  }) {
    const [firstName, ...lastNameParts] = userData.fullName.split(' ')
    const lastName = lastNameParts.join(' ')

    return this.sendConversionEvent({
      eventName: 'Lead',
      userData: {
        email: userData.email,
        phone: userData.phone,
        firstName,
        lastName,
        country: userData.country,
        clientIp: userData.clientIp,
        userAgent: userData.userAgent,
        fbc: userData.fbc,
        fbp: userData.fbp
      },
      customData: {
        contentName: formType === 'study_abroad' ? 'Study Abroad Application' : 'Career Application',
        contentCategory: formType === 'study_abroad' ? 'Education' : 'Employment',
        value: formType === 'study_abroad' ? 50000 : 25000, // Estimated value in INR
        currency: 'INR'
      },
      attributionShare: '0.3' // Based on your payload example
    })
  }

  // Track page view
  async trackPageView(pageName: string, userData?: {
    clientIp?: string
    userAgent?: string
    fbc?: string
    fbp?: string
  }) {
    return this.sendConversionEvent({
      eventName: 'PageView',
      userData: userData || {},
      customData: {
        contentName: pageName,
        contentCategory: 'Website'
      }
    })
  }

  // Track button click
  async trackButtonClick(buttonName: string, userData?: {
    clientIp?: string
    userAgent?: string
    fbc?: string
    fbp?: string
  }) {
    return this.sendConversionEvent({
      eventName: 'ViewContent',
      userData: userData || {},
      customData: {
        contentName: buttonName,
        contentCategory: 'Button Click'
      }
    })
  }
}

// Initialize Facebook Conversion API
const facebookConversionAPI = new FacebookConversionAPI()

export default facebookConversionAPI
export { FacebookConversionAPI }
