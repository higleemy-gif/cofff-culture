/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production";

// Strict Content-Security-Policy. Kept on a single line per directive for clarity.
//
// NOTE: In development, Next.js relies on eval() for Fast Refresh / HMR and
// source maps, and it opens a websocket for live reload. Those need
// 'unsafe-eval' and a ws: connect-src, which we ONLY add in dev. The
// production policy stays strict.
const ContentSecurityPolicy = [
  "default-src 'self'",
  // 'unsafe-inline' is required for Next.js runtime + next/font inline styles.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' https://images.unsplash.com data:",
  `connect-src 'self'${isDev ? " ws: http://localhost:*" : ""}`,
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
