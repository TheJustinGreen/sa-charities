# Altruistic - Effective Altruism in South Africa

A modern React application designed to categorize and connect users with high-impact charities and organizations in South Africa, built with a "Suffering-Centric" taxonomy.

## Features

- **Suffering-Centric Categories:** Organizations are grouped by the type of suffering they address (Survival, Safety & Freedom, Health, Opportunity, Sustainability).
- **Grouped Display:** Entities are clearly separated by type: Non-Profit Organizations (NPO), Social Enterprises, and Businesses.
- **Advanced Filtering:** Filter by Cause and Sub-category Tags.
- **Section 18A Tagging:** Easily identify organizations that offer tax-deductible certificates.
- **Responsive Design:** Premium, glassmorphism-inspired UI built with Vanilla CSS variables.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- Yarn or npm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd Altruistic
    ```
3.  Install dependencies:
    ```bash
    yarn install
    # or
    npm install
    ```

## Development

To start the local development server:

```bash
yarn dev
```

The application will be available at `http://localhost:5173`.

## Verification & Quality

We enforce high code quality standards using TypeScript, ESLint, and Vitest.

### Unit Tests

Run the test suite to verify components and logic:

```bash
yarn test
# or for a single run
yarn test --run
```

### Linting

Check for code style and potential errors:

```bash
yarn lint
```

### Type Checking

Verify TypeScript types without emitting files:

```bash
yarn tsc --noEmit
```

## Building for Production

To create a production-ready build:

```bash
yarn build
```

This will output the compiled assets to the `dist` directory, ready for deployment to Vercel, Netlify, or any static host.

## Project Structure

- `src/components`: Reusable UI components (Hero, OrganizationCard, FilterBar).
- `src/pages`: Main page views (Home, GlossaryPage).
- `src/data`: Static data for organizations and taxonomies.
- `src/types.ts`: TypeScript definitions for the data model.

## Contributing

1.  Fork the repository.
2.  Create a feature branch.
3.  Commit your changes.
4.  Push to the branch.
5.  Open a Pull Request.

---
Built with ❤️ for a better South Africa.
