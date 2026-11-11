# Trevor's Home Solutions: landing page

Next.js 16 (App Router) + Tailwind CSS v4 + GSAP/ScrollTrigger + Lenis + three.js.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

- Business details and copy live in `src/lib/data.ts`.
- Brand colors and light/dark tokens live in `src/app/globals.css`.
- Photos are in `public/images`, the logo is `public/logo.jpg`.
- The quote form opens the visitor's email app (mailto). Swap `onSubmit` in `src/components/Contact.tsx` for an API route if you want server-side delivery.
