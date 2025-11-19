import { defineConfig } from 'vite'
import { resolve } from 'path'
import RubyPlugin from 'vite-plugin-ruby'
import FullReload from 'vite-plugin-full-reload'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: {
      '@pages': resolve(__dirname, 'app/frontend/pages'),
      '@components': resolve(__dirname, 'app/frontend/components'),
      '@actions': resolve(__dirname, 'app/frontend/actions'),
      '@decorators': resolve(__dirname, 'app/frontend/decorators'),
      '@helpers': resolve(__dirname, 'app/frontend/helpers'),
      '@utils': resolve(__dirname, 'app/frontend/utils'),
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  plugins: [
    tailwindcss(),
    react(),
    RubyPlugin(),
    FullReload(['config/routes.rb', 'app/views/**/*'], { delay: 200 })
  ]
})
