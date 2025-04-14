import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, 
  },
  basePath: '/next-portfolio', // replace with your GitHub repo name
  assetPrefix: '/next-portfolio', 
};

export default nextConfig;
