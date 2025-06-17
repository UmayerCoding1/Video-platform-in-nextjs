import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images : {
     remotePatterns : [
       {
        protocol: "https",
        hostname: "ik.imahekit.io",
        port: "", 
       }
     ]
  }
};

export default nextConfig;
