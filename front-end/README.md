# Master-Track LMS App Frontend

A modern React + Vite learning management system frontend for browsing courses, learning pathways, pricing plans, and institutional education resources.

## Overview

This project provides the UI layer for a course-based LMS platform with:

- a home landing page
- course discovery and filtering
- learning pathways and curated categories
- pricing and plan sections
- support/contact pages
- responsive layout with Tailwind styling

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- Axios
- React Toastify
- Tabler Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

The app will be available at the Vite local development URL shown in the terminal.

### Production build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Project Structure

```bash
src/
  assets/
  context/
  features/
  layouts/
  pages/
  routes/
  shared/
  styles/
  utils/
```

## Design Notes

The interface uses a teal-and-purple learning theme with strong contrast for course cards, highlights, and CTAs.

- Primary: #14B8A6 (Teal)
- Secondary: #A855F7 (Purple)
- Accent: #FCD34D (Yellow)
- Dark Background: #064E3B
- Card Background: #065F46

## Scripts

- `npm run dev` — start local development server
- `npm run build` — create production bundle
- `npm run preview` — preview built app
- `npm run lint` — check code quality
- `npm run format` — format the project
- `npm run format:check` — check formatting

## Notes

This repository currently contains the frontend application only. Connect it to the backend API or authentication service as needed for live LMS functionality.
