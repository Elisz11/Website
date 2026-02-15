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

    <div class="flex flex-1 flex-col justify-center items-center">
        <h1 class="text-5xl">My photos</h1>

        <span class="text-amber-500">Tip: click on the place name to see the location on Google Maps</span>

        <div class=" max-w-5xl border flex flex-col">

            <h1 class="text-2xl">Latest photos</h1>
            <div class="flex gap-2 text-center">
                
                <div v-for="photo in gallery" class="flex flex-col">
                    <a :href="photo.url" download class="transition-all duration-300 hover:scale-110"><img :src="photo.url" :alt="photo.name" class="rounded-lg h-50"></a>
                    <p>{{ new Date(photo.date).toLocaleString('en-IT', { dateStyle: 'short', timeStyle: 'short' }) }}, <a :href="`https://www.google.com/maps/search/?api=1&query=${photo.lat},${photo.lng}`" target="_blank" class="hover:underline">{{ photo.place }}</a></p>
                    <p v-if="photo.lat"></p>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>
