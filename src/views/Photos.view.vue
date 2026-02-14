<script setup>
    import NavBar from '../components/NavBar.component.vue'
    import Footer from '../components/Footer.component.vue'
    import { ref, onMounted } from 'vue';

    const gallery = ref([]);
    const loading = ref(true);

    onMounted(async () => {
        try {
            const response = await fetch('/gallery.json');
            const data = await response.json();
            
            gallery.value = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        } catch (e) {
            console.error("Failed to load gallery data", e);
        } finally {
            loading.value = false;
        }
    });
</script>

<template>
    <NavBar />

    <div class="flex flex-col max-w-5xl justify-center items-center">
        <div class="">
            <h1 class="text-2xl">Latest photos</h1>
            <div v-for="photo in gallery">
                <p>📅 <strong>Date:</strong> {{ photo.date }}</p>
                <p>📍 <strong>Place:</strong> {{ photo.place }}</p>
                <img :src="photo.url" :alt="photo.name" class="rounded-lg w-full h-30 transition-all duration-300  hover:scale-110">
                <div v-if="photo.lat">
                    <a :href="`https://www.google.com/maps/search/?api=1&query=${photo.lat},${photo.lng}`" target="_blank">
                    View on Google Maps
                    </a>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>
