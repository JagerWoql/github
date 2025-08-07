import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 使用靜態匯出才能部署到 GitHub Pages
  basePath: "/github", // 對應你的 GitHub repo 名稱
  assetPrefix: "/github", // 用於正確載入 CSS/JS/image 等資源
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "drive.usercontent.google.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
    unoptimized: true, // export 模式下強制使用原圖
  },
};

export default nextConfig;
