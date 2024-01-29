import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Markdown from '@pity/vite-plugin-react-markdown'
import tsconfigPaths from 'vite-tsconfig-paths';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    Markdown({
      // wrapperComponentName: 'ReactMarkdown',
      // wrapperComponentPath: './src/components/page',
      // if you want use components in md file, please add it in this
      // [ComponentName]: `componentPath`
      // markdownItUses: [
      //   prism,
      // ],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
