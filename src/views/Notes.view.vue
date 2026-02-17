1try <script setup>
    import NavBar from '../components/NavBar.component.vue'
    import Footer from '../components/Footer.component.vue'
    import Note from '../components/Note.component.vue'
</script>

<template>
    <NavBar />

    <div>
        <Note noteName="Test" />
        <Note noteName="Docker" />
    </div>

    <Footer />
</template>
