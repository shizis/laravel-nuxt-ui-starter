<script setup lang="ts">
import { home } from '@/routes';
import type { NavigationMenuItem } from '@nuxt/ui';
import { computed } from 'vue';

const items = computed<NavigationMenuItem[]>(() => [
    {
        label: 'Home',
        to: home().url,
    },
    {
        label: 'Components',
        to: '/docs/components',
    },
    {
        label: 'Figma',
        to: 'https://go.nuxt.com/figma-ui',
        target: '_blank',
    },
    {
        label: 'Releases',
        to: 'https://github.com/nuxt/ui/releases',
        target: '_blank',
    },
]);
</script>

<template>
    <UHeader>
        <template #title>
            <AppLogo class="h-6 w-auto" />
        </template>

        <UNavigationMenu :items="items" />

        <template #right>
            <UColorModeButton />

            <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
                <UButton
                    color="primary"
                    variant="ghost"
                    to="https://github.com/nuxt/ui"
                    target="_blank"
                    icon="i-simple-icons:github"
                    aria-label="GitHub"
                />
            </UTooltip>
        </template>
    </UHeader>
</template>
