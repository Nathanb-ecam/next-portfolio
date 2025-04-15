import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, 
  },
  basePath: '/next-portfolio', 
  trailingSlash: true,  
  // assetPrefix: '/next-portfolio', 
};

export default nextConfig;
