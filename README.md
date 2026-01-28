# Star Code --- Online Interactive Code Editor

Live Demo: https://star-code.vercel.app

Star Code is an online code editor built with a modern full-stack
setup.\
I built this project to ship a real product-style application
end-to-end, including frontend, authentication, and backend data
handling.

The goal was to create a clean, fast, and practical coding environment
while gaining experience with production-ready tools and workflows.

------------------------------------------------------------------------

## Key Features

-   In-browser code editor powered by Monaco Editor
-   Secure authentication using Clerk
-   Backend functions and persistent data using Convex
-   Responsive UI for desktop and mobile
-   Clean, modern interface built with Tailwind CSS
-   Deployed and maintained on Vercel

------------------------------------------------------------------------

## Tech Stack

-   Next.js (App Router) + TypeScript
-   Tailwind CSS
-   Monaco Editor
-   Clerk (Authentication)
-   Convex (Backend / Database)
-   Vercel (Deployment)

------------------------------------------------------------------------

## Running Locally

### 1. Install dependencies

npm install

# Clerk

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key\
CLERK_SECRET_KEY=your_key

# Convex

NEXT_PUBLIC_CONVEX_URL=your_url

Use the same environment variables you configured in your Vercel
project.

------------------------------------------------------------------------

### 3. Start development server

npm run dev

Open http://localhost:3000 in your browser.

------------------------------------------------------------------------

## Deployment

This project is deployed on Vercel.

To deploy your own version:

1.  Fork or clone this repository
2.  Create a new Vercel project
3.  Add all required environment variables
4.  Deploy

------------------------------------------------------------------------

## What I Learned

-   Building a production-style Next.js application
-   Integrating authentication and backend services
-   Managing environment variables and deployments
-   Structuring a full-stack project for maintainability
-   Shipping and iterating on a real, deployed product

------------------------------------------------------------------------

## About This Project

This project is part of my portfolio to demonstrate full-stack
development skills and real-world product experience.

If you're interested in how this was built or want to discuss
improvements, feel free to reach out.
