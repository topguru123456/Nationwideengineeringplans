import type { NextConfig } from "next";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const appDir = path.dirname(fileURLToPath(import.meta.url));

/** Host only (no port), for allowedDevOrigins */
function hostFromEntry(entry: string): string {
  let s = entry.trim().toLowerCase();
  if (!s) return "";
  s = s.replace(/^https?:\/\//, "");
  return s.split("/")[0]?.split(":")[0] ?? "";
}

function nonLocalIPv4Hostnames(): string[] {
  const out = new Set<string>();
  for (const nets of Object.values(os.networkInterfaces())) {
    if (!nets) continue;
    for (const net of nets) {
      if (net.family === "IPv4" && !net.internal) {
        out.add(net.address.toLowerCase());
      }
    }
  }
  return [...out];
}

const extraAllowedDevHosts =
  process.env.NEXT_DEV_ALLOWED_ORIGINS?.split(",")
    .map(hostFromEntry)
    .filter(Boolean) ?? [];

const isProd = process.env.NODE_ENV === "production";

const CANONICAL_HOST = "www.nationwideengineeringplans.com";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "nationwideengineeringplans.com" }],
        destination: `https://${CANONICAL_HOST}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "nationwideengineeringplans.vercel.app" }],
        destination: `https://${CANONICAL_HOST}/:path*`,
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: appDir,
  },
  ...(!isProd
    ? {
        allowedDevOrigins: [
          "127.0.0.1",
          ...nonLocalIPv4Hostnames(),
          ...extraAllowedDevHosts,
        ],
      }
    : {}),
  images: {
    qualities: [75, 82, 85, 88],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
