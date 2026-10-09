# WDD 331R Portfolio

**Student:** Alexis Rudy  
**Semester:** Fall 2026  
**Live Site:** [View site](https://alexis-rudy.github.io/wdd331-portfolio/)

## About

This repository is my portfolio for WDD 331R: Advanced CSS. Each unit contains pages and styles that demonstrate the CSS concepts covered in the course. The site deploys automatically to GitHub Pages on every push to `main`.

## Project Architecture

The project is a static HTML and CSS site. Source styles are organized by responsibility and compiled into a production stylesheet before deployment.

```text
.
├── index.html                         # Portfolio home page
├── unit-1/
│   └── custom-properties/
│       ├── index.html                 # Unit 1 page
│       └── styles.css                 # Unit 1 page-specific styles
├── unit-2/
│   └── layered-components/
│       ├── index.html                 # Unit 2 page
│       └── css/                       # Unit 2 source styles
├── css/                               # Shared source styles for the portfolio
│   ├── base/                          # Element styles and CSS reset
│   ├── layout/                        # Page layout styles
│   ├── tokens/                        # Colors and reusable variables
│   └── main.css                       # Shared stylesheet entry point
├── dist/
│   └── styles.css                     # Generated, bundled, and minified CSS
├── package.json                       # Build scripts and development dependencies
├── package-lock.json                  # Locked npm dependency versions
└── .github/workflows/
    └── deploy-website.yml             # GitHub Pages deployment workflow
```

The `css/main.css` file is the entry point for the shared stylesheet. It imports the base, token, and layout styles. The generated file in `dist/` is the stylesheet used by the site after the build completes.

## Build Tool

The project uses **Lightning CSS** (`lightningcss-cli`) to bundle, transform, and minify the shared CSS. The build also uses **Chokidar** (`chokidar-cli`) for watching CSS files during development.

## Getting Started

Install the development dependencies from the repository root:

```bash
npm install
```

Build the production stylesheet:

```bash
npm run build
```

This command bundles `css/main.css` and writes the optimized output to `dist/styles.css`.

To rebuild automatically whenever a source CSS file changes, run:

```bash
npm run watch
```

Open `index.html` or one of the unit pages in a browser to view the site locally. Because the project is static, no application server is required for the CSS build.

## Pages

- [Home](index.html)
- [Custom Properties and Nesting](unit-1/custom-properties/index.html)
- [Layered Components](unit-2/layered-components/index.html)
