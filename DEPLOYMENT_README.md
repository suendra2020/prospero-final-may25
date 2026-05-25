# Prospero School Website - Complete Deployment Package

This is a complete, production-ready React + Vite + TypeScript application configured for Netlify deployment.

## 📦 What's Included

### Core Files
- **netlify.toml** - Netlify build and deployment configuration
- **public/_redirects** - SPA routing configuration for Netlify
- **.netlify/state.json** - Netlify state file
- **.github/workflows/netlify-deploy.yml** - Automated CI/CD pipeline
- **NETLIFY_DEPLOYMENT.md** - Detailed deployment guide

### Application Structure
```
prospero-project/
├── src/
│   ├── components/          # Reusable React components
│   ├── views/              # Page views (Home, About, etc.)
│   ├── context/            # React context (Theme)
│   ├── assets/             # Images and static files
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Entry point
│   ├── index.css            # Global styles
│   ├── data.ts             # Application data
│   └── types.ts            # TypeScript types
├── public/                 # Static files
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── netlify.toml            # Netlify configuration
```

## 🚀 Quick Start

### Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` in your browser

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

### Deploy to Netlify

#### Option 1: Via Git Push (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect repository to Netlify at https://app.netlify.com
3. Netlify automatically builds and deploys on every push

#### Option 2: Via Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

#### Option 3: Manual Upload
1. Run `npm run build`
2. Upload the `dist` folder to Netlify via drag-and-drop

## 📋 Configuration Files Explained

### netlify.toml
- **Build Command**: `npm run build` - Builds the Vite application
- **Publish Directory**: `dist` - Output folder from Vite
- **Redirects**: All routes redirect to `index.html` for SPA routing
- **Headers**: Security headers and cache policies
- **Environment**: Production/preview/branch-specific settings

### public/_redirects
```
/* /index.html 200
```
This ensures all routes are handled by React Router/App.tsx

### .github/workflows/netlify-deploy.yml
Automated deployment on:
- Push to `main` branch → Production deployment
- Pull requests → Preview deployment
- Push to `develop` branch → Preview deployment

## 🔧 Environment Variables

Create a `.env` file in the project root:
```
VITE_GOOGLE_API_KEY=your_api_key_here
VITE_API_URL=https://api.example.com
```

In Netlify:
1. Go to Site Settings → Build & Deploy → Environment
2. Add variables with `VITE_` prefix to expose to client

## 🎯 Features

- ✅ React 19 with TypeScript
- ✅ Vite for fast builds and development
- ✅ Tailwind CSS for styling
- ✅ Dark mode support
- ✅ Responsive design
- ✅ SPA routing
- ✅ GSAP animations
- ✅ WhatsApp integration
- ✅ Enquiry form
- ✅ Google Generative AI integration

## 📱 Pages Included

1. **Home** - Landing page with hero section
2. **About** - School information and mission
3. **Academics** - Academic programs and curriculum
4. **Admissions** - Admission process and requirements
5. **Facilities** - School facilities and infrastructure
6. **Gallery** - Photo gallery
7. **Testimonials** - Student and parent testimonials
8. **News & Events** - Latest news and upcoming events
9. **Student Activities** - Extracurricular activities
10. **Contact** - Contact form and location

## 🔒 Security

- Security headers configured in `netlify.toml`
- X-Frame-Options, X-Content-Type-Options set
- XSS protection enabled
- Referrer Policy configured
- Permissions Policy restricted

## 📊 Performance

- Vite provides fast builds and HMR
- Tailwind CSS with tree-shaking
- Image optimization ready
- Cache headers configured
- Static assets cached for 1 year
- HTML cached with must-revalidate

## 🐛 Troubleshooting

### Build Fails
```bash
npm run lint          # Check TypeScript errors
npm run build         # Test build locally
npm install           # Reinstall dependencies
```

### Site Shows 404 on Refresh
- Verify `_redirects` file exists in `public/` folder
- Check `netlify.toml` has redirect rules
- Clear browser cache

### Environment Variables Not Working
- Prefix with `VITE_` for client-side access
- Rebuild after adding variables
- Check Netlify Site Settings

### Slow Performance
- Check Netlify Analytics
- Optimize images
- Review bundle size: `npm run build -- --analyze`

## 📚 Documentation

- **Vite**: https://vitejs.dev
- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org
- **Tailwind CSS**: https://tailwindcss.com
- **Netlify**: https://docs.netlify.com

## 🔄 Continuous Deployment

The GitHub Actions workflow automatically:
1. Installs dependencies
2. Runs linter
3. Builds the project
4. Deploys to Netlify

To enable:
1. Push code to GitHub
2. Add secrets: `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID`
3. Workflow runs automatically on push

## 📝 Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run clean` | Clean build artifacts |
| `npm run lint` | Check TypeScript errors |

## 🎨 Customization

### Update Site Title
Edit `index.html`:
```html
<title>Your School Name | Official Website</title>
```

### Update Logo
Replace `src/assets/logo-prospero.png` with your logo

### Update Colors
Edit `src/index.css` for Tailwind configuration

### Update Content
Edit files in `src/views/` and `src/data.ts`

## 📞 Support

For issues or questions:
1. Check NETLIFY_DEPLOYMENT.md for detailed guide
2. Review Netlify documentation
3. Check build logs in Netlify dashboard
4. Test locally with `npm run dev`

## ✅ Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Logo and images updated
- [ ] Content reviewed and updated
- [ ] Links verified
- [ ] Mobile responsiveness tested
- [ ] Dark mode tested
- [ ] Forms tested
- [ ] Performance optimized
- [ ] SEO meta tags updated
- [ ] Analytics configured

## 🚀 Deployment Steps

1. **Prepare Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Visit https://app.netlify.com
   - Click "Import an existing project"
   - Select your repository
   - Netlify auto-detects settings

3. **Configure Environment**
   - Add environment variables if needed
   - Set custom domain

4. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete
   - Your site is live!

## 📊 Monitoring

After deployment:
1. Enable Netlify Analytics
2. Monitor Core Web Vitals
3. Set up error tracking
4. Review deployment logs

---

**Ready to deploy?** Follow the steps in NETLIFY_DEPLOYMENT.md or start with `npm install && npm run dev`!
