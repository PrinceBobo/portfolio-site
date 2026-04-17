# Muhammad Usman - Professional Portfolio Website

A stunning, professionally-designed portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

✨ **Enterprise-Grade Design**
- Modern dark theme with cyan accent colors
- Smooth animations and transitions
- Fully responsive mobile-friendly design
- Glass-morphism effects

📄 **Complete Sections**
- **Home**: Hero section with key statistics
- **About**: Career journey timeline, skills matrix, and philosophy
- **Portfolio**: Featured projects showcase with detailed descriptions
- **Contact**: Contact form and direct messaging options

🚀 **Performance Optimized**
- Built with Next.js 16 and App Router
- TypeScript for type safety
- Tailwind CSS for efficient styling
- Optimized images and lazy loading

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd portfolio-site

# Install dependencies
npm install

# Start the development server
npm run dev
```

The website will be available at `http://localhost:3000`

## Build for Production

```bash
# Build the optimized production bundle
npm run build

# Start the production server
npm start
```

## Customization

### Update Personal Information

**Edit `/app/about/page.tsx`:**
- Update career journey experiences
- Modify skills and technical stack
- Change education and credentials
- Update philosophy/values sections

**Edit `/app/page.tsx`:**
- Update hero section intro text
- Modify statistics and achievements
- Edit expertise highlights

**Edit `/app/portfolio/page.tsx`:**
- Update project listings
- Add your own project descriptions
- Link to live projects and GitHub repositories

### Contact Information

**Edit `/app/contact/page.tsx` and `/components/Navbar.tsx`:**
- Replace `usman@example.com` with your email
- Update LinkedIn profile URL
- Add GitHub profile URL

### Styling & Colors

**Main Colors (edit in `/app/globals.css`):**
- Primary Accent: `#00d4ff` (cyan) - change to your brand color
- Background: `linear-gradient(135deg, #0f172a 0%, #1e293b 100%)`
- Modify colors in the `:root` section

**Tailwind Configuration (`tailwind.config.ts`):**
- Extend fonts, colors, and animations
- Add custom utility classes

### Resume Integration

Currently, the portfolio uses hardcoded content. To integrate your resume:

1. **PDF Viewer Option**: Add a resume download link in the About page
2. **Data Population**: Update `/app/about/page.tsx` with actual career data
3. **Interactive Timeline**: Modify the `careerJourney` array with your experiences

## File Structure

```
portfolio-site/
├── app/
│   ├── about/          # About page with career & skills
│   ├── contact/        # Contact page with form
│   ├── portfolio/      # Portfolio showcasing projects
│   ├── layout.tsx      # Root layout with navbar
│   ├── page.tsx        # Home/hero page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation component
│   └── ContactForm.tsx # Reusable contact form
├── public/             # Static assets
└── tailwind.config.ts  # Tailwind configuration
```

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Deployment

### Deploy to Vercel (Recommended for Next.js)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

**GitHub Pages:**
```bash
npm run build
# Deploy the `out` directory
```

**Docker:**
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

##  Technologies Used

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, CSS Animations
- **Icons**: Lucide React
- **Fonts**: Sora, JetBrains Mono (Google Fonts)
- **Dev Tools**: ESLint, Turbopack

## Color Scheme

| Element | Color | Hex |
|---------|-------|-----|
| Background | Dark Slate | `#0f172a` |
| Accent | Cyan | `#00d4ff` |
| Text Primary | White | `#ffffff` |
| Text Secondary | Gray | `#9ca3af` |
| Borders | White (10% opacity) | `rgba(255,255,255,0.1)` |

## Performance Tips

- Keep portfolio project descriptions concise
- Optimize project images (max 500KB each)
- Use WebP format for images when possible
- Monitor Core Web Vitals in production

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: All modern versions

## Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001  # Use port 3001
```

**CSS not loading:**
```bash
rm -rf .next
npm run dev
```

**Dependencies issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

## License

© 2026 Muhammad Usman. All rights reserved.

## Support

For questions or issues, contact: usman@example.com

---

**Happy building! 🚀**

*Last Updated: 2026*
