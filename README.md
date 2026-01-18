# Metricmint Digital Admin

Admin dashboard for managing blog posts, authors, and content for Metricmint Digital.

## Features

- 🔐 Admin authentication with JWT
- 📝 Blog CRUD operations
- 👤 Author management
- 🖼️ Image upload and processing
- 📄 Rich text editor (CKEditor 5)
- 🔍 Search and pagination
- 📱 Responsive design

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Routing
- **Zustand** - State management
- **Formik & Yup** - Form handling and validation
- **Axios** - HTTP client
- **CKEditor 5** - Rich text editor
- **Tailwind CSS** - Styling
- **React Icons** - Icons

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:4000/api
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in the terminal).

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Project Structure

```
metricmintdigital-admin/
├── src/
│   ├── components/       # Reusable components
│   │   ├── shared/      # Shared UI components
│   │   └── ui/          # UI primitives
│   ├── contexts/        # React contexts
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Library utilities
│   ├── pages/           # Page components
│   ├── schemas/         # Validation schemas
│   ├── services/        # API services
│   ├── store/           # Zustand store
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
├── public/              # Static assets
└── index.html           # HTML template
```

## Environment Variables

- `VITE_API_URL` - Backend API base URL (default: `http://localhost:4000/api`)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Authentication

The admin panel uses JWT-based authentication. After logging in, the token is stored in localStorage and automatically included in API requests.

## License

MIT

