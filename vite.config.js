import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'),
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                about: 'about.html',
                blog: 'blog.html',
                contact: 'contact.html',
                economy: 'economy.html',
                elite: 'elite.html',
                industrial: 'industrial.html',
                luxe: 'luxe.html',
                projects: 'projects.html',
                retail: 'retail.html',
                services: 'services.html',
                workspaces: 'workspaces.html'
            }
        }
    },
    server: {
        open: true
    }
})

