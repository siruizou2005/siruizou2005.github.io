// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// 静态站点，构建产物在 dist/，由 GitHub Pages 托管在自定义域名 siruizou.com
// （public/CNAME 原样复制进 dist/ 让域名生效）。
export default defineConfig({
  site: "https://siruizou.com",
  build: {
    // 资源文件名带 hash，可以放心长缓存
    assets: "assets",
  },

  // 拉丁字体由 Astro 在构建时下载并自托管：省掉对 fonts.googleapis.com
  // 和 fonts.gstatic.com 的两次跨域握手，字体不再是渲染阻塞的第三方请求。
  // 中文只用到「邹思瑞」三个字，通用管线最细也只能到整个简体字集（好几 MB），
  // 所以中文走手工子集：public/fonts/noto-serif-sc-subset.woff2（2.7 KB），
  // @font-face 写在 src/styles/index.css 里。
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Source Serif 4",
      cssVariable: "--font-source-serif-4",
      weights: [400, 600],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      display: "swap",
      fallbacks: ["Georgia", "serif"],
    },
  ],
});
