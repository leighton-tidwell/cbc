# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm install        # Install dependencies
npm run dev        # Start Vite dev server (port 5173/5174)
npm run build      # Build for production
npm run preview    # Preview production build
```

## Architecture Overview

This is a Single Page Application (SPA) for Calvary Baptist Church built with vanilla JavaScript and custom CSS modules.

### Core Architecture Pattern
- **Entry**: `index.html` → `src/main.js` → `src/app.js`
- **Routing**: Custom client-side router in `src/utils/router.js` handles page navigation without full reloads
- **Components**: HTML string templates in `src/components/` that are composed into pages
- **Pages**: Complete page renderers in `src/pages/` that combine multiple components
- **Styling**: Modular CSS architecture in `src/styles/` with a main orchestrator file

### Key Architectural Decisions

1. **No Framework**: Vanilla JavaScript with HTML string templates for simplicity
2. **GSAP Animations**: All animations use GSAP with ScrollTrigger for performance
3. **Component Pattern**: Each component exports a function returning an HTML string
4. **Event Delegation**: Router handles all navigation clicks centrally
5. **CSS Modules**: Separated by concern, imported via `src/styles/main.css`

### Critical Files to Understand

- `src/utils/router.js`: SPA navigation logic and history management
- `src/app.js`: Route registration and app initialization
- `src/utils/animations.js`: Centralized GSAP animations
- `src/styles/variables.css`: Design tokens and theming

### Asset Locations

- **Logo**: `src/assets/images/logo.png`
- **Church Interior**: `src/assets/images/location.jpg`
- **Stock Photos**: `src/assets/images/stock/`

### Mobile Considerations

- Transparent header on hero, solid on scroll
- Smaller logo on mobile (40px) with larger hero logo (150px)
- Hamburger menu with slide-in navigation
- All animations respect reduced motion preferences