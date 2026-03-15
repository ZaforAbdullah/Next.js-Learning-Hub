import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-purple-50 px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gradient mb-4 animate-fade-in">
            404
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved,
          deleted, or never existed in the first place.
        </p>

        <div className="space-y-4 mb-8">
          <p className="text-gray-700 font-medium">
            Here are some helpful links instead:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Go Home
            </Link>
            <Link href="/projects" className="btn-secondary">
              View Projects
            </Link>
            <Link href="/blog" className="btn-secondary">
              Read Blog
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          <Link
            href="/about"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-semibold mb-1">Learn More</h3>
            <p className="text-sm text-gray-600">About Next.js concepts</p>
          </Link>
          <Link
            href="/projects"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="font-semibold mb-1">Projects</h3>
            <p className="text-sm text-gray-600">View example projects</p>
          </Link>
          <Link
            href="/contact"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-2">✉️</div>
            <h3 className="font-semibold mb-1">Contact</h3>
            <p className="text-sm text-gray-600">Get in touch with us</p>
          </Link>
        </div>

        {/* Info */}
        <div className="mt-12 bg-white/80 backdrop-blur border border-white/20 p-6 rounded-lg text-left">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">
            💡 How 404 Pages Work in Next.js
          </h3>
          <p className="text-gray-700 text-sm">
            This custom 404 page is defined in <code className="bg-gray-100 px-2 py-1 rounded">not-found.tsx</code>.
            It's automatically shown when a route doesn't exist or when the{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">notFound()</code> function is called.
            You can create segment-specific 404 pages by adding{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">not-found.tsx</code> in any route folder.
          </p>
        </div>
      </div>
    </div>
  )
}
