# WhyRebate - Real Estate Commission Rebate Platform

## Overview

WhyRebate is a real estate commission rebate platform built with a modern full-stack TypeScript architecture. The application allows potential home buyers to calculate rebate estimates and submit lead information through an interactive web interface. It's designed as a marketing and lead generation tool for HomeSmart real estate agents offering commission rebates to buyers.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas shared between client and server
- **Session Management**: Express sessions with PostgreSQL store

### Development Setup
- **Package Manager**: npm with lockfile version 3
- **TypeScript**: Strict mode enabled with modern ESNext target
- **Development Server**: Vite dev server with HMR
- **Production Build**: esbuild for server bundling, Vite for client

## Key Components

### Database Schema
Located in `shared/schema.ts`:
- **Users table**: Basic user authentication (id, username, password)
- **Leads table**: Customer lead information (contact details, price range, estimated rebate)
- **Validation**: Zod schemas for type-safe data validation

### API Endpoints
- `POST /api/leads` - Create new lead submissions
- `GET /api/leads` - Retrieve all leads (admin functionality)
- `GET /api/leads/:id` - Retrieve specific lead by ID

### Frontend Pages
- **Home Page**: Main landing page with calculator and lead form
- **404 Page**: Not found page with developer-friendly messaging

### Core Features
- **Rebate Calculator**: Interactive slider for home price with real-time rebate calculation (2% commission rebate)
- **Lead Form**: Contact form with validation for capturing potential customer information
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Toast Notifications**: User feedback for form submissions and errors

## Data Flow

1. **User Interaction**: Users visit the landing page and interact with the rebate calculator
2. **Real-time Calculation**: Price slider updates rebate estimates dynamically
3. **Lead Submission**: Users fill out contact form with personal and purchase information
4. **Validation**: Client-side validation with Zod schemas before submission
5. **API Processing**: Server validates data and stores leads in PostgreSQL database
6. **User Feedback**: Toast notifications confirm successful submissions or display errors

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React ecosystem with modern hooks
- **Component Library**: Comprehensive Radix UI component set
- **Styling**: Tailwind CSS with custom color variables
- **Data Fetching**: TanStack Query for caching and synchronization
- **Form Management**: React Hook Form with resolver integration

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL
- **ORM**: Drizzle for type-safe database operations
- **Session Store**: connect-pg-simple for PostgreSQL session persistence
- **Validation**: Shared Zod schemas between client and server

### Development Tools
- **Build System**: Vite with React plugin and error overlay
- **Type Checking**: TypeScript with strict configuration
- **Database Migrations**: Drizzle Kit for schema management
- **Development Environment**: Replit-specific plugins and configurations

## Deployment Strategy

### Development Environment
- Vite development server with hot module replacement
- Express server with request logging middleware
- In-memory storage fallback when database is unavailable
- Replit-specific development banner and cartographer integration

### Production Build
- **Client**: Vite production build with optimization
- **Server**: esbuild bundling for Node.js deployment
- **Assets**: Static file serving through Express
- **Database**: PostgreSQL connection via environment variables

### Environment Configuration
- `DATABASE_URL` required for PostgreSQL connection
- Development/production mode detection via `NODE_ENV`
- Replit-specific environment variable handling

## Changelog

- July 07, 2025: Initial setup
- January 08, 2025: Completed WhyRebate landing page with HomeSmart branding integration, comprehensive legal disclosures, and "up to" rebate language compliance

## User Preferences

Preferred communication style: Simple, everyday language.