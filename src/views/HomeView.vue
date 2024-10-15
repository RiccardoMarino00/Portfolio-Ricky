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
        // setTimeout(() => {
        //     this.loading = false;

        //     setTimeout(() => {
        //         this.isFading = false;
        //     }, 500);

        // }, 3000);
        if (!sessionStorage.getItem('hasVisited')) {
            setTimeout(() => {
                this.loading = false;

                setTimeout(() => {
                    this.isFading = false;
                }, 500);

                sessionStorage.setItem('hasVisited', 'true');
            }, 2500);

        } else {
            this.loading = false;
            this.isFading = false;
        }


    },
};
</script>

<template>
    <!-- <div v-if="loading" class="loading-screen">
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
    </div> -->
    <div>
        <div v-if="loading" class="loader">
            <div class="face">
                <div class="circle"></div>
            </div>
            <div class="face">
                <div class="circle"></div>
            </div>
        </div>
        <div v-else class="content view">
            <Navbar class="block" />
            <Hero class="block" />
            <Skills class="block" />
            <Works class="block" />
            <Footer />
        </div>
    </div>

</template>

<style>
::-webkit-scrollbar-track {
    border: 5px solid white;
    /* border-color: transparent; */
    /* background-color: #b2bec3; */
    background-color: #FF4E47;
}

::-webkit-scrollbar {
    width: 13px;
    background-color: #dfe6e9;
}

::-webkit-scrollbar-thumb {
    background-color: #FF4E47;
    border-radius: 10px;
    border: 4px solid #FFEE50;
}

@keyframes appear {
    from {
        opacity: 0;
        scale: 0.5;
        clip-path: inset(100% 100% 0 0);
    }

    to {
        opacity: 1;
        scale: 1;
        clip-path: inset(0 0 0 0);

    }
}

.block {
    animation: appear linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
}

/* .middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
} */

/* .bar {
    width: 10px;
    height: 70px;
    background: #fff;
    display: inline-block;
    transform-origin: bottom center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
     box-shadow: 5px 10px 20px inset rgba(255, 23, 25.2); 
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
        background: ;
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
*/

@keyframes elegantFadeIn {
    0% {
        opacity: 0;
    }

    10% {
        opacity: 0.1;
    }

    20% {
        opacity: 0.2;
    }

    30% {
        opacity: 0.3;
    }

    40% {
        opacity: 0.4;
    }

    50% {
        opacity: 0.5;
    }

    60% {
        opacity: 0.6;
    }

    70% {
        opacity: 0.7;
    }

    80% {
        opacity: 0.8;
    }

    90% {
        opacity: 0.9;
    }

    100% {
        opacity: 1;
    }
}

.content {
    animation: 1.5s ease-out 0s 1 elegantFadeIn;
}


/* ---------------SECOND LOADER---------------- */


.loader {
    width: 20em;
    height: 20em;
    font-size: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
}

.loader .face {
    position: absolute;
    border-radius: 50%;
    border-style: solid;
    animation: animate 3s linear infinite;
}

.loader .face:nth-child(1) {
    width: 100%;
    height: 100%;
    color: #FFEE50;
    border-color: currentColor transparent transparent currentColor;
    border-width: 0.2em 0.2em 0em 0em;
    --deg: -45deg;
    animation-direction: normal;
}

.loader .face:nth-child(2) {
    width: 70%;
    height: 70%;
    color: #FF4E47;
    border-color: currentColor currentColor transparent transparent;
    border-width: 0.2em 0em 0em 0.2em;
    --deg: -135deg;
    animation-direction: reverse;
}

.loader .face .circle {
    position: absolute;
    width: 50%;
    height: 0.1em;
    top: 50%;
    left: 50%;
    background-color: transparent;
    transform: rotate(var(--deg));
    transform-origin: left;
}

.loader .face .circle::before {
    position: absolute;
    top: -0.5em;
    right: -0.5em;
    content: '';
    width: 1em;
    height: 1em;
    background-color: currentColor;
    border-radius: 50%;
    box-shadow: 0 0 2em,
        0 0 4em,
        0 0 6em,
        0 0 8em,
        0 0 10em,
        0 0 0 0.5em rgba(255, 255, 0, 0.1);
}

@keyframes animate {
    to {
        transform: rotate(1turn);
    }
}
</style>