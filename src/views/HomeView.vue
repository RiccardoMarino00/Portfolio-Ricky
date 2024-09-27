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
    data() {
        return {
            loading: true,
            isFading: true,

        };
    },
    mounted() {
        setTimeout(() => {
            this.loading = false;

            setTimeout(() => {
                this.isFading = false;
            }, 500);

        }, 3000);


    },
};
</script>

<template>
    <div v-if="loading" class="loading-screen">
        <div class="middle">
            <div class="bar bar1"></div>
            <div class="bar bar2"></div>
            <div class="bar bar3"></div>
            <div class="bar bar4"></div>
            <div class="bar bar5"></div>
            <div class="bar bar6"></div>
            <div class="bar bar7"></div>
            <div class="bar bar8"></div>
        </div>
    </div>
    <div v-else class="content">
        <Navbar />
        <Hero />
        <Skills />
        <Works />
        <Footer />
    </div>
</template>

<style scoped>
.middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
}

.bar {
    width: 10px;
    height: 70px;
    background: #fff;
    display: inline-block;
    transform-origin: bottom center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    /* box-shadow: 5px 10px 20px inset rgba(255, 23, 25.2); */
    animation: loader 1.2s linear infinite;
}

.bar1 {
    animation-delay: 0.1s;
}

.bar2 {
    animation-delay: 0.2s;
}

.bar3 {
    animation-delay: 0.3s;
}

.bar4 {
    animation-delay: 0.4s;
}

.bar5 {
    animation-delay: 0.5s;
}

.bar6 {
    animation-delay: 0.6s;
}

.bar7 {
    animation-delay: 0.7s;
}

.bar8 {
    animation-delay: 0.8s;
}

@keyframes loader {
    0% {
        transform: scaleY(0.1);
        /* background: ; */
    }

    50% {
        transform: scaleY(1);
        background: #FF4E47;
    }

    100% {
        transform: scaleY(0.1);
        background: transparent;
    }
}



@keyframes slideInLeft {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0);
    }
}

.content {
    animation: 1s ease-out 0s 1 slideInLeft;
}
</style>