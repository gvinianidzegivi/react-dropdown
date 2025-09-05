# React Dropdown UI Library

A reusable **React dropdown component library** built with TypeScript, Storybook, and Tailwind CSS.

## Tools Used

- **TypeScript** – for type-safe components
- **Storybook** – for interactive component documentation
- **Vitest** – for unit testing
- **Tsup** – for bundling components

## Installation

Install directly from GitHub:

```bash
npm i https://github.com/gvinianidzegivi/react-dropdown.git
```

This allows you to use the dropdown component in other React projects.

## Usage

After installing, import and use the dropdown component like any other React component:

```tsx
import { Dropdown } from 'react-dropdown-ui-library';

function App() {
  return <Dropdown options={['Option 1', 'Option 2', 'Option 3']} />;
}
```

## Development

### Adding a New Component

1. Create your new component.
2. Register it in `index.ts`.
3. Run the prepare script:

```bash
npm run prepare
```

### Running Storybook

To start or deploy Storybook, use:

```bash
npm run storybook       # start locally
npm run sb:deploy       # deploy Storybook
```

### Bundling

Components are bundled using **Tsup** for easy consumption in other React projects. _(Previously, Rollup was used.)_

### Testing

Simple tests are provided for each component using **Vitest**:

```bash
npm run test
```

### Styling

The library uses **Tailwind CSS**. SCSS was considered but Tailwind was chosen for simplicity and consistency.
