// 把 App 渲染成静态 HTML 注入 dist/index.html。
// 在 `vite build` 和 `vite build --ssr` 之后运行。
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const indexFile = path.join(dist, "index.html");
const serverEntry = path.resolve("dist-ssr/entry-server.js");

if (!fs.existsSync(serverEntry)) {
  throw new Error(`找不到 SSR 产物 ${serverEntry}，请先运行 vite build --ssr`);
}

const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render();

if (!appHtml || appHtml.length < 200) {
  throw new Error(`预渲染结果异常（长度 ${appHtml?.length ?? 0}），构建中止`);
}

const marker = '<div id="root"></div>';
let html = fs.readFileSync(indexFile, "utf8");

if (!html.includes(marker)) {
  throw new Error(`dist/index.html 中找不到 ${marker}，无法注入`);
}

html = html.replace(marker, `<div id="root">${appHtml}</div>`);
fs.writeFileSync(indexFile, html);

// SSR 产物只是中间件，不需要发布
fs.rmSync(path.resolve("dist-ssr"), { recursive: true, force: true });

console.log(`✓ 已预渲染 ${appHtml.length} 字符的 HTML 到 dist/index.html`);
