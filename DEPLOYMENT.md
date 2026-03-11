# Deployment & Performance Configuration Guide

## Server Configuration (Caching Headers)

### For Vercel/Netlify (Automatic)
These platforms automatically handle caching for built assets with hashed filenames.

### For Nginx
Add this to your nginx configuration:

```nginx
# Cache static assets (JS, CSS) for 1 year
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}

# Don't cache HTML files - always check for updates
location ~* \.html$ {
  expires -1;
  add_header Cache-Control "no-cache, no-store, must-revalidate";
}

# Service Worker - revalidate frequently
location = /sw.js {
  expires 1d;
  add_header Cache-Control "must-revalidate";
}

# Security headers
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), camera=(), microphone=()" always;
```

### For Apache (.htaccess)
Add this to `.htaccess` in your public directory:

```apache
<IfModule mod_headers.c>
  # Cache static assets
  <FilesMatch "\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$">
    Header set Cache-Control "max-age=31536000, public, immutable"
  </FilesMatch>

  # Don't cache HTML
  <FilesMatch "\.html$">
    Header set Cache-Control "max-age=0, no-cache, no-store, must-revalidate"
  </FilesMatch>

  # Service Worker
  <FilesMatch "^sw\.js$">
    Header set Cache-Control "max-age=86400, must-revalidate"
  </FilesMatch>

  # Security headers
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "DENY"
  Header always set X-XSS-Protection "1; mode=block"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "geolocation=(), camera=(), microphone=()"
</IfModule>

<IfModule mod_rewrite.c>
  RewriteEngine On
  # Redirect trailing slashes
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.+)$ %{REQUEST_URI}/ [L]
</IfModule>
```

## Build & Deploy Checklist

- [ ] Run `npm run build` and verify bundle size
- [ ] Check Lighthouse scores (Target: 90+)
- [ ] Test service worker in DevTools
- [ ] Verify dark mode toggle works
- [ ] Test mobile hamburger menu
- [ ] Check accessibility with WAVE or Lighthouse
- [ ] Test on slow 3G (Chrome DevTools)
- [ ] Verify all ARIA labels are present
- [ ] Test skip-to-content link with keyboard
- [ ] Validate sitemap.xml and robots.txt
- [ ] Enable compression (gzip/brotli)
- [ ] Enable HTTP/2 or HTTP/3
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Monitor Core Web Vitals

## Performance Tips

1. **Image Optimization**: Use webp format with fallbacks
2. **Code Splitting**: Already configured in vite.config.ts
3. **Lazy Loading**: Assets are preloaded in index.html
4. **Service Worker**: Provides offline support and caching
5. **CSS Variables**: Efficient theming with dark mode
6. **Error Boundaries**: Graceful error handling

## SEO Improvements Implemented

- ✅ Meta descriptions and OG tags
- ✅ JSON-LD structured data
- ✅ Sitemap.xml for search engines
- ✅ robots.txt for crawler directives
- ✅ Semantic HTML with ARIA labels
- ✅ PWA manifest for app-like experience

## Accessibility Improvements

- ✅ Skip-to-content link
- ✅ ARIA labels on interactive elements
- ✅ Error boundaries with fallback UI
- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ Dark mode toggle for user preference
