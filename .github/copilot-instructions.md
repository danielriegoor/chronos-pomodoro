# Chronos Pomodoro - AI Agent Instructions

## Project Overview
This is a Pomodoro timer application built with React + TypeScript + Vite. The project uses a modular component architecture with CSS modules for styling.

## Key Architecture Patterns

### Component Structure
- Components follow PascalCase naming convention (`Container`, `Logo`, `Menu`)
- Each component is organized in its own directory under `src/components/` with:
  - `index.tsx` for component logic
  - `styles.module.css` for scoped styles
- Example: `src/components/Container/index.tsx` and its styles

### Styling System
- CSS Variables defined in `src/styles/theme.css` for consistent theming
- Global styles in `src/styles/global.css`
- Color palette uses semantic naming (e.g., `--primary`, `--text-default`)
- Base font size uses rem units (1.6rem = 16px) for responsive scaling

### Project Commands
```bash
# Development server with HMR
npm run dev

# Production build
npm run build

# Code linting
npm run lint

# Preview production build
npm run preview
```

### TypeScript Configuration
- Uses strict type checking with separate configs:
  - `tsconfig.app.json` for application code
  - `tsconfig.node.json` for build configuration

### ESLint Setup
- Type-aware linting enabled
- React-specific rules from `eslint-plugin-react-x` and `eslint-plugin-react-dom`
- Uses flat config format in `eslint.config.js`

## Best Practices
1. Follow component isolation pattern - each component in its own directory with styles
2. Use CSS variables from theme.css for colors and design tokens
3. Maintain type safety - avoid `any` types
4. Use CSS Modules for component-scoped styles

## Common Tasks
- Adding a new component:
  1. Create directory under `src/components/`
  2. Add `index.tsx` and `styles.module.css`
  3. Export component using named export
- Modifying theme:
  1. Update variables in `src/styles/theme.css`
  2. Use new variables in component styles

## Integration Points
- Icons from `lucide-react` library
- React v19 features and patterns
- Vite for build tooling with SWC for Fast Refresh