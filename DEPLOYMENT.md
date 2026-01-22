# Deployment Guide - Paradise Recycling Website

## Overview
This guide provides step-by-step instructions for deploying the Paradise Recycling website to `https://dev.opendesignsin.com/paradise/`

## Prerequisites
- Node.js 18+ installed
- Access to the web server at dev.opendesignsin.com
- FTP/SSH credentials or deployment pipeline access

## Build Process

### 1. Install Dependencies
```bash
npm install
```

### 2. Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist/` directory with:
- Minified JavaScript bundle
- Optimized CSS with Tailwind
- Compressed assets
- Source maps for debugging

### 3. Verify Build
```bash
npm run preview
```

Visit `http://localhost:4173/paradise/` to test the production build locally.

## Deployment Steps

### Option A: Direct Upload (FTP/SFTP)

1. Connect to your web server
2. Navigate to the web root directory
3. Create/navigate to the `paradise` directory
4. Upload all contents from the `dist/` folder to `/paradise/`

### Option B: SSH Deployment

```bash
# Connect to server
ssh user@dev.opendesignsin.com

# Navigate to web directory
cd /var/www/html

# Create paradise directory if it doesn't exist
mkdir -p paradise

# Upload files (from local machine)
scp -r dist/* user@dev.opendesignsin.com:/var/www/html/paradise/
```

### Option C: CI/CD Pipeline

Example GitHub Actions workflow:

```yaml
name: Deploy Paradise Website

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        run: |
          # Add your deployment script here
          rsync -avz dist/ user@dev.opendesignsin.com:/var/www/html/paradise/
```

## Server Configuration

### Nginx Configuration

Add this to your Nginx configuration:

```nginx
server {
    listen 80;
    server_name dev.opendesignsin.com;
    root /var/www/html;

    # Paradise website
    location /paradise/ {
        alias /var/www/html/paradise/;
        try_files $uri $uri/ /paradise/index.html;
        
        # Enable gzip compression
        gzip on;
        gzip_vary on;
        gzip_min_length 1024;
        gzip_types text/plain text/css text/xml text/javascript application/javascript application/x-javascript application/xml+rss;
        
        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
```

Restart Nginx:
```bash
sudo nginx -t
sudo systemctl restart nginx
```

### Apache Configuration

Add this to your `.htaccess` file in the `/paradise/` directory:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /paradise/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /paradise/index.html [L]
</IfModule>

# Enable gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>
```

## Post-Deployment Verification

### 1. Check Main URL
Visit: `https://dev.opendesignsin.com/paradise/`

### 2. Test Navigation
- Click through all navigation links
- Verify smooth scrolling to sections
- Test mobile menu

### 3. Test React Router
- Refresh the page on the home route
- Should not show 404 error
- Should load the application correctly

### 4. Test Responsive Design
- View on mobile device
- Check different screen sizes
- Verify slider swipe functionality

### 5. Test Animations
- Scroll through all sections
- Verify stats counter animation
- Check hover effects

### 6. Performance Check
Use browser DevTools or online tools:
- Check page load time
- Verify all assets load correctly
- Check for console errors

## Troubleshooting

### Issue: 404 on Page Refresh

**Solution:** Server not configured for React Router
- Follow the server configuration steps above
- Ensure `try_files` or `.htaccess` redirect is working

### Issue: Assets Not Loading

**Solution:** Incorrect base path
- Verify Vite config has `base: '/paradise/'`
- Check if assets have `/paradise/` prefix in HTML

### Issue: Blank Page

**Solution:** Check browser console for errors
- May be JavaScript error
- Check if all dependencies are bundled
- Verify build completed successfully

### Issue: Styles Not Applied

**Solution:** CSS not loading
- Check if CSS file exists in dist/assets/
- Verify CSS link in index.html
- Clear browser cache

## Rollback Procedure

If issues occur after deployment:

1. Keep a backup of the previous `dist/` folder
2. Replace current files with backup:
   ```bash
   cp -r dist.backup/* /var/www/html/paradise/
   ```
3. Restart web server if needed

## Maintenance

### Updates
To deploy updates:
1. Pull latest code from repository
2. Run `npm install` (if dependencies changed)
3. Run `npm run build`
4. Deploy new `dist/` folder

### Monitoring
- Set up uptime monitoring for `https://dev.opendesignsin.com/paradise/`
- Monitor server logs for errors
- Check analytics for user issues

## Support

For deployment issues:
- Check Nginx/Apache error logs: `/var/log/nginx/error.log` or `/var/log/apache2/error.log`
- Check browser console for client-side errors
- Review build output for warnings

---

**Deployment Status:** Ready for Production ✅
