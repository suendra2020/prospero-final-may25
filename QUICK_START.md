# Quick Start Guide - Deploy to Netlify in 5 Minutes

## Step 1: Prepare Your Code (1 min)

```bash
# Navigate to project directory
cd prospero-project

# Install dependencies
npm install
```

## Step 2: Test Locally (1 min)

```bash
# Start development server
npm run dev

# Visit http://localhost:3000 in your browser
# Press Ctrl+C to stop
```

## Step 3: Build for Production (1 min)

```bash
# Build the project
npm run build

# This creates a 'dist' folder with optimized files
```

## Step 4: Deploy to Netlify (2 min)

### Option A: Via Netlify CLI (Fastest)

```bash
# Install Netlify CLI globally (one-time)
npm install -g netlify-cli

# Login to your Netlify account
netlify login

# Deploy to production
netlify deploy --prod
```

### Option B: Via Netlify Web Interface

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository (GitHub, GitLab, or Bitbucket)
4. Netlify auto-detects settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"
6. Wait for build to complete (usually 1-2 minutes)

### Option C: Drag & Drop (Easiest)

1. Run: `npm run build`
2. Go to https://app.netlify.com
3. Drag the `dist` folder to the drop zone
4. Your site is live immediately!

## ✅ You're Done!

Your site is now live on Netlify! You'll get a URL like:
```
https://prospero-school-abc123.netlify.app
```

## 🔗 Next Steps

### Add a Custom Domain
1. Go to Site Settings → Domain Management
2. Add your domain (e.g., prospero-school.com)
3. Follow DNS setup instructions
4. SSL certificate is automatic and free!

### Configure Environment Variables
1. Go to Site Settings → Build & Deploy → Environment
2. Add variables like:
   - `VITE_GOOGLE_API_KEY=your_key_here`
3. Rebuild the site

### Enable Continuous Deployment
1. Push code to GitHub/GitLab/Bitbucket
2. Netlify automatically builds and deploys on every push
3. No more manual deployments needed!

## 📝 Common Commands

| Command | What it does |
|---------|------------|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check for TypeScript errors |
| `npm run clean` | Clean build files |

## 🆘 Troubleshooting

### Build fails on Netlify but works locally
- Check Node version: `node --version`
- Try: `npm ci` instead of `npm install`
- Check build logs in Netlify dashboard

### Site shows 404 on page refresh
- This is normal for SPAs
- The `_redirects` file and `netlify.toml` handle this
- Should work automatically

### Can't find your site URL
- Check Netlify dashboard
- Look for "Site overview" → "Site information"
- URL format: `https://site-name.netlify.app`

## 📚 Full Documentation

For detailed information, see:
- **NETLIFY_DEPLOYMENT.md** - Complete deployment guide
- **DEPLOYMENT_README.md** - Full project documentation

## 🚀 You're Ready!

Your Prospero School website is now deployed and accessible worldwide!

**Questions?** Check the detailed guides or visit https://docs.netlify.com
