<script setup>
    import NavBar from '../components/NavBar.component.vue'
</script>

<template>
    <main class="min-h-screen">
        <NavBar />
        
        <div class="flex-1 flex flex-col items-center justify-center">
            <div class="text-center w-5xl">

                <div class="flex p-4">
                    <img src="../assets/favicon.png" class="rounded-full w-68 h-68 border-4">
                    <div class="w-full text-left p-4 border">
                        <h1 class="text-6xl font-bold">Eli</h1>
                        <span class="text-lg">Hi, I'm Elia. I'm Italian and Polish.</span>
                        <h3 class="text-3xl font-bold text-center">My skills</h3>
                        <section class="max-w-xl py-6">
                            <div class="grid grid-cols-4 gap-8 text-center">
                                <div class="flex flex-col items-center">
                                    <img class="w-10 h-10 mb-2" src="../assets/java.svg"/>
                                    <span class="font-semibold">Java</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <img class="w-10 h-10 mb-2" src="../assets/python.svg"/>
                                    <span class="font-semibold">Python</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <img class="w-10 h-10 mb-2" src="../assets/vue.svg"/>
                                    <span class="font-semibold">Vue.js</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <img class="w-10 h-10 mb-2" src="../assets/tailwind.svg"/>
                                    <span class="font-semibold">TailwindCSS</span>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>

                <div class="flex flex-col justify-center items-center">
                    
                </div>

                <div class="flex flex-col items-center">
                    <h3 class="text-3xl font-bold">My projects</h3>
                    
                </div>

                <div class="flex flex-col items-center">
                    <h3 class="text-3xl font-bold">Contact me</h3>
                    <a href="mailto:contact@elisz11.com" class="text-lg hover:underline">contact@elisz11.com</a>
                </div>
            </div>
        </div>
    </main>
</template>
