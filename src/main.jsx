import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const root = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// 预渲染过的页面里 #root 已经有内容，走 hydrate 接管既有 DOM；
// 否则（比如 dev server）正常挂载。
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
