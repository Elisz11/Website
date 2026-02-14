<script setup>
    import NavBar from '../components/NavBar.component.vue'
    import Footer from '../components/Footer.component.vue'
    import { ref, onMounted } from 'vue';
    import exifr from 'exifr';

    const gallery = ref([]);
    const images = import.meta.glob('/public/photos/*.jpg', { eager: true });

    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    const loadGallery = async () => {
        const tempGallery = [];

        for (const path in images) {
            const url = path.replace('/public', ''); 
            
            try {
                const data = await exifr.parse(url, {
                    gps: true,
                    timestamp: true
                });

                let placeName = "No GPS data";
                
                if (data?.latitude && data?.longitude) {
                    await delay(1000); 
                    placeName = await getPlaceName(data.latitude, data.longitude);
                }

                tempGallery.push({
                    url,
                    name: path.split('/').pop(),
                    date: data?.DateTimeOriginal?.toLocaleString('it-IT') || 'N/D',
                    lat: data?.latitude,
                    lng: data?.longitude,
                    place: placeName
                });

                gallery.value = [...tempGallery];

            } catch (e) {
                console.error("Error processing", url, e);
            }
        }
    };

    const getPlaceName = async (lat, lng) => {
        if (!lat || !lng) return "Unknown Location";
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=14`,
                { headers: { 'Accept-Language': 'en-US', 'User-Agent': 'VuePhotoApp' } }
            );
            const data = await response.json();
            return data.display_name || "Unknown Location";
        } catch (error) {
            return "Location name unavailable";
        }
    };

    onMounted(loadGallery);
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
