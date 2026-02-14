<script setup>
    import { computed } from 'vue';
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
    <main class="min-h-screen">
        <NavBar />
        
        <div class="flex-1 flex flex-col items-center justify-center">

            <div class="w-full max-w-5xl p-2">

                <div class="flex gap-4 items-center justify-center w-full">

                    <img src="../assets/favicon.png" class="rounded-full w-48 h-48 border-4">

                    <div class="w-full max-w-md text-left p-4 border rounded-2xl border-neutral-700 hover:border-neutral-300 text-lg">

                        <h1 class="text-6xl font-bold">Eli</h1>
                        <span >AKA elisz11</span>
                        <span class="flex items-center gap-1 mt-2"><img src="../assets/images/pos.svg" class="w-5 h-5" alt="location"><span>Italy and Poland</span></span>

                    </div>

                </div>

                <div class="flex flex-col items-center">
                    <h3 class="text-3xl font-bold p-4">My skills</h3>
                    <section class="w-full grid grid-cols-4 text-center pt-4 gap-4">
                        <div class="flex flex-col items-center gap-2" v-for="skill in mySkills" :key="skill.id">
                            <img class="w-18 h-18 mb-2" :src="skill.image" :alt="skill.name"/>
                            <span class="font-semibold text-xl">{{ skill.name }}</span>
                        </div>
                    </section>
                </div>

                <div class="flex flex-col items-center">
                    <h3 class="text-3xl font-bold p-4">My projects</h3>
                    <div class="grid grid-cols-2 gap-2 ">
                        <div class="border rounded-2xl p-2 border-neutral-700 hover:border-neutral-300" v-for="project in latestProjects" :key="project.id">
                            <a :href="project.url" target="_blank" class="flex text-left p-2 gap-2">
                                <img :src="project.image" class="w-28 h-28 object-cover rounded-t-2xl mb-2" :alt="project.name">
                                <div class="flex flex-col">
                                    <h6 class="text-2xl font-semibold">{{ project.name }}</h6>
                                    <p class="text-lg">{{ project.description }}</p>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </main>
</template>
