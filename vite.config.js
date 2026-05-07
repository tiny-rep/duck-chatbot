// vite.config.js
import {
  defineConfig
} from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig({
  plugins: [uni()],
  server: {
	port: 3000,
    proxy: {
      '/api': {
        target: 'http://ai-demo.b-nature.cn', //http://127.0.0.1:5000 http://ai-demo.b-nature.cn,
        changeOrigin: true,
         // rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
  }
});
