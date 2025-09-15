# GitHub Copilot Instructions for React Components Demo

This file provides context and guidelines for GitHub Copilot when working on this React TypeScript components showcase project.

## Project Overview

UI Components Showcase is a demo web app built with React, TypeScript, SCSS, GSAP, and Vite, featuring reusable UI components including charts, forms, calculators, and interactive widgets. The project emphasizes clean architecture, type safety, and modern React patterns.

## Technology Stack

- **Frontend**: React 18.2 with TypeScript
- **Build Tool**: Vite 5.2
- **Styling**: SCSS with component-scoped styles
- **Animation**: GSAP 3.12.5 with @gsap/react for animations and transitions
- **Charts**: ApexCharts with react-apexcharts for data visualization
- **Routing**: React Router DOM 7.0.1
- **Notifications**: React-Toastify 10.0.6
- **Linting**: ESLint with TypeScript support

## Project Structure & Patterns

### Directory Organization
```
src/
├── components/           # Component library (each in own folder)
├── data/                # Static data and mock APIs
├── types/               # TypeScript type definitions
├── utils/               # Utility functions and components
├── styles/              # Global SCSS variables and mixins
├── assets/              # Static assets
└── hooks/               # Custom React hooks (future)
```

### Component Architecture

**Component Folder Structure** (Follow this pattern):
```
ComponentName/
├── ComponentName.tsx    # Main component file
├── ComponentName.scss   # Component-specific styles
└── index.ts            # Named export barrel file
```

**Component Export Pattern**:
```typescript
// ComponentName.tsx
export const ComponentName = () => { /* ... */ };

// index.ts
import { ComponentName } from "./ComponentName";
export { ComponentName };
```

### TypeScript Conventions

**Interface Naming**:
- Component props: `ComponentNameProps`
- Data models: Descriptive names like `Product`, `Todo`, `Feature`
- Generic interfaces: Use domain-specific names

**Type Definitions Location**:
- Domain types: `src/types/` (e.g., `product.types.ts`)
- Component-specific types: Define in component file
- Utility types: In respective utility files

**Example Type Pattern**:
```typescript
// src/types/product.types.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
}
```

### SCSS Styling Patterns

**Import Order in Component SCSS**:
```scss
@import "../../styles/variables";  // Always import variables first
@import "../../styles/mixins";     // Then mixins if needed

.component-name {
  // Component styles
}
```

**Global Variables** (`src/styles/_variables.scss`):
```scss
$primary-color: #3188c2;
$secondary-color: #2ecc71;
$react-blue: #61dbfb;
$font-stack: "Arial", sans-serif;
$border-radius: 8px;
```

**Mixins Usage** (`src/styles/_mixins.scss`):
```scss
@include box-shadow(0, 2px, 5px, rgba(0, 0, 0, 0.1));
@include transition(all, 0.3s);
```

**CSS Class Naming**:
- Use kebab-case for CSS classes
- Component root class matches component name in kebab-case
- BEM methodology for complex components (see FeatureVoteWidget)

### Data Management Patterns

**Static Data Structure**:
```
src/data/
├── products.json        # Raw JSON data
└── products.ts         # Data utilities and helpers
```

**Data Utility Pattern**:
```typescript
// src/data/products.ts
import productsData from './products.json';
import { Product, ProductsResponse } from '../types/product.types';

export const getProductById = (id: string): Product | undefined => {
  return productsData.find(product => product.id === id);
};

export const createProductsResponse = (products: Product[]): ProductsResponse => {
  return { products, total: products.length };
};
```

### Chart Component Patterns

**ApexCharts Configuration**:
- Use `React.memo()` for chart components
- Define `ApexOptions` with explicit typing
- Include responsive breakpoints for mobile
- Use displayName for debugging
- Consistent color schemes across charts

**Chart Component Structure**:
```typescript
export const ChartName = React.memo(() => {
  const options: ApexOptions = {
    chart: { type: "chartType", toolbar: { show: false } },
    // ... chart config
  };
  
  const series = [/* data */];
  
  return (
    <div className="chart-container">
      <h2 className="chart-type">Chart Title</h2>
      <h3 className="chart-title">Chart Description</h3>
      <Chart options={options} series={series} type="chartType" height={350} />
    </div>
  );
});

ChartName.displayName = "ChartName";
```

### Animation & Interaction Patterns

**GSAP Integration**:
- Use `useGSAP` hook from `@gsap/react`
- Route transitions with `RouteTransition` component
- Cleanup contexts properly
- Scope animations to refs

**Button Interactions**:
```typescript
// Standard button pattern with focus and active states
&:focus { outline: none; }
&:focus-visible { outline: #3b82f6 auto; }
&:active { transform: translateY(2px); }
```

**Toast Notifications**:
```typescript
import { toast } from "react-toastify";
const notify = (message: string) => toast(message);
```

### State Management Patterns

**Local State**:
- Use `useState` for component-specific state
- Prefer controlled components
- Use callback patterns for parent-child communication

**Form Handling**:
- Use refs for simple forms (`useRef<HTMLInputElement>`)
- Form validation with browser's `reportValidity()`
- Event handler patterns: `(e: React.ChangeEvent<HTMLInputElement>) => void`

### Responsive Design Patterns

**Breakpoint Strategy**:
```scss
@media (max-width: 1280px) { /* Large tablets */ }
@media (max-width: 768px)  { /* Tablets */ }
@media (max-width: 600px)  { /* Mobile */ }
```

**Mobile-First Components**:
- Sidebar hidden on mobile, replaced with hamburger menu
- Responsive chart configurations
- Flexible grid layouts with flex-wrap

### Accessibility Patterns

**Button Accessibility**:
```typescript
<button 
  aria-label={`Action for ${item.name}`}
  data-testid={`action-btn-${item.id}`}
>
```

**Focus Management**:
- Proper focus outlines with `:focus-visible`
- Keyboard navigation support
- Screen reader friendly labels

## Component Development Guidelines

### When Creating New Components:

1. **Follow Folder Structure**: Create dedicated folder with component file, styles, and index
2. **TypeScript First**: Define interfaces before implementation
3. **SCSS Scoping**: Import variables/mixins, use component-specific classes
4. **Export Pattern**: Use named exports through index.ts barrel files
5. **Props Interface**: Always define explicit props interface
6. **Responsive Design**: Include mobile breakpoints in styles
7. **Accessibility**: Add proper ARIA labels and focus management

### When Adding Charts:

1. **Use ApexCharts**: Follow established chart component patterns
2. **React.memo**: Wrap chart components for performance
3. **Responsive Config**: Include responsive options for mobile
4. **Consistent Styling**: Use project color scheme
5. **TypeScript**: Define ApexOptions explicitly
6. **Error Handling**: Handle data formatting edge cases

### When Working with State:

1. **Local First**: Use component state unless data needs sharing
2. **Controlled Components**: Prefer controlled over uncontrolled
3. **Type Safety**: Define state interfaces explicitly
4. **Loading States**: Include loading/skeleton states for async operations
5. **Error Boundaries**: Consider error handling for complex components

### File Naming Conventions:

- Components: PascalCase (e.g., `ProductCard.tsx`)
- Styles: Match component name (e.g., `ProductCard.scss`)
- Types: kebab-case with .types suffix (e.g., `product.types.ts`)
- Utils: camelCase (e.g., `dateUtils.ts`)
- Data: kebab-case (e.g., `products.json`)

## Common Patterns to Follow

### Loading States:
```typescript
const [isLoading, setIsLoading] = useState(true);
// Skeleton components while loading
// Image preloading for smooth UX
```

### Error Handling:
```typescript
try {
  // API call or operation
} finally {
  setIsLoading(false);
}
```

### Event Handlers:
```typescript
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value, type, checked } = e.target;
  // Handle form state
};
```

### Conditional Rendering:
```typescript
{isLoading ? <SkeletonComponent /> : <ActualComponent />}
```

## Performance Considerations

- Use `React.memo()` for chart components and pure components
- Implement skeleton loading states for better UX
- Optimize images with proper sizing and lazy loading
- Use GSAP for smooth animations with proper cleanup

## Testing Considerations

- Use `data-testid` attributes for test targeting
- Include ARIA labels for accessibility testing
- Test responsive breakpoints
- Validate form submission flows

## Code Quality

- Follow ESLint configuration (TypeScript, React hooks rules)
- Use meaningful variable and function names
- Include TypeScript strict mode compliance
- Add comments for complex business logic
- Maintain consistent code formatting

This project emphasizes incremental improvements and clean architecture. When making changes, prefer small, focused updates that maintain consistency with existing patterns.