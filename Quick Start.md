# Quick Start Guide

Get your Next.js portfolio up and running in minutes!

## 🚀 Getting Started

### 1. Install Dependencies (Already Done!)
```bash
npm install
```
✅ **Status**: Complete!

### 2. Start Development Server
```bash
npm run dev
```

Then open your browser to [http://localhost:3000](http://localhost:3000)

## 📱 What You'll See

### Home Page (/)
- Hero section with gradient background
- Feature cards showcasing Next.js 16 concepts
- Powered by Turbopack and React 19.2
- Links to different sections

### About Page (/about)
- Demonstrates **Server-Side Rendering (SSR)**
- Lists all concepts covered in the project
- Technology stack information

### Projects Page (/projects)
- Demonstrates **Static Site Generation (SSG)** with **ISR**
- Shows revalidation timestamp
- Grid of project cards

### Blog (/blog)
- Blog post listing with **SSG**
- Click any post to see dynamic routes in action

### Blog Post (/blog/[slug])
- Demonstrates **Dynamic Routes**
- Each post has its own URL
- Try: /blog/getting-started-nextjs-16

### Contact Page (/contact)
- Demonstrates **Client Component** with React hooks
- Interactive form with loading states
- Uses useState for form management

### API Routes
Try these API endpoints in your browser or Postman:

- **GET** http://localhost:3000/api/hello
- **GET** http://localhost:3000/api/users
- **GET** http://localhost:3000/api/users/1
- **POST** http://localhost:3000/api/hello (with JSON body)

Example POST request:
```bash
curl -X POST http://localhost:3000/api/hello \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe"}'
```

## 🎓 Learning Path

### Day 1: Understand the Structure
1. Open `src/app/layout.tsx` - See how layouts work
2. Open `src/app/page.tsx` - Understand the home page
3. Look at `src/components/Header.tsx` - Server Component example

### Day 2: Explore Routing
1. Navigate through different pages
2. Check `src/app/about/page.tsx` - SSR example
3. Look at `src/app/projects/page.tsx` - ISR example
4. Explore `src/app/blog/[slug]/page.tsx` - Dynamic routes

### Day 3: Client vs Server
1. Compare `src/app/page.tsx` (Server) with `src/app/contact/page.tsx` (Client)
2. Notice the `'use client'` directive
3. Understand when to use each

### Day 4: API Development
1. Check `src/app/api/hello/route.ts`
2. Test with different HTTP methods
3. Create your own API route

### Day 5: Advanced Features

1. Look at `src/proxy.ts` - Request interception, redirects, auth guards, and bot protection
2. Check `src/app/loading.tsx` - Loading states
3. See `src/app/error.tsx` - Error boundaries

## 🔍 Code Exploration Tips

### Finding Key Concepts

**Server Components:**
- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`

**Client Components:**
- `src/app/contact/page.tsx` (has 'use client')

**Data Fetching:**
- `src/app/projects/page.tsx` (ISR with revalidate)
- `src/app/blog/page.tsx` (SSG)

**Dynamic Routes:**
- `src/app/blog/[slug]/page.tsx`
- `src/app/api/users/[id]/route.ts`

**API Routes:**
- `src/app/api/hello/route.ts`
- `src/app/api/users/route.ts`

**Special Files:**

- `src/proxy.ts` - Request proxy
- `src/app/loading.tsx` - Loading UI
- `src/app/error.tsx` - Error boundary
- `src/app/not-found.tsx` - 404 page

## 💡 Common Tasks

### Add a New Page
1. Create a folder in `src/app/`
2. Add a `page.tsx` file
3. Export a default component

Example:
```typescript
// src/app/services/page.tsx
export default function ServicesPage() {
  return <div>Services Page</div>
}
```

### Add a New API Route
1. Create a folder in `src/app/api/`
2. Add a `route.ts` file
3. Export HTTP method handlers

Example:
```typescript
// src/app/api/products/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ products: [] })
}
```

### Add a Client Component
1. Add `'use client'` at the top
2. Use React hooks as needed

Example:
```typescript
'use client'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
npx kill-port 3000
npm run dev
```

### TypeScript Errors
```bash
rm -rf .next
npm run dev
```

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Hot Reload Not Working
- Save the file again
- Restart the dev server
- Check for syntax errors

## 🚀 Next Steps

1. **Customize the Content**
   - Update text in pages
   - Add your own projects
   - Modify colors in `tailwind.config.ts`

2. **Add New Features**
   - Authentication with NextAuth.js
   - Database with Prisma
   - CMS integration

3. **Deploy**
   - Push to GitHub
   - Deploy on Vercel (easiest)
   - Or use Docker for self-hosting

## 📚 Deep Dive Resources

- Read all comments in the code - they explain every concept
- Check [README.md](README.md) for comprehensive documentation
- Visit [Next.js Docs](https://nextjs.org/docs)

## 🎯 Challenge Yourself

1. Add a new page with your own content
2. Create an API endpoint that returns data
3. Make a client component with a form
4. Add a dynamic route like `/products/[id]`
5. Implement loading and error states
6. Deploy to Vercel

---

**You're all set! Start exploring and learning! 🎉**

Powered by Next.js 16, Turbopack, and React 19.2

**Important:** Make sure you have Node.js 20.9.0+ installed.

Run `npm run dev` and visit http://localhost:3000
