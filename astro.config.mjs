// @ts-check
import { defineConfig } from "astro/config";

// 静态站点，构建产物在 dist/，由 GitHub Pages 托管在自定义域名 siruizou.com
// （public/CNAME 原样复制进 dist/ 让域名生效）。
export default defineConfig({
  site: "https://siruizou.com",
  build: {
    // 资源文件名带 hash，可以放心长缓存
    assets: "assets",
  },
});
