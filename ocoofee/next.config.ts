import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname, "../"),
  images: {
    domains: ["localhost", "127.0.0.1"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "3000",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "3001",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self' blob: data: https:; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://*.clerk.dev https://*.clerk.accounts.dev https://accounts.google.com https://www.gstatic.com data:; " +
              "worker-src 'self' blob:; " +
              "connect-src 'self' https://*.clerk.dev https://*.clerk.accounts.dev https://accounts.google.com https://www.googleapis.com wss: ws:; " +
              "img-src 'self' data: https: blob:; " +
              "font-src 'self' https: data:; " +
              "style-src 'self' 'unsafe-inline' https:; " +
              "frame-src 'self' https://accounts.google.com https://*.clerk.dev https://*.clerk.accounts.dev; "
                .replace(/\s+/g, " ")
                .trim(),
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
