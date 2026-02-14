<script setup>
    import { computed, ref, onMounted } from 'vue';
    import NavBar from '../components/NavBar.component.vue'
    import Footer from '../components/Footer.component.vue'
    import skills from '../assets/skills.json';
    import projects from '../assets/projects.json';
    
    const mySkills = computed(() => {
        return [...skills]
            .slice(0, 4);
    });

    const latestProjects = computed(() => {
        return [...projects]
            .slice(0, 4);
    });

</script>

<template>
    <NavBar />
    
    <div class="flex-1 flex flex-col items-center justify-center">
        <div class="w-full max-w-5xl p-2">
            <div class="flex gap-10 items-center justify-center w-full">
                <img src="../assets/favicon.png" class="rounded-full w-48 h-48 border-4 transition-all duration-300 hover:shadow-lg hover:scale-110">
                <div class="w-full max-w-md text-left p-4 border rounded-2xl border-neutral-700 hover:border-neutral-300 text-lg transition-all duration-300 hover:shadow-lg hover:scale-110">
                    <h1 class="text-6xl font-bold">Eli</h1>
                    <span >AKA elisz11</span>
                    <span class="flex items-center gap-1 mt-2"><img src="../assets/images/pos.svg" class="w-5 h-5" alt="location"><span>Italy and Poland</span></span>
                </div>
            </div>

            <div class="flex items-center justify-center w-full p-4">
                <div class="w-full flex justify-center">
                    <a href="https://www.last.fm/user/elisz11">
                    <img 
                        src="https://lastfm-recently-played.vercel.app/api?user=elisz11&count=4" 
                        alt="Last.fm recently played tracks" 
                        class="rounded-2xl"
                    />
                    </a>
                </div>

                <div class="w-full flex justify-center">
                    <a href="https://steamcommunity.com/id/elisz11/">
                        <img
                            src="https://steam-stat.vercel.app/api?profileName=elisz11"
                            alt="Steam recently played games"
                            class="rounded-2xl"
                        />
                    </a>
                </div>
            </div>

            <div class="flex flex-col items-center w-full">
                <h3 class="text-3xl font-bold p-4">My skills</h3>
                <section class="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 px-4">
                    <div class="flex flex-col items-center gap-3 p-4 transition-all duration-300 hover:scale-110" v-for="skill in mySkills" :key="skill.id">
                        <img class="w-16 h-16" :src="skill.image" :alt="skill.name"/>
                        <span class="font-semibold text-lg">{{ skill.name }}</span>
                    </div>
                </section>
            </div>

            <div class="flex flex-col items-center">
                <h3 class="text-3xl font-bold p-4">My projects</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl px-4">
                    <div class="border rounded-2xl p-4 border-neutral-700 hover:border-neutral-300 transition-all duration-300 hover:shadow-lg hover:scale-110" v-for="project in latestProjects" :key="project.id">
                        <a :href="project.url" target="_blank" class="flex text-left gap-3">
                            <img :src="project.image" class="h-18 w-18 object-cover rounded-lg" :alt="project.name">
                            <div class="flex flex-col">
                                <h6 class="text-xl">{{ project.name }}</h6>
                                <p class="text-sm">{{ project.description }}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center">
                <h3 class="text-3xl font-bold p-4">Latest notes</h3>
                <div>
                    In progress
                </div>
            </div>

                <div class="flex flex-col items-center">
                <h3 class="text-3xl font-bold p-4">Latest photos</h3>
                <div>
                    In progress
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>
