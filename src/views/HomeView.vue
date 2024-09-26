<script>
import Navbar from '@/components/navbar.vue';
import Hero from '@/components/Hero.vue';
import Skills from '@/components/Skills.vue';
import Works from '@/components/Works.vue';
import Footer from '@/components/Footer.vue';

export default {
    components: {
        Navbar,
        Hero,
        Skills,
        Works,
        Footer
    },
};
</script>

<template>
    <Navbar />
    <Hero />
    <Skills />
    <Works />
    <Footer />
</template>