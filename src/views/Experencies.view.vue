<script setup>
    import NavBar from '../components/NavBar.component.vue'
    import Footer from '../components/Footer.component.vue'
    import experiencesData from '../assets/experiences.json';
    import { ref, onMounted } from 'vue';


    const experiences = ref([]);

    onMounted(async () => {
        try {
            experiences.value = experiencesData;
        } catch (e) {
            console.error("Failed to load experiences data", e);
        }
    });

</script>

<template>
    <NavBar />

    <div class="flex-1 flex flex-col items-center justify-center">
        <div class="flex flex-col items-center gap-4">
            <h3 class="text-3xl font-bold p-4">Experencies</h3>
            <div class="w-4xl border rounded-2xl p-4 border-neutral-700 hover:border-neutral-300 transition-all duration-300 hover:shadow-lg hover:scale-105" v-for="experience in experiences" :key="experience.id">
                <a :href="experience.url" target="_blank" class="flex text-left gap-3">
                    <div class="flex flex-col">
                        <h6 class="text-xl">{{ experience.name }}</h6>
                        <p class="text-sm">{{ experience.description }}</p>
                        <p class="text-sm">{{ experience.time }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <Footer />
</template>
