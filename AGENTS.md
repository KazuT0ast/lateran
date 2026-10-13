<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Rules & Guidelines for AI Agent

## 1. STRICT BOUNDARIES (NEVER DO THESE)
- NEVER modify `package.json`, `package-lock.json`, `next.config.js`, `tsconfig.json`, or `tailwind.config.ts` unless I explicitly ask you to.
- NEVER run `npm install`, `npm uninstall`, or `npx` commands unless I explicitly tell you to.
- NEVER delete files or folders. If a file needs to be replaced, overwrite it or ask for permission first.
- NEVER change the routing structure (the `src/app` folder layout) without asking.

## 2. Tech Stack & Conventions
- **Framework:** Next.js 15 (App Router).
- **Language:** TypeScript.
- **Styling:** Tailwind CSS v4 (configured in `src/app/globals.css`).
- **Theming:** `next-themes` (Dark/Light mode).
- **Blog:** Markdown files in `src/content/blog/` using `gray-matter` and `react-markdown`.

## 3. React & TypeScript Rules
- Use Functional Components.
- Only add `"use client"` at the top of a file if it uses React hooks (`useState`, `useEffect`) or browser events (`onClick`). Default to Server Components.
- Keep components small and focused. 
- When writing TypeScript, use implicit typing where possible. If a type is too complex, use `any` rather than breaking the build.

## 4. Design System & "Cozy Indie" Vibe
- **Aesthetic:** Cozy, indie, personal workspace. NOT corporate SaaS.
- **Background:** We use a subtle dot grid pattern defined in `globals.css`. NEVER add floating blurred blobs, heavy gradients, or complex background animations.
- **Colors:** Use `zinc` for primary text and backgrounds (e.g., `text-zinc-900`, `bg-zinc-50`). Use `blue` for subtle accents (e.g., `text-blue-600`).
- **Shapes:** Use rounded corners (`rounded-xl`, `rounded-2xl`) to keep things soft.
- **Typography:** For any blog post or long-form text, ALWAYS wrap the content in a `<div className="prose prose-zinc dark:prose-invert">` to utilize the Tailwind Typography plugin. Do not manually style paragraphs inside blog posts.

## 5. Workflow
- Before making large changes, briefly explain your plan.
- Make changes in small, logical chunks.
- If you are unsure about a file's purpose, ask before modifying it.
- After making changes, try to see if it builds with no errors before handing it off.
