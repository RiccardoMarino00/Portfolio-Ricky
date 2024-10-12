<script>
export default {
    data() {

        return {
            sliderList: null,
            thumbnailItems: [],
            slider: null,
            thumbNail: null,
            currentIndex: 0,
        }
    },
    mounted() {

        // assicuro che il DOM sia completamente caricato prima di eseguire
        this.$nextTick(() => {

            this.slider = this.$el; //elemento radice (slider)
            this.sliderList = this.slider.querySelector('.list');
            this.thumbNail = this.$el.querySelector('.thumbnail');
            // this.thumbnailItems = this.thumbNail.querySelectorAll('.item');
            this.thumbnailItems = this.$el.querySelectorAll('.thumbnail .item');

            //sposta la prima miniatura in fondo
            this.thumbNail.appendChild(this.thumbnailItems[0]);
        })






    },
    computed: {

        orderedThumbnails() {
        }

    },
    methods: {

        moveSlider(direction) {

            // let sliderItems = this.sliderList.querySelectorAll('.item');

            // if (direction === 'next') { //se viene cliccato bottone next
            //     const firstSliderItem = sliderItems[0];
            //     const firstThumbnailItem = this.thumbnailItems[1];
            //     console.log(firstThumbnailItem)

            //     this.sliderList.appendChild(firstSliderItem); //sposta il primo elemento slider alla fine

            //     const currentVisibleThumbnail = this.thumbnailItems[0];
            //     console.log(currentVisibleThumbnail)
            //     this.thumbNail.appendChild(currentVisibleThumbnail); //sposta miniatura corrente alla fine

            //     this.thumbNail.insertBefore(firstThumbnailItem, this.thumbNail.firstChild); //inserisce prossima miniatura all'inizio
            //     console.log(this.thumbNail);
            //     // aggiorna la lista delle miniature
            //     this.thumbnailItems = this.thumbNail.querySelectorAll('.item');
            //     this.slider.classList.add('next');

            // } else {

            //     // se bottone prev viene cliccato
            //     const lastSliderItem = sliderItems[sliderItems.length - 1];
            //     const lastThumbnailItem = this.thumbnailItems[this.thumbnailItems.length - 2];

            //     this.sliderList.prepend(lastSliderItem); //sposta ultimo elemento slider all'inizio
            //     const currentLastThumbnail = this.thumbnailItems[this.thumbnailItems.length - 1];
            //     this.thumbNail.prepend(currentLastThumbnail); //sposta l'ultima miniatura all'inizio

            //     // // Sposta la penultima miniatura nella prima posizione
            //     this.thumbNail.insertBefore(lastThumbnailItem, this.thumbNail.firstChild);

            //     // Aggiorna la lista delle miniature 
            //     this.thumbnailItems = this.thumbNail.querySelectorAll('.item');
            //     this.slider.classList.add('prev')
            // }

            // // Rimuove la classe di animazione dopo il termine dell'animazione
            // this.slider.addEventListener('animationend', () => {

            //     if (direction === 'next') {

            //         this.slider.classList.remove('next');

            //     } else {

            //         this.slider.classList.remove('prev');
            //     }


            // }, { once: true }) // L'evento è gestito una sola volta

            let sliderItems = this.sliderList.querySelectorAll('.item');

            if (direction === 'next') {
                this.sliderList.appendChild(sliderItems[0])
                this.thumbNail.appendChild(this.thumbnailItems[0])
                console.log('this.slider', this.slider)
                this.slider.classList.add('next')
            } else {
                this.sliderList.prepend(sliderItems[sliderItems.length - 1])
                this.thumbNail.prepend(this.thumbnailItems[this.thumbnailItems.length - 1])
                this.slider.classList.add('prev')
            }

            this.slider.addEventListener('animationend', () => {
                if (direction === 'next') {
                    this.slider.classList.remove('next')
                } else {
                    this.slider.classList.remove('prev')
                }
            }, { once: true });

        }
    }

}



</script>

<template>
    <div class="slider">
        <div class="list">
            <div class="item">
                <img src="../components/icons/blu.jpg" alt="">
                <div class="content">
                    <div class="title">Title</div>
                    <div class="type">Front</div>
                    <div class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, nemo
                        perspiciatis delectus cumque mollitia, odio praesentium id quidem facere recusandae doloribus
                        vel repudiandae fugiat? Rem.</div>
                    <div class="button">
                        <button>SEE MORE</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="../components/icons/giallo.jpg" alt="">
                <div class="content">
                    <div class="title">Title</div>
                    <div class="type">Front</div>
                    <div class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, nemo
                        perspiciatis delectus cumque mollitia, odio praesentium id quidem facere recusandae doloribus
                        vel repudiandae fugiat? Rem.</div>
                    <div class="button">
                        <button>SEE MORE</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="../components/icons/rosso.jpg" alt="">
                <div class="content">
                    <div class="title">Title</div>
                    <div class="type">Front</div>
                    <div class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, nemo
                        perspiciatis delectus cumque mollitia, odio praesentium id quidem facere recusandae doloribus
                        vel repudiandae fugiat? Rem.</div>
                    <div class="button">
                        <button>SEE MORE</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="../components/icons/verde.jpg" alt="">
                <div class="content">
                    <div class="title">Title</div>
                    <div class="type">Front</div>
                    <div class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, nemo
                        perspiciatis delectus cumque mollitia, odio praesentium id quidem facere recusandae doloribus
                        vel repudiandae fugiat? Rem.</div>
                    <div class="button">
                        <button>SEE MORE</button>
                    </div>
                </div>
            </div>
            <!-- <div class="item">
                <img src="../components/icons/viola.jpg" alt="">
                <div class="content">
                    <div class="title">Title</div>
                    <div class="type">Front</div>
                    <div class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, nemo
                        perspiciatis delectus cumque mollitia, odio praesentium id quidem facere recusandae doloribus
                        vel repudiandae fugiat? Rem.</div>
                    <div class="button">
                        <button>SEE MORE</button>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="thumbnail">
            <div class="item">
                <img src="../components/icons/blu.jpg" alt="">
            </div>
            <div class="item">
                <img src="../components/icons/giallo.jpg" alt="">
            </div>
            <div class="item">
                <img src="../components/icons/rosso.jpg" alt="">
            </div>
            <div class="item">
                <img src="../components/icons/verde.jpg" alt="">
            </div>
            <!-- <div class="item">
                <img src="../components/icons/viola.jpg" alt="">
            </div> -->
        </div>
        <div class="arrows">
            <button @click="moveSlider('prev')" class="prev"> prev </button>
            <button @click="moveSlider('next')" class="next"> next </button>
        </div>
    </div>

</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

.slider {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

.slider .list .item {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
}

.slider .list .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slider .list .item .content {
    position: absolute;
    top: 20%;
    width: 1140px;
    max-width: 80%;
    left: 50%;
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    transform: translateX(-50%);
}

.slider .list .item .content .title,
.slider .list .item .content .type {
    font-size: 5em;
    font-weight: bold;
    line-height: 1.3em;
}

.slider .list .item .content .type {
    color: rgb(255, 78, 71);
}

.slider .list .item .content .description {
    font-size: 14px;
}

.slider .list .item .content .button {
    margin-top: 20px;
}

.slider .list .item .content .button button {
    border: none;
    background-color: #eee;
    cursor: pointer;
    letter-spacing: 2px;
    padding: 7px 15px;
    font-weight: 500;
    transition: 0.4s;
}

.slider .list .item .content .button button:hover {
    background-color: rgb(255, 78, 71);
    color: #eee;
}

.thumbnail {
    display: flex;
    gap: 20px;
    position: absolute;
    bottom: 50px;
    left: 45%;
    width: max-content;
    z-index: 100;
    /* transform: translateX(-50%);
    transition: transform 0.5s ease; */
}

.thumbnail .item {
    width: 150px;
    height: 220px;
    flex-shrink: 0;
    position: relative;
    /* transition: transform 0.5s ease; */
}

.thumbnail .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
}

.arrows {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
}

.arrows button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(255, 78, 71);
    border: none;
    color: #fff;
    font-weight: bold;
    transition: 0.5s;
    cursor: pointer;
}

.arrows button:hover {
    background-color: #fff;
    color: #000;
}


/* animation */

.slider .list .item:nth-child(1) {
    z-index: 1;
}

.slider .list .item:nth-child(1) .content .title,
.slider .list .item:nth-child(1) .content .type,
.slider .list .item:nth-child(1) .content .description,
.slider .list .item:nth-child(1) .content .button {
    transform: translateY(50px);
    filter: blur(20px);
    opacity: 0;
    animation: showContent 0.5s 1s linear 1 forwards;
}

@keyframes showContent {
    to {
        transform: translateY(0px);
        filter: blur(0px);
        opacity: 1;
    }
}

.slider .list .item:nth-child(1) .content .title {
    animation-delay: 0.4s;
}

.slider .list .item:nth-child(1) .content .type {
    animation-delay: 0.6s;
}

.slider .list .item:nth-child(1) .content .description {
    animation-delay: 0.8s;
}

.slider .list .item:nth-child(1) .content .button {
    animation-delay: 1s;
}

/* animation for button next */
.slider.next .list .item:nth-child(1) img {
    width: 150px;
    height: 220px;
    position: absolute;
    bottom: 50px;
    left: 50%;
    border-radius: 30px;
    animation: showImage 0.5s linear 1 forwards;
}

@keyframes showImage {
    to {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
}

.slider.next .thumbnail .item:nth-last-child(1) {
    overflow: hidden;
    animation: showThumbnail 0.5s linear 1 forwards;
}

.slider.prev .list .item img {
    z-index: 100;
}

@keyframes showThumbnail {
    from {
        width: 0;
        opacity: 0;
    }
}

.slider.next .thumbnail {
    animation: effectNext .5s linear 1 forwards;
}

/* .slider.next .thumbnail .item {
    animation: slideNext 0.5s forwards
}

.slider.prev .thumbnail .item {
    animation: slidePrev 0.5s forwards
}

@keyframes slideNext {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
}

@keyframes slidePrev {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(100%);
    }
} */

@keyframes effectNext {
    from {
        transform: translatex(150px)
    }
}

.slider.prev .list .item:nth-child(2) {
    z-index: 2;
}

.slider.prev .list .item:nth-child(2) img {
    position: absolute;
    bottom: 0;
    left: 0;
    animation: outFrame 0.5s linear 1 forwards;
}

@keyframes outFrame {
    to {
        width: 150px;
        height: 220px;
        bottom: 50px;
        left: 50%;
        border-radius: 20px
    }

}

.slider.prev .thumbnail .item:nth-child(1) {
    overflow: hidden;
    opacity: 0;
    animation: showThumbnail .5s linear 1 forwards;
}

.slider.prev .list .item:nth-child(1) .content .title,
.slider.prev .list .item:nth-child(1) .content .type,
.slider.prev .list .item:nth-child(1) .content .description,
.slider.prev .list .item:nth-child(1) .content .button {

    animation: contentOut 0.5s 1s linear 1 forwards;
}

@keyframes contentOut {
    to {
        transform: translateY(-150px);
        filter: blur(20px);
        opacity: 0
    }
}

@media screen and (max-width: 768px) {
    .thumbnail .item {
        width: 100px;
        height: 170px;
        flex-shrink: 0;
        position: relative;
        /* transition: transform 0.5s ease; */
    }
}
</style>