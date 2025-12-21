# Project Memory & Rules

## 📦 Package Management
- **ALWAYS** use `yarn` instead of `npm` for installing dependencies, running scripts, and building.
- Command Mapping:
  - `npm install` -> `yarn install` (or just `yarn`)
  - `npm add` -> `yarn add`
  - `npm run dev` -> `yarn dev`
  - `npm test` -> `yarn test`
  - `npm run build` -> `yarn build`

## ✅ Validation & Testing Workflow
Before committing any changes, follow this step-by-step guide to ensure quality:

1.  **Linting**: Run `yarn lint` to catch potential errors and style issues.
2.  **Unit Tests**: Run `yarn test` to ensure all unit tests pass.
    *   If adding new features, ensure new tests are added.
    *   If refactoring, ensure existing tests are updated if needed.
3.  **Build Verification**: Run `yarn build` to confirm the project compiles without errors.
4.  **Manual Verification**:
    *   Start the development server: `yarn dev`
    *   Verify the specific changes in the browser.
    *   Check for console errors in the browser developer tools.

## 🏗️ Development Standards
All developers must adhere to the following standards to ensure consistency and maintainability.

### 1. Component Architecture
-   **Structure**: Each component resides in its own folder: `src/components/ComponentName/`.
-   **Files**: A component folder must contain:
    -   `ComponentName.tsx`: The logic and markup.
    -   `ComponentName.css`: The styling (NO inline styles).
    -   `ComponentName.test.tsx`: Unit tests.
-   **Functional Components**: Use functional React components with TypeScript interfaces for props.

### 2. Styling Guidelines
-   **No Inline Styles**: All styles must be extracted to the component's CSS file.
-   **CSS Variables**: Use global variables (defined in `index.css`) for colors, spacing, and border radii.
    -   Colors: `var(--color-primary)`, `var(--color-text-main)`, etc.
    -   Glassmorphism: Use `.glass` utility class where appropriate.
-   **Class Naming**: Use descriptive, kebab-case class names (e.g., `org-card`, `filter-btn-active`).

### 3. Testing Strategy
-   **Coverage**: Every new component must have a corresponding test file.
-   **Scope**: Tests should verify rendering, user interactions (clicks), and accessibility (e.g., `getByRole`).
-   **Mocks**: Use mocks for external dependencies or complex props.

### 4. TypeScript
-   **Strict Typing**: Avoid `any`. Define interfaces for all props and data structures.
-   **Types File**: Shared types (like `Organization`) should be in `src/types.ts`.
