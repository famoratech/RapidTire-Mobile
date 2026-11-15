// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   cacheComponents: true,
//   partialPrefetching: true,
//   turbopack: {
//     rules: {
//       "*.css": {
//         loaders: ["@tailwindcss/turbopack"],
//         as: "*.css",
//       },
//     },
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Tells Next.js to build static HTML files
  output: "export",

  // 2. Required for static exports: disables the built-in server-side image optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
