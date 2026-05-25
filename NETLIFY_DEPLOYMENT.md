# Netlify Deployment Guide for Prospero School Website

This guide provides step-by-step instructions to deploy the Prospero English Medium School website to Netlify.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git repository (GitHub, GitLab, or Bitbucket)
- Netlify account (free at https://netlify.com)

## Deployment Methods

### Method 1: Deploy via Netlify UI (Recommended for Beginners)

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Prospero School website"
   git branch -M main
   git remote add origin https://github.com/yourusername/prospero-school.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Visit https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Select your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Netlify to access your repositories
   - Select the `prospero-school` repository

3. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Click "Deploy site"

4. **Wait for Deployment**
   - Netlify will automatically build and deploy your site
   - You'll receive a unique URL (e.g., `https://prospero-school-abc123.netlify.app`)

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Authenticate with Netlify**
   ```bash
   netlify login
   ```
   This will open a browser window to authorize the CLI.

3. **Deploy the Site**
   ```bash
   netlify deploy --prod
   ```
   - First run will prompt you to create a new site or link to existing
   - Select "Create & configure a new site"
   - Choose your team and site name
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Verify Deployment**
   - Your site will be live at the provided URL
   - Check the Netlify dashboard for deployment status

### Method 3: Deploy via GitHub Actions (CI/CD)

1. **Create GitHub Actions Workflow**
   Create `.github/workflows/netlify-deploy.yml`:
   ```yaml
   name: Deploy to Netlify
   
   on:
     push:
       branches: [main]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: netlify/actions/cli@master
           env:
             NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
             NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
   ```

2. **Add Secrets to GitHub**
   - Go to Settings → Secrets and variables → Actions
   - Add `NETLIFY_AUTH_TOKEN`: Get from Netlify Account Settings → Applications → Personal access tokens
   - Add `NETLIFY_SITE_ID`: Get from Netlify Site Settings → General

## Environment Variables

If your application uses environment variables, add them in Netlify:

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Click **Edit variables**
3. Add your environment variables (e.g., `VITE_API_URL`, `VITE_GOOGLE_API_KEY`)

Example variables for this project:
```
VITE_GOOGLE_API_KEY=your_google_api_key_here
```

## Build Configuration

The `netlify.toml` file contains all build and deployment configurations:

- **Build command**: `npm run build` (runs Vite build)
- **Publish directory**: `dist` (output folder)
- **Redirects**: All routes redirect to `index.html` for SPA routing
- **Headers**: Security headers and cache policies configured

## Custom Domain

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain name (e.g., `prospero-school.com`)
4. Follow DNS configuration instructions from your domain provider
5. Netlify provides free SSL/TLS certificates automatically

## Troubleshooting

### Build Fails
- Check build logs in Netlify dashboard
- Ensure `npm run build` works locally: `npm run build`
- Verify all dependencies are in `package.json`
- Check for TypeScript errors: `npm run lint`

### Site Shows 404 on Refresh
- The `_redirects` file and `netlify.toml` handle SPA routing
- Ensure both files are present in the project root and `public/` directory
- Clear browser cache and try again

### Environment Variables Not Working
- Verify variables are added in Netlify Site Settings
- Use `VITE_` prefix for Vite to expose them to the client
- Rebuild the site after adding variables

### Slow Performance
- Check Netlify Analytics in the dashboard
- Enable image optimization in Netlify
- Consider using Netlify Edge Functions for dynamic content

## Monitoring & Analytics

1. **Netlify Analytics**
   - View traffic, performance, and deployment history
   - Monitor build times and resource usage

2. **Error Tracking**
   - Enable Netlify Error Tracking for production errors
   - View error logs in the dashboard

3. **Performance**
   - Use Lighthouse integration for performance audits
   - Monitor Core Web Vitals

## Rollback & Deployment History

1. Go to **Deploys** in the Netlify dashboard
2. View all deployment history
3. Click "Publish deploy" on any previous version to rollback
4. Automatic rollback available for failed deployments

## Security Best Practices

- Never commit `.env` files with secrets
- Use Netlify environment variables for sensitive data
- Enable branch protection on main branch
- Review deployment previews before publishing
- Keep dependencies updated: `npm update`

## Support & Resources

- Netlify Documentation: https://docs.netlify.com
- Netlify Community: https://community.netlify.com
- Vite Documentation: https://vitejs.dev
- React Documentation: https://react.dev

## Next Steps

1. Ensure all environment variables are configured
2. Test the site thoroughly after deployment
3. Set up custom domain if needed
4. Enable analytics and monitoring
5. Configure backup and disaster recovery
