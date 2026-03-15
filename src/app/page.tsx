import Link from 'next/link'
import { FaReact, FaServer, FaRocket, FaCode } from 'react-icons/fa'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-purple-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to{' '}
              <span className="text-gradient">Next.js 16</span>
              {' '}Learning Hub
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up">
              A comprehensive portfolio showcasing all major Next.js 16 concepts with React 19:
              App Router, Server Components, SSR, SSG, ISR, API Routes, and more!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">
            Next.js Concepts Demonstrated
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-100 rounded-full">
                  <FaReact className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Server Components</h3>
              <p className="text-gray-600">
                React Server Components for better performance and smaller bundle sizes
              </p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 rounded-full">
                  <FaServer className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">API Routes</h3>
              <p className="text-gray-600">
                Built-in API endpoints with Route Handlers for serverless functions
              </p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-purple-100 rounded-full">
                  <FaRocket className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">SSR, SSG & ISR</h3>
              <p className="text-gray-600">
                Multiple rendering strategies for optimal performance and SEO
              </p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-orange-100 rounded-full">
                  <FaCode className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">TypeScript</h3>
              <p className="text-gray-600">
                Full TypeScript support with type-safe components and APIs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concepts Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">
            What You'll Learn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'App Router Architecture',
                description: 'New file-based routing with layouts, loading states, and error boundaries',
                link: '/about',
              },
              {
                title: 'Server & Client Components',
                description: 'Understanding when to use server vs client components',
                link: '/projects',
              },
              {
                title: 'Data Fetching Patterns',
                description: 'SSR, SSG, ISR, and streaming with Suspense',
                link: '/blog',
              },
              {
                title: 'Dynamic Routes',
                description: 'URL parameters, catch-all routes, and parallel routes',
                link: '/projects',
              },
              {
                title: 'API Route Handlers',
                description: 'RESTful APIs with GET, POST, PUT, DELETE methods',
                link: '/api/hello',
              },
              {
                title: 'Proxy',
                description: 'Request interception, redirects, auth guards, and geo routing',
                link: '/about',
              },
            ].map((concept, index) => (
              <Link
                key={index}
                href={concept.link}
                className="block p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-primary-500 transition-colors duration-200"
              >
                <h3 className="text-xl font-semibold mb-2 text-primary-600">
                  {concept.title}
                </h3>
                <p className="text-gray-600">{concept.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Explore?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dive into the code, check out the examples, and learn Next.js 16 through hands-on practice!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Browse Projects
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
