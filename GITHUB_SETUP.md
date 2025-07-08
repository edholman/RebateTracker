# RebateTracker GitHub Setup Guide

## Repository: https://github.com/edholman/RebateTracker

### Project Structure
```
RebateTracker/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/ (shadcn components)
│   │   │   ├── calculator-section.tsx
│   │   │   ├── contact-form.tsx
│   │   │   ├── footer.tsx
│   │   │   └── header.tsx
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   ├── queryClient.ts
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   ├── home.tsx
│   │   │   └── not-found.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   └── index.html
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
├── shared/
│   └── schema.ts
├── attached_assets/ (HomeSmart logo)
├── components.json
├── drizzle.config.ts
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── .gitignore
├── .replit
└── replit.md
```

### Setup Instructions

1. **Clone your empty repository locally:**
   ```bash
   git clone https://github.com/edholman/RebateTracker.git
   cd RebateTracker
   ```

2. **Copy all files from this Replit project** to your local repository

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Test the application:**
   ```bash
   npm run dev
   ```

5. **Commit and push:**
   ```bash
   git add .
   git commit -m "Initial commit: WhyRebate landing page with HomeSmart branding"
   git push origin main
   ```

### Key Features Included
- ✅ Interactive rebate calculator with real-time updates
- ✅ HomeSmart branding with navy backgrounds for logo
- ✅ Comprehensive legal disclosures
- ✅ "Up to" language for all rebate calculations
- ✅ Responsive design with testimonials
- ✅ Lead capture form with validation
- ✅ Full-stack TypeScript architecture
- ✅ PostgreSQL database schema (with in-memory fallback)

### Environment Variables Needed
```
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=production
```

### Deployment Ready
The project is configured for:
- Replit Deployments
- Vercel
- Netlify
- Any Node.js hosting platform