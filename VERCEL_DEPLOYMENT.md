# Vercel Deployment Guide

## Overview
This repository is configured for automatic deployment to Vercel. Every commit pushed to the `main` branch should trigger a production deployment.

## Configuration Files
- **vercel.json**: Configures Vercel deployment settings including clean URLs and project structure

## Setup Instructions

### Initial Setup
1. **Connect Repository to Vercel**
   - Log in to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project" or "Import Project"
   - Select this GitHub repository
   - Vercel will automatically detect it as a static site

2. **Configure Production Branch**
   - In Vercel project settings → Git
   - Ensure "Production Branch" is set to `main`
   - This ensures commits to main trigger production deployments

3. **Verify GitHub Integration**
   - Go to GitHub Settings → Applications → Installed GitHub Apps
   - Verify that Vercel has access to this repository
   - The integration should show as active

## Automatic Deployments

Once configured:
- **Production Deployments**: Every push to `main` branch
- **Preview Deployments**: Every push to other branches or pull requests

## Troubleshooting

### Deployments Not Triggering?

1. **Check GitHub Integration**
   - Verify Vercel GitHub App has repository access
   - Go to GitHub Settings → Applications → Installed GitHub Apps
   - Ensure Vercel is listed and has permissions

2. **Verify Production Branch Setting**
   - In Vercel Dashboard → Project Settings → Git
   - Confirm "Production Branch" is set to `main`
   - Must match the branch you're pushing to

3. **Check Build Configuration**
   - Ensure no "Ignored Build Step" is configured
   - In Vercel Dashboard → Project Settings → Git
   - Build settings should allow automatic deployments

4. **Review Deployment Logs**
   - Check Vercel Dashboard → Deployments
   - Look for any failed deployments or errors
   - Review build logs for specific issues

5. **Reconnect GitHub Integration**
   - If issues persist, try disconnecting and reconnecting
   - Vercel Dashboard → Project Settings → Git
   - Disconnect GitHub, then reconnect

### Common Issues

**Issue**: Pushes to main branch don't trigger deployments
- **Solution**: Verify production branch setting matches `main` in Vercel

**Issue**: Vercel shows old deployment
- **Solution**: Force redeploy from Vercel Dashboard or push a new commit

**Issue**: Build fails with errors
- **Solution**: Check build logs in Vercel Dashboard for specific error messages

## Manual Deployment

If automatic deployment isn't working, you can deploy manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

## Support Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel GitHub Integration](https://vercel.com/docs/git/vercel-for-github)
- [Troubleshooting Deployments](https://vercel.com/docs/deployments/troubleshoot-a-deployment)
