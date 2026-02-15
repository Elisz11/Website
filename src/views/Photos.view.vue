<script setup>
    import NavBar from '../components/NavBar.component.vue'
    import Footer from '../components/Footer.component.vue'
    import { ref, onMounted, withDirectives } from 'vue';

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
            <div class="text-amber-500">
                <span>Tip: click on the place name to see the location on Google Maps</span>
            </div>
            <h1 class="text-2xl">Latest photos</h1>
            <div v-for="photo in gallery">
                <p>Date: {{ new Date(photo.date).toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' }) }}</p>
                <p v-if="photo.lat">Place:<a :href="`https://www.google.com/maps/search/?api=1&query=${photo.lat},${photo.lng}`" target="_blank"> {{ photo.place }}</a></p>
                <div>
                    <img :src="photo.url" :alt="photo.name" class="rounded-lg h-50 transition-all duration-300 hover:scale-125">
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>
