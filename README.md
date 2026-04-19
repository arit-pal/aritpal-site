***

# Arit Pal - Personal Portfolio Website

This repository contains the source code for my personal portfolio website. Designed with a focus on minimalism and performance, the site serves as a central hub for my professional identity, showcasing my expertise in backend systems, distributed architectures, and software engineering.

## About the Project

The website provides a clean, responsive interface to present my professional background, technical skills, and contact information. It features a custom-built dark/light theme toggle, seamless client-side routing, and a design system built around readability and modern web standards. 

## Architecture & Design Philosophy

This project is built as a Single Page Application (SPA) utilizing **React** and **Vite**. 

**Why this structure?**
I chose a lightweight React + Vite architecture over heavier full-stack frameworks (like Next.js or Remix) for a specific reason: pragmatism. A personal portfolio primarily delivers static content. By utilizing a simple SPA architecture, the project benefits from:
* **Zero Overhead:** No unnecessary server-side rendering logic or complex state management for data that rarely changes.
* **Rapid Development:** Vite provides exceptionally fast cold starts and Hot Module Replacement (HMR).
* **High Maintainability:** A straightforward component tree (`Header`, `Footer`, and Page-level components) makes it trivial to update content or styling.
* **Client-Side Routing:** `react-router-dom` ensures fast, seamless transitions between pages without full page reloads.

## Core Features

* **Responsive Design:** Fluid layouts that adapt from mobile to desktop environments.
* **Theme Management:** Built-in Light/Dark mode functionality with user preference persistence via `localStorage`.
* **Component-Based UI:** Modular CSS and reusable React components for headers, footers, and layout wrappers.
* **SPA Routing:** Configured with React Router and a fallback 404 page for clean navigation.

## Setup Guide

To run this project locally, follow these steps:

### Prerequisites
* Node.js (v18 or higher recommended)
* npm, yarn, or pnpm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/arit-pal/aritpal-site.git
   cd aritpal-site
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the localhost URL provided by Vite (`http://localhost:5173`).

### Build for Production
To generate a production-ready build:
```bash
npm run build
```

## Deployment Workflow

This project utilizes **Vercel** for hosting and Continuous Integration/Continuous Deployment (CI/CD). 

The deployment pipeline is fully automated and operates across two distinct environments:

* **Production Environment (`main` branch):** The live website accessible to the public.
* **Development Environment (`develop` branch):** A staging environment used for testing new features, design tweaks, and content updates before they go live.

### How it Works
1. **Automated Deployments:** Whenever a commit is pushed to either the `main` or `develop` branch on GitHub, Vercel automatically intercepts the webhook, fetches the latest code, and builds the project.
2. **Environment-Specific URLs:** Vercel deploys these builds to environment-specific URLs, allowing for safe previewing on the `develop` branch without affecting the live `main` site.
3. **Routing Configuration:** The project includes a `vercel.json` file at the root. This ensures that Vercel properly handles React Router's client-side routing by rewriting all incoming requests to `index.html`, preventing 404 errors on direct URL visits.

## Tech Stack

* **Frontend Framework:** React 19
* **Build Tool:** Vite
* **Routing:** React Router DOM
* **Styling:** Vanilla CSS (CSS Variables for Theming)
* **Hosting & CI/CD:** Vercel

***

### Arit Pal