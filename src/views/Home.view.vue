<script setup>
    import NavBar from '../components/NavBar.component.vue'
</script>

<template>
    <div class="min-h-screen">
        <NavBar />
        
        <main class="flex-1 flex items-center justify-center">
            <div class="text-center w-5xl border">

                <div class="flex p-4">
                    <img src="../assets/favicon.png" class="rounded-full w-68 h-68 border-4">
                    <div class="w-full text-left p-4 border">
                        <h1 class="text-6xl font-bold">Eli</h1>
                        <span class="text-lg">Hi, I'm Elia. I'm Italian and Polish.</span>
                    </div>
                </div>

                <div class="flex flex-col items-center space-y-2">
                    <h3 class="text-3xl font-bold">Contact me</h3>
                    <a href="mailto:contact@elisz11.com" class="text-lg hover:underline">contact@elisz11.com</a>
                </div>
            </div>
            <a href="https://colorhunt.co/palette/171717444444da0037ededed">palette</a>
        </main>
    </div>
</template>
