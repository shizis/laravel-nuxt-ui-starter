import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import ui from '@nuxt/ui/vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        ui({
            inertia: true,
            components: {
                dirs: ['resources/js/components'],
            },
            ui: {
                colors: {
                    primary: 'green',
                },
                header: {
                    slots: {
                        root: 'bg-default/75 backdrop-blur border-b border-default h-(--ui-header-height) z-50',
                        container:
                            'flex items-center justify-between gap-3 h-full',
                        left: 'lg:flex-1 flex items-center gap-1.5',
                        center: 'hidden lg:flex',
                        right: 'flex items-center justify-end lg:flex-1 gap-1.5',
                        title: 'shrink-0 font-bold text-xl text-highlighted flex items-end gap-1.5',
                        toggle: 'lg:hidden',
                        content: 'lg:hidden',
                        overlay: 'lg:hidden',
                        header: 'px-4 sm:px-6 h-(--ui-header-height) shrink-0 flex items-center justify-between gap-3',
                        body: 'p-4 sm:p-6 overflow-y-auto',
                    },
                    variants: {
                        toggleSide: {
                            left: {
                                toggle: '-ms-1.5',
                            },
                            right: {
                                toggle: '-me-1.5',
                            },
                        },
                    },
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
        },
    },
});
