import { withPayload } from "@payloadcms/next/withPayload";

const isStaticMode = process.env.BUILD_MODE === 'static';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Conditionally add output export for static mode
  ...(isStaticMode && {
    output: "export",
    distDir: "dist",
  }),
};

export default withPayload(nextConfig);
