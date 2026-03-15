# Next.js 16 Portfolio - Complete Learning Hub

**[Live Demo](https://your-project.vercel.app)** — deployed on Vercel

A comprehensive Next.js 16 portfolio application with Turbopack, React 19.2, and all major concepts including App Router, Server Components, SSR, SSG, ISR, API Routes, Proxy, and more. Built with TypeScript, Tailwind CSS, and Docker for production deployment.

## 🚀 Features

### Core Next.js 16 Concepts

- **App Router Architecture** - File-based routing with layouts and nested routes
- **Server Components** - Default server-side rendering for better performance
- **Client Components** - Interactive components with React hooks
- **Server-Side Rendering (SSR)** - Dynamic pages rendered on each request
- **Static Site Generation (SSG)** - Pre-rendered pages at build time
- **Incremental Static Regeneration (ISR)** - Automatic page regeneration
- **Dynamic Routes** - URL parameters with `[slug]` syntax
- **API Route Handlers** - Built-in API endpoints
- **Proxy** - Request interception, authentication, and redirects
- **Loading States** - Instant loading UI with Suspense
- **Error Boundaries** - Graceful error handling
- **Custom 404 Pages** - Beautiful not-found pages

### UI/UX Features

- **Turbopack Bundler** - 2-5x faster builds, 10x faster Fast Refresh (default in Next.js 16)
- **React 19.2 Support** - Latest React features including View Transitions
- **Cache Components** - Explicit caching with "use cache" directive
- **Modern Portfolio Design** - Clean, professional interface
- **Responsive Layout** - Mobile-first design with Tailwind CSS
- **Dark Mode Ready** - Prepared for theme switching
- **Smooth Animations** - CSS animations and transitions
- **Form Handling** - Client-side form with validation
- **SEO Optimized** - Meta tags and Open Graph support

### Development Features

- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling
- **ESLint** - Code quality enforcement
- **Docker Support** - Production-ready containerization
- **Hot Reload** - Fast development experience

## 📁 Project Structure

```
nextjs-portfolio/
├── src/
│   ├── app/                      # App Router directory
│   │   ├── layout.tsx           # Root layout (required)
│   │   ├── page.tsx             # Home page (/)
│   │   ├── loading.tsx          # Root loading UI
│   │   ├── error.tsx            # Root error boundary
│   │   ├── not-found.tsx        # Custom 404 page
│   │   ├── globals.css          # Global styles
│   │   │
│   │   ├── about/               # About page route
│   │   │   └── page.tsx         # /about
│   │   │
│   │   ├── projects/            # Projects route (ISR demo)
│   │   │   └── page.tsx         # /projects
│   │   │
│   │   ├── blog/                # Blog routes
│   │   │   ├── page.tsx         # /blog (list)
│   │   │   ├── loading.tsx      # Blog loading state
│   │   │   └── [slug]/          # Dynamic routes
│   │   │       └── page.tsx     # /blog/[slug]
│   │   │
│   │   ├── contact/             # Contact page (Client Component)
│   │   │   └── page.tsx         # /contact
│   │   │
│   │   └── api/                 # API Routes
│   │       ├── hello/
│   │       │   └── route.ts     # /api/hello
│   │       └── users/
│   │           ├── route.ts     # /api/users
│   │           └── [id]/
│   │               └── route.ts # /api/users/[id]
│   │
│   ├── proxy.ts                 # Proxy — runs before every matched request
│   └── components/              # Reusable components
│       ├── Header.tsx           # Navigation header
│       └── Footer.tsx           # Site footer
│
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
├── package.json                # Dependencies
├── Dockerfile                  # Docker production build
├── docker-compose.yml          # Docker Compose config
└── README.md                   # Documentation

```

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js 20.9.0+**
- npm or yarn
- Docker (optional, for containerized deployment)
- **Browser:** Chrome/Edge/Firefox 111+, Safari 16.4+

### Local Development

1. **Clone or navigate to the project directory:**
   ```bash
   cd nextjs-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🐳 Docker Deployment

### Using Docker

```bash
# Build the Docker image
docker build -t nextjs-portfolio .

# Run the container
docker run -p 3000:3000 nextjs-portfolio
```

### Using Docker Compose

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

Access the application at [http://localhost:3000](http://localhost:3000)

## 📚 Learning Guide

### Routing Concepts

#### Pages and Layouts
- `page.tsx` - Creates a unique route
- `layout.tsx` - Wraps multiple pages with shared UI
- Layouts persist across navigation

**Example:**
```
app/
├── layout.tsx          → Root layout for all pages
├── page.tsx            → Homepage (/)
└── about/
    └── page.tsx        → About page (/about)
```

#### Dynamic Routes
Use `[param]` syntax for dynamic segments:

```typescript
// app/blog/[slug]/page.tsx
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <div>Post: {slug}</div>
}
```

### Rendering Strategies

#### Server Components (Default)
```typescript
// This is a Server Component by default
export default async function Page() {
  const data = await fetchData() // Runs on server
  return <div>{data}</div>
}
```

#### Client Components
```typescript
'use client' // This directive makes it a Client Component

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

#### SSG with ISR
```typescript
// app/projects/page.tsx
export const revalidate = 60 // Revalidate every 60 seconds

export default async function Projects() {
  const projects = await getProjects()
  return <div>{/* render projects */}</div>
}
```

### Data Fetching

#### Server-side Fetching
```typescript
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'force-cache' // SSG
    // cache: 'no-store'  // SSR
    // next: { revalidate: 3600 } // ISR
  })
  return res.json()
}
```

### API Routes (Route Handlers)

```typescript
// app/api/hello/route.ts
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  return NextResponse.json({ message: 'Hello' })
}

export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({ received: body })
}
```

### Proxy

> **Placement:** With a `src/` layout, the file must be at `src/proxy.ts` — not the project root. Placing it at the wrong level causes it to be silently ignored.

```typescript
// src/proxy.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  // Add custom header
  const response = NextResponse.next()
  response.headers.set('x-custom-header', 'value')
  return response
}

export const config = {
  matcher: '/api/:path*'
}
```

### Testing proxy.ts Locally

Start the dev server first: `npm run dev`

```bash
# Example 1 — logging (check terminal output for [Proxy] logs)
curl -s http://localhost:3000/about

# Example 2 — redirect /old-blog → /blog
curl -I http://localhost:3000/old-blog
# Expect: HTTP/1.1 307, Location: http://localhost:3000/blog

# Example 3 — auth guard (no cookie → redirect to /login)
curl -I http://localhost:3000/admin
# Expect: HTTP/1.1 307, Location: .../login?from=%2Fadmin

# Example 3 — auth guard (with cookie → passes through)
curl -I http://localhost:3000/admin --cookie "auth-token=abc123"
# Expect: HTTP/1.1 200

# Example 4 — rate limit headers on API routes
curl -I http://localhost:3000/api/hello
# Expect: X-RateLimit-Limit: 100, X-RateLimit-Remaining: 99

# Example 5 — A/B test cookie set on homepage
curl -I http://localhost:3000/
# Expect: set-cookie: ab-test-variant=a (or b)

# Example 6 — rewrite /hidden → serves /about
curl http://localhost:3000/hidden
# Expect: 200 with /about page content

# Example 7 — bot blocking
curl -I http://localhost:3000/about -H "User-Agent: BadBot/1.0"
# Expect: HTTP/1.1 403
```

## 🎨 Styling with Tailwind CSS

### Utility Classes
```tsx
<div className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
  Button
</div>
```

### Custom Components (globals.css)
```css
@layer components {
  .btn-primary {
    @apply bg-primary-600 text-white px-6 py-3 rounded-lg
           hover:bg-primary-700 transition-colors;
  }
}
```

## 🔧 Configuration Files

### next.config.js
```javascript
module.exports = {
  reactStrictMode: true,
  output: 'standalone',  // For Docker
  images: {
    remotePatterns: [/* ... */]
  }
}
```

### tailwind.config.ts
```typescript
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {/* custom colors */}
      }
    }
  }
}
```

## 📖 Key Files Explained

| File | Purpose |
|------|---------|
| `layout.tsx` | Shared UI wrapper for pages |
| `page.tsx` | Unique route content |
| `loading.tsx` | Loading UI (Suspense boundary) |
| `error.tsx` | Error boundary fallback |
| `not-found.tsx` | Custom 404 page |
| `route.ts` | API endpoint handler |
| `src/proxy.ts` | Request/response interceptor (Next.js 16+) |

## 🌐 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
# Add your variables here
```

**Important:**
- `NEXT_PUBLIC_*` variables are exposed to the browser
- Other variables are server-only

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy!

### Docker
```bash
docker build -t nextjs-app .
docker run -p 3000:3000 nextjs-app
```

### Traditional Hosting
```bash
npm run build
npm start
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 🎯 Best Practices

1. **Server Components by default** - Use Client Components only when needed
2. **Fetch data at the highest level** - Avoid waterfalls
3. **Use TypeScript** - Better developer experience
4. **Optimize images** - Use `next/image` component
5. **Configure metadata** - Better SEO
6. **Handle errors gracefully** - Use error boundaries
7. **Show loading states** - Better UX
8. **Use proxy wisely** - Avoid heavy computations in `src/proxy.ts`

## 🔍 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Clear Next.js cache
```bash
rm -rf .next
npm run dev
```

### TypeScript errors
```bash
npm run build
# Fix reported issues
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Docker Documentation](https://docs.docker.com/)

## 🤝 Contributing

This is a learning project. Feel free to:
- Fork the repository
- Add more examples
- Improve documentation
- Share your learnings

## 📄 License

This project is for educational purposes. Feel free to use it for learning!

## ⭐ Concepts Checklist

- [x] App Router
- [x] Server Components
- [x] Client Components
- [x] SSR (Server-Side Rendering)
- [x] SSG (Static Site Generation)
- [x] ISR (Incremental Static Regeneration)
- [x] Dynamic Routes
- [x] API Route Handlers
- [x] Proxy
- [x] Loading States
- [x] Error Boundaries
- [x] Not Found Pages
- [x] Layouts
- [x] TypeScript
- [x] Tailwind CSS
- [x] Docker Deployment
- [x] Metadata API
- [x] Form Handling

## 🎓 Learning Path

1. **Start with basics**: Understand App Router and file structure
2. **Explore routing**: Create pages and nested routes
3. **Learn rendering**: Understand Server vs Client Components
4. **Add interactivity**: Build forms and interactive features
5. **Data fetching**: Practice SSR, SSG, and ISR
6. **Build APIs**: Create Route Handlers
7. **Add proxy**: Implement authentication logic with `proxy.ts`
8. **Handle errors**: Add error boundaries and loading states
9. **Style it**: Apply Tailwind CSS
10. **Deploy**: Use Docker or Vercel

---

**Happy Learning! 🚀**

Built with ❤️ using Next.js 16, Turbopack, and React 19.2

**Note:** Next.js 16 requires Node.js 20.9.0 or higher. If you're on Node.js 18, please upgrade first.
