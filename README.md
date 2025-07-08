# WhyRebate - Real Estate Commission Rebate Platform

A modern real estate commission rebate platform that connects home buyers with participating HomeSmart agents offering up to 2% commission rebates.

## 🚀 Features

- **Interactive Rebate Calculator** - Real-time savings estimates up to 2% of purchase price
- **HomeSmart Branding** - Professional real estate industry appearance
- **Lead Generation** - Contact form with validation for capturing potential customers
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Legal Compliance** - Comprehensive disclosure statements
- **Full-Stack TypeScript** - Modern architecture with type safety

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Wouter** for lightweight routing
- **Tailwind CSS** with shadcn/ui components
- **React Hook Form** with Zod validation
- **TanStack Query** for state management
- **Vite** for development and building

### Backend
- **Node.js** with Express
- **PostgreSQL** with Drizzle ORM
- **Neon Database** (serverless PostgreSQL)
- **Express Sessions** with PostgreSQL store

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/edholman/RebateTracker.git
   cd RebateTracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Add your DATABASE_URL
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5000
   ```

## 📁 Project Structure

```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Application pages
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and configurations
├── server/           # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Database interface
├── shared/           # Shared TypeScript types
└── public/           # Static assets
```

## 🎯 Key Components

- **Rebate Calculator** - Interactive slider with real-time calculations
- **Contact Form** - Lead capture with validation
- **Header/Footer** - HomeSmart branding with navy backgrounds
- **Legal Disclosures** - Comprehensive rebate terms and conditions

## 🔧 Environment Variables

```env
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=development
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run type-check` - Run TypeScript type checking

## 🚀 Deployment

This project is configured for deployment on:
- Replit Deployments
- Vercel
- Netlify
- Any Node.js hosting platform

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ for real estate professionals and home buyers seeking commission savings.