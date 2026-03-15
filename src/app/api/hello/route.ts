import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  await new Promise((resolve) => setTimeout(resolve, 100))

  // Read rate-limit values forwarded by proxy.ts via request headers
  // (Node.js runtime proxy cannot set response headers directly)
  const rateLimitLimit = request.headers.get('x-ratelimit-limit') ?? '100'
  const rateLimitRemaining = request.headers.get('x-ratelimit-remaining') ?? '99'

  return NextResponse.json(
    {
      message: 'Hello from Next.js API Route!',
      timestamp: new Date().toISOString(),
      method: 'GET',
      features: [
        'Server-side execution',
        'Access to environment variables',
        'Database queries',
        'External API calls',
        'Authentication logic',
      ],
    },
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-RateLimit-Limit': rateLimitLimit,
        'X-RateLimit-Remaining': rateLimitRemaining,
      },
    }
  )
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate input (in real app, use a validation library like Zod)
    if (!body.name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    await new Promise((resolve) => setTimeout(resolve, 100))

    return NextResponse.json(
      {
        message: `Hello, ${body.name}!`,
        data: body,
        timestamp: new Date().toISOString(),
        method: 'POST',
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON body' },
      { status: 400 }
    )
  }
}
