import { NextResponse } from 'next/server'

interface User {
  id: number
  name: string
  email: string
  role: string
  createdAt: string
}

const users: User[] = [
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
 * GET /api/users/[id]
 * Returns a single user by ID
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const userId = parseInt(id)

  if (isNaN(userId)) {
    return NextResponse.json(
      { success: false, error: 'Invalid user ID' },
      { status: 400 }
    )
  }

  const user = users.find((u) => u.id === userId)

  if (!user) {
    return NextResponse.json(
      { success: false, error: 'User not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(
    { success: true, data: user },
    { status: 200 }
  )
}

/**
 * PUT /api/users/[id]
 * Updates a user by ID
 */
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const userId = parseInt(id)
    const body = await request.json()

    if (isNaN(userId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid user ID' },
        { status: 400 }
      )
    }

    const userIndex = users.findIndex((u) => u.id === userId)

    if (userIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      )
    }

    // Update user (merge with existing data)
    users[userIndex] = {
      ...users[userIndex],
      ...body,
      id: userId, // Ensure ID doesn't change
    }

    return NextResponse.json(
      {
        success: true,
        data: users[userIndex],
        message: 'User updated successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request body' },
      { status: 400 }
    )
  }
}

/**
 * DELETE /api/users/[id]
 * Deletes a user by ID
 */
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const userId = parseInt(id)

  if (isNaN(userId)) {
    return NextResponse.json(
      { success: false, error: 'Invalid user ID' },
      { status: 400 }
    )
  }

  const userIndex = users.findIndex((u) => u.id === userId)

  if (userIndex === -1) {
    return NextResponse.json(
      { success: false, error: 'User not found' },
      { status: 404 }
    )
  }

  users.splice(userIndex, 1)

  return NextResponse.json(
    {
      success: true,
      message: 'User deleted successfully',
    },
    { status: 200 }
  )
}
