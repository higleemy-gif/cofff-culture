/** @type {import('next').NextConfig} */

// This project is deployed to Cloudflare Pages as a fully static site via
// Next.js Static HTML Export. All pages are statically renderable and there
// are no server routes at runtime.
//
// Security headers are NOT set here: Next.js runtime headers() does not apply
// to a static export. They are served by Cloudflare Pages via `public/_headers`
// (copied to the export root as `out/_headers`).
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Required for static export: the built-in image optimizer needs a server,
    // so images are emitted with their original sources instead.
    unoptimized: true,
    // Preserved from the previous config; harmless with unoptimized images.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
