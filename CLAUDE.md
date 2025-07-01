# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website for Social Enterprise Ethiopia (SEE), a not-for-profit membership organization serving as Ethiopia's national body for social enterprises. The website is built with Next.js 15 using the App Router architecture.

## Development Commands

**Start development server:**

```bash
pnpm dev
```

**Build for production:**

```bash
pnpm build
```

**Start production server:**

```bash
pnpm start
```

**Run linting:**

```bash
pnpm lint
```

**Code formatting:**  
Prettier is configured with Tailwind CSS plugin. Format files manually with your editor or IDE.

## Architecture

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS v4 with custom theme variables
- **Icons:** Lucide React for all icons
- **Package Manager:** pnpm with workspace configuration
- **Font:** Raleway from Google Fonts
- **TypeScript:** Strict mode enabled with path aliases (`@/*` → `./src/*`)

## File Structure

```
src/
├── app/           # Next.js App Router pages and layouts
├── styles/        # Global CSS and Tailwind configuration
```

## Styling System

Custom CSS properties are defined in `src/styles/base.css`:

- `--color-background: #ffffff`
- `--color-foreground: #000000`
- `--color-primary: #163149`

Use Tailwind classes like `bg-background`, `text-foreground`, and `text-primary` to reference these colors.

## Key Configuration

- TypeScript paths configured for `@/*` imports
- Prettier configured with Tailwind plugin and semicolon-free style
- ESLint with Next.js configuration
- pnpm workspace with specific built dependencies for Tailwind CSS optimization

## Development Guidelines

- **Links:** Always use `next/link` instead of `<a>` tags for internal navigation
- **Images:** Always use `next/image` instead of `<img>` tags for optimized image loading
- **Icons:** Use Lucide React icons for consistent iconography
