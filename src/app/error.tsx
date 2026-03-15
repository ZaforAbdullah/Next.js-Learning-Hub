'use client' // Error components must be Client Components

import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error caught by error boundary:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-red-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Oops! Something went wrong
        </h1>

        <p className="text-gray-600 mb-2">
          We encountered an unexpected error while processing your request.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <div className="my-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <p className="text-sm font-mono text-red-800 break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-red-600 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={reset}
            className="btn-primary"
          >
            Try Again
          </button>
          <a
            href="/"
            className="btn-secondary"
          >
            Go Home
          </a>
        </div>
        {/* Info box */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-4 rounded text-left">
          <h3 className="text-sm font-semibold mb-1 text-blue-900">
            💡 About Error Boundaries
          </h3>
          <p className="text-sm text-blue-800">
            This error was caught by an Error Boundary. Error boundaries catch runtime
            errors in Server Components and provide a fallback UI. The reset() function
            attempts to re-render the error boundary's contents.
          </p>
        </div>
      </div>
    </div>
  )
}
