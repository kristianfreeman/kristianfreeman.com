# CLAUDE.md - Coding Assistant Guidelines

## Commands

- **Build**: `npm run build` (Runs typecheck & builds site)
- **Dev**: `npm run dev` (Runs Caddy + Astro dev server)
- **Typecheck**: `astro check` or `npm run check`
- **Preview**: `npm run preview` (Preview production build)
- **Deploy**: `npm run deploy` (Build + deploy with Wrangler)

## Code Style Guidelines

- **TypeScript**: Use strict type checking with explicit return types
- **Imports**: Use path aliases (`@/*`) for src directory imports
- **Component Structure**: Follow Astro component patterns with React where needed
- **Error Handling**: Use proper error boundaries and TypeScript guards
- **Naming**: Use camelCase for variables/functions, PascalCase for components
- **Styling**: Use Tailwind utility classes with composition via clsx/cva
- **File Organization**: Follow Astro convention (pages, layouts, components)
- **MDX**: Use Astro's content collections for structured content
- **Formatting**: Maintain consistent indentation (2 spaces) and line breaks