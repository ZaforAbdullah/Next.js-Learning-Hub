import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Next.js 16 concepts and features with React 19 demonstrated in this portfolio',
}

export default async function AboutPage() {
  await new Promise((resolve) => setTimeout(resolve, 100))

  const concepts = [
    {
      category: 'Routing',
      items: [
        'File-based routing with App Router',
        'Nested layouts and templates',
        'Dynamic routes with [slug]',
        'Catch-all routes with [...slug]',
        'Route groups with (folder)',
        'Parallel routes with @folder',
      ],
    },
    {
      category: 'Rendering',
      items: [
        'Server Components (default)',
        'Client Components with "use client"',
        'Server-Side Rendering (SSR)',
        'Static Site Generation (SSG)',
        'Incremental Static Regeneration (ISR)',
        'Streaming with Suspense',
      ],
    },
    {
      category: 'Data Fetching',
      items: [
        'Server-side data fetching with fetch()',
        'Automatic request deduplication',
        'Caching and revalidation strategies',
        'Route Handlers (API routes)',
        'Server Actions for mutations',
        'Parallel and sequential data fetching',
      ],
    },
    {
      category: 'Optimization',
      items: [
        'Image optimization with next/image',
        'Font optimization with next/font',
        'Script optimization with next/script',
        'Automatic code splitting',
        'Bundle size optimization',
        'Lazy loading and dynamic imports',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-purple-50">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-6 text-center">
            About This Project
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            A comprehensive learning resource that demonstrates all major Next.js 16 concepts
            with React 19, detailed comments and real-world examples.
          </p>
        </div>
      </section>

      {/* Concepts Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Concepts Covered
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {concepts.map((section) => (
              <div key={section.category} className="card">
                <h3 className="text-2xl font-semibold mb-4 text-primary-600">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Technology Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Next.js 16', description: 'React Framework' },
              { name: 'React 19', description: 'UI Library' },
              { name: 'TypeScript', description: 'Type Safety' },
              { name: 'Tailwind CSS', description: 'Styling' },
              { name: 'Docker', description: 'Containerization' },
              { name: 'ESLint', description: 'Code Quality' },
              { name: 'PostCSS', description: 'CSS Processing' },
              { name: 'React Icons', description: 'Icon Library' },
            ].map((tech) => (
              <div
                key={tech.name}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-lg mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Learning Resources
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                title: 'Next.js Documentation',
                url: 'https://nextjs.org/docs',
                description: 'Official Next.js documentation',
              },
              {
                title: 'React Documentation',
                url: 'https://react.dev',
                description: 'Learn React fundamentals',
              },
              {
                title: 'TypeScript Handbook',
                url: 'https://www.typescriptlang.org/docs/',
                description: 'Master TypeScript',
              },
              {
                title: 'Tailwind CSS Docs',
                url: 'https://tailwindcss.com/docs',
                description: 'Utility-first CSS framework',
              },
            ].map((resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-primary-500 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
