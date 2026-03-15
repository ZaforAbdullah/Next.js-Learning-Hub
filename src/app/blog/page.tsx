import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read articles about Next.js, React, and web development',
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime: string
}

async function getBlogPosts(): Promise<BlogPost[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))

  return [
    {
      slug: 'getting-started-nextjs-16',
      title: 'Getting Started with Next.js 16',
      excerpt:
        'Learn the fundamentals of Next.js 16 with React 19, including the App Router, Server Components, and new features that make building React applications easier than ever.',
      date: '2024-01-16',
      author: 'John Doe',
      category: 'Tutorial',
      readTime: '8 min read',
    },
    {
      slug: 'server-components-explained',
      title: 'React Server Components Explained',
      excerpt:
        'Deep dive into React Server Components: what they are, why they matter, and how to use them effectively in your Next.js applications.',
      date: '2024-01-20',
      author: 'Jane Smith',
      category: 'Technical',
      readTime: '12 min read',
    },
    {
      slug: 'data-fetching-strategies',
      title: 'Data Fetching Strategies in Next.js',
      excerpt:
        'Explore different data fetching patterns in Next.js: SSR, SSG, ISR, and Streaming. Learn when to use each strategy for optimal performance.',
      date: '2024-01-25',
      author: 'John Doe',
      category: 'Tutorial',
      readTime: '10 min read',
    },
    {
      slug: 'building-api-routes',
      title: 'Building API Routes with Route Handlers',
      excerpt:
        'Create powerful RESTful APIs using Next.js Route Handlers. Learn about request handling, response formatting, and best practices.',
      date: '2024-02-01',
      author: 'Jane Smith',
      category: 'Tutorial',
      readTime: '7 min read',
    },
    {
      slug: 'optimizing-images',
      title: 'Image Optimization in Next.js',
      excerpt:
        'Master the Next.js Image component for automatic image optimization, responsive images, and better Core Web Vitals scores.',
      date: '2024-02-05',
      author: 'John Doe',
      category: 'Performance',
      readTime: '6 min read',
    },
  ]
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-purple-50">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-6 text-center">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Articles about Next.js, React, TypeScript, and modern web development best practices.
          </p>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block"
              >
                <article className="card hover:scale-[1.02] transition-transform duration-200">
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 text-gray-900 hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>•</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
