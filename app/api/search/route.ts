import { NextRequest, NextResponse } from 'next/server'

interface Program {
  id: number
  name: string
  university: string
  country: string
  city: string
  subject: string
  degree: string
  timeframe: string
  language: string
  housing: string
  rating: number
  reviews: number
  image: string
  description: string
  included: string[]
  tuition: string
  duration: string
}

// Sample programs data (in production, this would come from a database)
const programs: Program[] = [
  {
    id: 1,
    name: 'Business Administration',
    university: 'University of Toronto',
    country: 'Canada',
    city: 'Toronto',
    subject: 'Business Administration',
    degree: 'Bachelor',
    timeframe: 'Fall 2025',
    language: 'English',
    housing: 'On-campus',
    rating: 4.8,
    reviews: 156,
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    description: 'Comprehensive business program with international focus and internship opportunities.',
    included: ['Internship', 'Excursions', 'Insurance', 'Airport Pickup'],
    tuition: '$45,000 CAD/year',
    duration: '4 years'
  },
  {
    id: 2,
    name: 'Computer Science',
    university: 'Stanford University',
    country: 'USA',
    city: 'Stanford',
    subject: 'Computer Science',
    degree: 'Master',
    timeframe: 'Fall 2025',
    language: 'English',
    housing: 'Off-campus',
    rating: 4.9,
    reviews: 234,
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    description: 'Advanced computer science program with cutting-edge research opportunities.',
    included: ['Research Project', 'Career Services', 'Insurance'],
    tuition: '$56,000 USD/year',
    duration: '2 years'
  },
  {
    id: 3,
    name: 'Engineering',
    university: 'Technical University of Munich',
    country: 'Germany',
    city: 'Munich',
    subject: 'Engineering',
    degree: 'Master',
    timeframe: 'Fall 2025',
    language: 'English',
    housing: 'On-campus',
    rating: 4.7,
    reviews: 189,
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
    description: 'World-class engineering program with industry partnerships and practical experience.',
    included: ['Industry Internship', 'Excursions', 'Insurance', 'Language Course'],
    tuition: 'Free',
    duration: '2 years'
  },
  {
    id: 4,
    name: 'Medicine',
    university: 'University of Oxford',
    country: 'UK',
    city: 'Oxford',
    subject: 'Medicine',
    degree: 'Bachelor',
    timeframe: 'Fall 2025',
    language: 'English',
    housing: 'On-campus',
    rating: 4.9,
    reviews: 145,
    image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg',
    description: 'Prestigious medical program with clinical rotations and research opportunities.',
    included: ['Clinical Rotations', 'Research Project', 'Insurance', 'Mentorship'],
    tuition: '£9,250 GBP/year',
    duration: '6 years'
  },
  {
    id: 5,
    name: 'Arts & Humanities',
    university: 'University of Melbourne',
    country: 'Australia',
    city: 'Melbourne',
    subject: 'Arts & Humanities',
    degree: 'Bachelor',
    timeframe: 'Fall 2025',
    language: 'English',
    housing: 'Off-campus',
    rating: 4.6,
    reviews: 98,
    image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg',
    description: 'Diverse arts and humanities program with cultural exchange opportunities.',
    included: ['Cultural Activities', 'Excursions', 'Insurance'],
    tuition: '$42,000 AUD/year',
    duration: '3 years'
  },
  {
    id: 6,
    name: 'Data Science',
    university: 'National University of Singapore',
    country: 'Singapore',
    city: 'Singapore',
    subject: 'Data Science',
    degree: 'Master',
    timeframe: 'Fall 2025',
    language: 'English',
    housing: 'On-campus',
    rating: 4.8,
    reviews: 167,
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    description: 'Advanced data science program with industry partnerships and real-world projects.',
    included: ['Industry Project', 'Career Services', 'Insurance', 'Networking Events'],
    tuition: '$38,000 SGD/year',
    duration: '1.5 years'
  },
  {
    id: 7,
    name: 'International Business',
    university: 'University of British Columbia',
    country: 'Canada',
    city: 'Vancouver',
    subject: 'Business Administration',
    degree: 'Master',
    timeframe: 'Fall 2025',
    language: 'English',
    housing: 'On-campus',
    rating: 4.7,
    reviews: 123,
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    description: 'Global business program with international exchange opportunities.',
    included: ['International Exchange', 'Career Services', 'Insurance', 'Networking Events'],
    tuition: '$48,000 CAD/year',
    duration: '2 years'
  },
  {
    id: 8,
    name: 'Mechanical Engineering',
    university: 'ETH Zurich',
    country: 'Switzerland',
    city: 'Zurich',
    subject: 'Engineering',
    degree: 'Master',
    timeframe: 'Fall 2025',
    language: 'English',
    housing: 'Off-campus',
    rating: 4.9,
    reviews: 201,
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
    description: 'Advanced mechanical engineering with research and industry focus.',
    included: ['Research Project', 'Industry Internship', 'Insurance', 'Language Course'],
    tuition: 'CHF 730/year',
    duration: '2 years'
  }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Extract search parameters
    const location = searchParams.get('location')
    const subject = searchParams.get('subject')
    const timeframe = searchParams.get('timeframe')
    const country = searchParams.get('country')
    const rating = searchParams.get('rating')
    const degree = searchParams.get('degree')
    const housing = searchParams.get('housing')
    const language = searchParams.get('language')
    const included = searchParams.get('included')
    const sortBy = searchParams.get('sortBy') || 'rating'
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    // Filter programs based on search parameters
    let filteredPrograms = programs.filter(program => {
      // Location filter (country)
      if (location && program.country.toLowerCase() !== location.toLowerCase()) {
        return false
      }

      // Subject filter
      if (subject && !program.subject.toLowerCase().includes(subject.toLowerCase().replace(/-/g, ' '))) {
        return false
      }

      // Timeframe filter
      if (timeframe && program.timeframe.toLowerCase() !== timeframe.toLowerCase().replace(/-/g, ' ')) {
        return false
      }

      // Country filter
      if (country && country !== 'All Countries' && program.country !== country) {
        return false
      }

      // Rating filter
      if (rating && rating !== 'All Ratings') {
        const minRating = parseFloat(rating.replace('+ Stars', ''))
        if (program.rating < minRating) {
          return false
        }
      }

      // Degree filter
      if (degree && degree !== 'All Degrees' && program.degree !== degree) {
        return false
      }

      // Housing filter
      if (housing && housing !== 'All Housing' && program.housing !== housing) {
        return false
      }

      // Language filter
      if (language && language !== 'All Languages' && program.language !== language) {
        return false
      }

      // Included filter
      if (included) {
        const includedItems = included.split(',')
        const hasAllIncluded = includedItems.every(item => program.included.includes(item))
        if (!hasAllIncluded) {
          return false
        }
      }

      return true
    })

    // Sort programs
    switch (sortBy) {
      case 'rating':
        filteredPrograms.sort((a, b) => b.rating - a.rating)
        break
      case 'reviews':
        filteredPrograms.sort((a, b) => b.reviews - a.reviews)
        break
      case 'tuition':
        filteredPrograms.sort((a, b) => {
          // Simple sorting by tuition (in production, you'd parse the actual values)
          return a.tuition.localeCompare(b.tuition)
        })
        break
      case 'name':
        filteredPrograms.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        filteredPrograms.sort((a, b) => b.rating - a.rating)
    }

    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedPrograms = filteredPrograms.slice(startIndex, endIndex)

    // Calculate pagination info
    const totalPages = Math.ceil(filteredPrograms.length / limit)
    const hasNextPage = page < totalPages
    const hasPrevPage = page > 1

    return NextResponse.json({
      success: true,
      data: {
        programs: paginatedPrograms,
        pagination: {
          currentPage: page,
          totalPages,
          totalResults: filteredPrograms.length,
          hasNextPage,
          hasPrevPage,
          limit
        },
        filters: {
          location,
          subject,
          timeframe,
          country,
          rating,
          degree,
          housing,
          language,
          included
        }
      }
    })

  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        message: 'An error occurred while searching programs'
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Handle advanced search with complex filters
    const { filters, sortBy = 'rating', page = 1, limit = 10 } = body

    let filteredPrograms = programs.filter(program => {
      // Apply all filters from the request body
      if (filters.country && filters.country !== 'All Countries' && program.country !== filters.country) {
        return false
      }

      if (filters.subject && filters.subject !== 'All Subjects' && program.subject !== filters.subject) {
        return false
      }

      if (filters.timeframe && filters.timeframe !== 'All Timeframes' && program.timeframe !== filters.timeframe) {
        return false
      }

      if (filters.degree && filters.degree !== 'All Degrees' && program.degree !== filters.degree) {
        return false
      }

      if (filters.housing && filters.housing !== 'All Housing' && program.housing !== filters.housing) {
        return false
      }

      if (filters.language && filters.language !== 'All Languages' && program.language !== filters.language) {
        return false
      }

      if (filters.rating && filters.rating !== 'All Ratings') {
        const minRating = parseFloat(filters.rating.replace('+ Stars', ''))
        if (program.rating < minRating) {
          return false
        }
      }

      if (filters.included && filters.included.length > 0) {
        const hasAllIncluded = filters.included.every((item: string) => program.included.includes(item))
        if (!hasAllIncluded) {
          return false
        }
      }

      return true
    })

    // Sort and paginate
    filteredPrograms.sort((a, b) => b.rating - a.rating)
    
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedPrograms = filteredPrograms.slice(startIndex, endIndex)

    const totalPages = Math.ceil(filteredPrograms.length / limit)

    return NextResponse.json({
      success: true,
      data: {
        programs: paginatedPrograms,
        pagination: {
          currentPage: page,
          totalPages,
          totalResults: filteredPrograms.length,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
          limit
        }
      }
    })

  } catch (error) {
    console.error('Advanced search API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        message: 'An error occurred while processing advanced search'
      },
      { status: 500 }
    )
  }
}
