# MUGISHA RUSHINGA Guevara — Personal Portfolio

A responsive personal portfolio built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **React Router**. It showcases live deployed web applications, browser-based games, upcoming projects in development, technical skills, focus areas, and an interactive contact & resume experience.

## Features

- **Multi-Page Navigation (React Router)**: Dedicated routes for Overview (`/`), Projects (`/projects`), Skills (`/skills`), About (`/about`), Contact (`/contact`), and a 404 fallback page.
- **Projects Showcase & State Management**:
  - Separated into **Live Projects** (SkyCast, MRDEVGAME, Mrdev puzzle, Igisoro, SmartCompany, Kigali Tech Store) and **Coming Soon / In Development** (OnTheGo, Incognito, Agruni, Pulse News).
  - Client-side state for category/status filtering (`All`, `Live`, `Coming Soon`, `Web Apps`, `Game Development`, `Business & Commerce`, `UI/UX & Prototypes`, `Saved`), live search, grid/list layout switching, project bookmarking (`localStorage`), and a detailed case-study modal.
- **Skills Matrix**: Organized across **Frontend**, **Backend**, **Design**, **Deployment**, **Tools**, and **Other**, with category filtering and search.
- **Interactive Contact Form**: Client-side validation for name, email format, project scope, and message length, alongside one-click copy for emails and phone numbers and a discovery call slot selector.
- **Dark / Light Mode Toggle**: Persistent theme switching backed by `ThemeContext` (`localStorage` + system color-scheme fallback) and Tailwind CSS v4 `@custom-variant dark`.
- **View Resume/CV Modal**: Quick overview modal displaying focus areas, stack, featured builds, and contact details.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router (`react-router-dom`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React (`lucide-react`)

## Project Structure

```text
├── index.html                  # HTML entry point and Google Fonts
├── package.json                # Dependencies and npm scripts
├── vite.config.ts              # Vite + React + Tailwind configuration
└── src/
    ├── App.tsx                 # Root app with ThemeProvider and React Router routes
    ├── index.css               # Tailwind import and dark mode custom variant
    ├── main.tsx                # React DOM root mount
    ├── types.ts                # TypeScript interfaces for projects, skills, and forms
    ├── context/
    │   └── ThemeContext.tsx    # Dark/light theme state and persistence
    ├── data/
    │   └── portfolioData.ts    # Projects, skills, focus areas, and FAQ data
    ├── components/
    │   ├── Header.tsx          # Responsive top navbar with theme toggle & mobile menu
    │   ├── Hero.tsx            # Hero split section, stats row, social links & Resume modal
    │   ├── ProjectsSection.tsx # Project filtering, search, view toggle & status grouping
    │   ├── ProjectCard.tsx     # Reusable card component (grid & list layouts)
    │   ├── ProjectDetailModal.tsx # Detailed project inspection modal
    │   ├── SkillsSection.tsx   # Categorized skills matrix with filter & search
    │   ├── ExperienceSection.tsx  # Core focus areas (Web Dev, UI/UX, Client-Server, Games)
    │   ├── ContactSection.tsx  # Validated contact form, direct contacts & call booking
    │   ├── Footer.tsx          # Footer links, social profiles & back-to-top button
    │   └── ScrollToTop.tsx     # Resets scroll position on route change
    └── pages/
        ├── HomePage.tsx        # Main landing overview
        ├── ProjectsPage.tsx    # Full projects archive view
        ├── SkillsPage.tsx      # Skills matrix & engineering practices
        ├── AboutPage.tsx       # Bio, core focus areas & daily workflow
        ├── ContactPage.tsx     # Contact section & collaboration FAQ
        └── NotFoundPage.tsx    # 404 route fallback
```

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

### Installation

1. Clone the repository and navigate into the project directory:
   ```bash
   git clone https://github.com/rushinga1/react-portfolio.git
   cd react-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server on port `3000`:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server on port `3000` |
| `npm run build` | Builds the production bundle into `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs TypeScript type checking (`tsc --noEmit`) |

## Contact & Profiles

- **GitHub**: [github.com/rushinga1](https://github.com/rushinga1)
- **Primary Email**: `mugishaguevara12@gmail.com`
- **Secondary Email**: `rushingaguevara12@gmail.com`
- **Phone**: `0791 895 352` / `0732 795 406`
