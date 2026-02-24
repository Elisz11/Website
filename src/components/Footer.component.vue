<script setup>
    import { onMounted, ref } from 'vue'
    import linksData from '../assets/links.json';

    const links = ref([]);

    onMounted(async () => {
        try {
            links.value = linksData
        } catch (e) {
            console.error("Failed to load links data", e);
        }
    });
</script>

<template>
    <main class="flex w-full p-2 gap-2 justify-center cursor-pointer">
        <a class="hover:underline active:scale-95 transition-all" v-for="link in links">{{ link.name }}</a>
    </main>
</template>
