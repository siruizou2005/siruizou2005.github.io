// 构建时用的服务端入口：把 App 渲染成 HTML 字符串，由 scripts/prerender.js
// 注入到 dist/index.html。这样不执行 JS 的爬虫也能读到完整内容。
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

export function render() {
  return renderToString(<App />);
}
