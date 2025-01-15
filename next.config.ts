import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

export default nextConfig;
