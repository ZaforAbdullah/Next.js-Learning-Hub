import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { BlogPost } from '../page'

export async function generateStaticParams() {
  const posts = await getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

async function getBlogPosts(): Promise<BlogPost[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))

  return [
    {
      slug: 'getting-started-nextjs-16',
      title: 'Getting Started with Next.js 16',
      excerpt:
        'Learn the fundamentals of Next.js 16 with React 19, including the App Router, Server Components, and new features.',
      date: '2024-01-16',
      author: 'John Doe',
      category: 'Tutorial',
      readTime: '8 min read',
    },
    {
      slug: 'server-components-explained',
      title: 'React Server Components Explained',
      excerpt:
        'Deep dive into React Server Components: what they are, why they matter, and how to use them effectively.',
      date: '2024-01-20',
      author: 'Jane Smith',
      category: 'Technical',
      readTime: '12 min read',
    },
    {
      slug: 'data-fetching-strategies',
      title: 'Data Fetching Strategies in Next.js',
      excerpt:
        'Explore different data fetching patterns in Next.js: SSR, SSG, ISR, and Streaming.',
      date: '2024-01-25',
      author: 'John Doe',
      category: 'Tutorial',
      readTime: '10 min read',
    },
    {
      slug: 'building-api-routes',
      title: 'Building API Routes with Route Handlers',
      excerpt:
        'Create powerful RESTful APIs using Next.js Route Handlers. Learn about request handling and best practices.',
      date: '2024-02-01',
      author: 'Jane Smith',
      category: 'Tutorial',
      readTime: '7 min read',
    },
    {
      slug: 'optimizing-images',
      title: 'Image Optimization in Next.js',
      excerpt:
        'Master the Next.js Image component for automatic image optimization and better performance.',
      date: '2024-02-05',
      author: 'John Doe',
      category: 'Performance',
      readTime: '6 min read',
    },
  ]
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <header className="section-padding bg-gradient-to-br from-primary-50 to-purple-50">
        <div className="container-custom max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <Link
              href="/blog"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Back to Blog
            </Link>
          </nav>

          <div className="mb-4">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <span className="font-medium">{post.author}</span>
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
        </div>
      </header>

      {/* Article Content */}
      <article className="section-padding">
        <div className="container-custom max-w-3xl prose prose-lg">
          <p className="lead text-xl text-gray-600 mb-8">{post.excerpt}</p>

          <h2 className="text-3xl font-bold mt-12 mb-4">Introduction</h2>
          <p>
            This is a demonstration of a dynamic blog post page in Next.js 16. In a real
            application, this content would come from a CMS, database, or markdown files.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">Key Concepts</h2>
          <p>
            This page demonstrates several important Next.js concepts:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dynamic routing with [slug] syntax</li>
            <li>Static generation with generateStaticParams</li>
            <li>Dynamic metadata generation</li>
            <li>404 handling with notFound()</li>
            <li>Server-side data fetching</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">How It Works</h2>
          <p>
            When you build your Next.js app, generateStaticParams pre-renders all blog post
            pages as static HTML. This provides excellent performance and SEO benefits while
            still allowing for dynamic content.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="text-xl font-semibold mb-2">💡 Pro Tip</h3>
            <p className="text-gray-700">
              You can combine generateStaticParams with ISR (revalidate) to get both static
              generation and fresh content. Set a revalidate value to automatically regenerate
              pages in the background.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">Conclusion</h2>
          <p>
            Dynamic routes in Next.js provide a powerful way to create scalable applications
            with great performance. By pre-generating pages at build time, you get instant
            page loads and excellent SEO.
          </p>
        </div>
      </article>

      {/* Related Posts Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog" className="card hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-primary-600">
                View All Posts
              </h3>
              <p className="text-gray-600">
                Explore more articles about Next.js and web development
              </p>
            </Link>
            <Link href="/" className="card hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-primary-600">
                Back to Home
              </h3>
              <p className="text-gray-600">
                Return to the homepage to explore other features
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
