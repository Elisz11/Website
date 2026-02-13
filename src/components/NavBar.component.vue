<script setup>
    import { useRouter } from 'vue-router'
    import { computed, ref } from 'vue'

    const router = useRouter()

    const links = computed(() => {
        return router.getRoutes()
            .filter(route => route.path !== '/:pathMatch(.*)*')
            .map(route => ({
                name: route.name?.charAt(0).toUpperCase() + route.name?.slice(1) || route.path,
                path: route.path
            }))
    })
</script>

<template>
    <main>
        <div class="flex w-full p-2 gap-2 justify-center">
            <div>
            </div>
            <div v-for="link in links" :key="link.path">
                <RouterLink :to="link.path">{{ link.name }}</RouterLink>
            </div>
        </div>
    </main>
</template>
