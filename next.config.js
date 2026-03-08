/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove X-Powered-By header for security
  poweredByHeader: false,

  // Enable gzip/brotli compression
  compress: true,

  async headers() {
    return [
      {
        // Prevent caching of HTML pages.
        // Fixes two Hostinger issues:
        // 1. CSS "breaks" after server restart — browser had cached HTML pointing to old chunk
        //    hashes that no longer exist after a restart/redeploy.
        // 2. Private browsing shows blank — Hostinger's proxy may cache by cookie presence.
        //    no-store forces a fresh response for every visitor regardless of cookies.
        source: '/((?!_next/static|_next/image|favicon\\.ico).*)',
        headers: [
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
          { key: 'Pragma',        value: 'no-cache' },
          { key: 'Expires',       value: '0' },
        ],
      },
      {
        // Static assets already include content hashes in their filenames, so
        // long-term immutable caching is safe here.
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
