import { withPayload } from "@payloadcms/next/withPayload";

const isStaticMode = process.env.BUILD_MODE === 'static';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static pages always get included in all build types
  pageExtensions: ["static.tsx", "static.ts", "static.jsx", "static.js"]
};

if (isStaticMode) {
  nextConfig.output = "export";
  nextConfig.distDir = "dist";
} else {
  // Dynamic pages only get included when we are not doing a static build
  nextConfig.pageExtensions.push("tsx", "ts", "jsx", "js");
}

export default withPayload(nextConfig);
