import type { Metadata } from 'next'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore various Next.js projects and examples',
}

// Type definition for a project
interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  image: string
}

async function getProjects(): Promise<Project[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))

  return [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with cart, checkout, and payment integration. Demonstrates complex state management and API integration.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
    },
    {
      id: 2,
      title: 'Blog CMS',
      description:
        'Content management system for blogs with markdown support, tags, and search functionality. Shows SSG and ISR in action.',
      technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'SQLite'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800',
    },
    {
      id: 3,
      title: 'Real-time Chat App',
      description:
        'WebSocket-based chat application with rooms, private messages, and online status. Demonstrates real-time features.',
      technologies: ['Next.js', 'Socket.io', 'Redis', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800',
    },
    {
      id: 4,
      title: 'Task Management Dashboard',
      description:
        'Kanban-style task board with drag-and-drop, team collaboration, and analytics. Shows complex client-side interactions.',
      technologies: ['Next.js', 'React DnD', 'Chart.js', 'MongoDB'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description:
        'Beautiful weather app with forecasts, maps, and location-based data. Demonstrates external API integration.',
      technologies: ['Next.js', 'OpenWeather API', 'Mapbox', 'Chart.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800',
    },
    {
      id: 6,
      title: 'Authentication System',
      description:
        'Complete auth solution with JWT, OAuth, 2FA, and role-based access control. Shows secure authentication patterns.',
      technologies: ['Next.js', 'NextAuth.js', 'Prisma', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
    },
  ]
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  // Next.js 16: For static pages, we show build time rather than current time
  // To show current time, you need to access dynamic data like headers() first
  const buildInfo = "Build Time (Static Generation)"

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-purple-50">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-6 text-center">Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Explore various projects built with Next.js showcasing different features and use cases.
          </p>
          <p className="text-sm text-gray-500 text-center mt-4">
            {buildInfo}
            <br />
            <span className="text-xs">(Demonstrating SSG - Static Site Generation with Next.js 16)</span>
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article key={project.id} className="card overflow-hidden p-0">
                <div className="h-48 bg-gradient-to-br from-primary-400 to-purple-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                    {project.id}
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <h3 className="text-xl font-semibold mb-2 text-blue-900">
              💡 How This Page Works (Next.js 16)
            </h3>
            <div className="text-blue-800 space-y-2">
              <p>
                This page demonstrates <strong>Static Site Generation (SSG)</strong> with{' '}
                <strong>Next.js 16's Cache Components</strong>:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Page is pre-rendered at build time for optimal performance</li>
                <li>Built with Turbopack for 2-5x faster builds</li>
                <li>Users get instant page loads from CDN</li>
                <li>Next.js 16 uses explicit caching with "use cache" directive</li>
                <li>More predictable and controllable caching behavior</li>
              </ul>
              <p className="mt-4">
                <strong>Note:</strong> In Next.js 16 with <code className="bg-blue-100 px-2 py-1 rounded">cacheComponents</code> enabled,
                the old <code className="bg-blue-100 px-2 py-1 rounded">revalidate</code> export is not compatible.
                Use <code className="bg-blue-100 px-2 py-1 rounded">"use cache"</code> directive for granular caching control.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
