import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const pagesBase = (process.env.PAGES_BASE || "").replace(/^\/|\/$/g, "");

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(isGithubPages && pagesBase
    ? {
        basePath: `/${pagesBase}`,
        assetPrefix: `/${pagesBase}/`,
      }
    : {}),
};

export default nextConfig;
