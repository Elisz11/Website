<script setup>
    import { onMounted, ref } from 'vue'

    const links = ref([]);

    onMounted(async () => {
        try {
            const response = await fetch('/src/assets/links.json');
            const data = await response.json();
            
            links.value = data
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
