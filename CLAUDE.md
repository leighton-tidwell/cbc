# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm install        # Install dependencies
npm run dev        # Start Next.js dev server with Turbopack
npm run build      # Build for production
npm start          # Start production server (after build)
npm run lint       # Run Next.js linter
npm run format     # Format code with Prettier
npm run format:check # Check code formatting without modifying files
```

## Architecture Overview

This is a Next.js 15 application for Calvary Baptist Church using the App Router pattern with React 19.

### Core Architecture Pattern

- **Framework**: Next.js 15.1.8 with App Router
- **UI**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: GSAP with ScrollTrigger
- **Analytics**: Vercel Analytics and Speed Insights

### Key Architectural Decisions

1. **App Router**: Server components by default, client components only when needed (e.g., for animations)
2. **Component Pattern**: TypeScript functional components in `components/`
3. **Routing**: Next.js App Router handles all navigation via `app/` directory structure
4. **Styling**: Tailwind CSS utility classes with custom configuration
5. **Font System**: Inter (primary) and Playfair Display (headings) via next/font

### Critical Files to Understand

- `app/layout.tsx`: Root layout with font configuration and analytics
- `hooks/useGsapAnimations.ts`: Centralized GSAP animation hook
- `tailwind.config.ts`: Design tokens and theme configuration
- `components/Hero.tsx`: Example of client component with animations

### Asset Locations

- **Logo**: `public/images/logo.png` and `public/images/logo_2.png`
- **Church Interior**: `public/images/location.jpg`
- **Stock Photos**: `public/images/stock/`

### Mobile Considerations

- Transparent header on hero, solid on scroll
- Smaller logo on mobile (40px) with larger hero logo (150px)
- Hamburger menu with slide-in navigation
- All animations respect reduced motion preferences

### Development Guidelines

- All files should be under 200 lines
- Prioritize making server components, isolate client reactivity to the lowest level
- Use TypeScript for all new components
- Follow existing Tailwind patterns for consistency
- Test on mobile devices - responsive design is critical