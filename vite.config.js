import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' 使构建产物用相对路径引用资源，
// 无论部署在 username.github.io 根目录还是 /repo-name/ 子路径都能工作
export default defineConfig({
  base: './',
  plugins: [react()],
})
