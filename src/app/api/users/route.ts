import { NextResponse } from 'next/server'

interface User {
  id: number
  name: string
  email: string
  role: string
  createdAt: string
}

// In-memory data store (in real app, use a database)
let users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    createdAt: '2024-01-02T00:00:00Z',
  },
]

/**
 * GET /api/users
 * Returns list of all users
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const role = searchParams.get('role')

  let filteredUsers = users
  if (role) {
    filteredUsers = users.filter((user) => user.role === role)
  }

  await new Promise((resolve) => setTimeout(resolve, 100))

  return NextResponse.json(
    {
      success: true,
      data: filteredUsers,
      count: filteredUsers.length,
    },
    { status: 200 }
  )
}

/**
 * POST /api/users
 * Creates a new user
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!body.name || !body.email) {
      return NextResponse.json(
        {
          success: false,
          error: 'Name and email are required',
        },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email format',
        },
        { status: 400 }
      )
    }

    if (users.some((user) => user.email === body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email already exists',
        },
        { status: 409 }
      )
    }

    const newUser: User = {
      id: users.length + 1,
      name: body.name,
      email: body.email,
      role: body.role || 'user',
      createdAt: new Date().toISOString(),
    }

    users.push(newUser)

    return NextResponse.json(
      {
        success: true,
        data: newUser,
        message: 'User created successfully',
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Invalid request body',
      },
      { status: 400 }
    )
  }
}

/**
 * DELETE /api/users
 * Deletes all users (dangerous - for demo only)
 */
export async function DELETE() {
  const count = users.length
  users = []

  return NextResponse.json(
    {
      success: true,
      message: `Deleted ${count} users`,
    },
    { status: 200 }
  )
}
