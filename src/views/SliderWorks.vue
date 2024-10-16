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
            console.log(this.thumbnailItems);
            //sposta la prima miniatura in fondo

            this.thumbNail.appendChild(this.thumbnailItems[0]);

        })

    },

    methods: {

        moveSlider(direction) {

            let sliderItems = this.sliderList.querySelectorAll('.item');
            this.thumbnailItems = this.thumbNail.querySelectorAll('.item');

            if (direction === 'next') {
                this.sliderList.appendChild(sliderItems[0])
                this.thumbNail.appendChild(this.thumbnailItems[0])
                console.log('this.slider', this.slider)
                this.slider.classList.add('next')
                console.log(this.thumbnailItems);
            } else {
                this.sliderList.prepend(sliderItems[sliderItems.length - 1])
                this.thumbNail.prepend(this.thumbnailItems[this.thumbnailItems.length - 1])
                this.slider.classList.add('prev')
                console.log(this.thumbnailItems);

            }

            this.slider.addEventListener('animationend', () => {
                if (direction === 'next') {
                    this.slider.classList.remove('next')
                } else {
                    this.slider.classList.remove('prev')
                }
            }, { once: true });

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

        }
    }

}



</script>

<template>
    <div class="slider">
        <button>
            <router-link class="goback" to="/">Go Back</router-link>
        </button>
        <div class="list">
            <div id="blu" class="item">
                <img src="../components/icons/1295196.png" alt="">
                <div class="content">
                    <div class="title">Dicord</div>
                    <div class="type">Layout Replica</div>
                    <div class="description">I created a static replica of the Discord layout using HTML, CSS and
                        Flexbox to manage the positioning of elements.</div>
                    <div class="button">
                        <a class="github-link" href="https://github.com/RiccardoMarino00/htmlcss-discord">GitHub</a>
                    </div>
                </div>
            </div>
            <div id="giallo" class="item">
                <img src="../components/icons/plane.jpg" alt="">
                <div class="content">
                    <div class="title">BookaVacay</div>
                    <div class="type">House Rental Site</div>
                    <div class="description">BookaVacay is a group project simulating a holiday home rental site. The
                        front-end was developed using Vue, while Laravel with PHP and Blade was used for the back-end.
                        The site is supported by a MySQL database and includes flat management functionality via CRUD,
                        as well as login and logout systems to ensure a complete and secure user experience.</div>
                    <div class="button">
                        <a class="github-link">GitHub</a>
                    </div>
                </div>
            </div>
            <div id="rosso" class="item">
                <img src="../components/icons/bocaVacaySlide.jpg" alt="">
                <div class="content">
                    <div class="title">PlanaVacay</div>
                    <div class="type">Planning trip app</div>
                    <div class="description">PlanaVacay is an app designed to efficiently manage and organise holidays.
                        As a team project, we used MongoDB for the database, Vue for the front end and JavaScript to
                        implement CRUD operations, giving users an intuitive and comprehensive experience in planning
                        their holidays.</div>
                    <div class="button">
                        <a class="github-link">GitHub</a>
                    </div>
                </div>
            </div>
            <div id="verde" class="item">
                <img src="../components/icons/d&dWallpaper.jpg" alt="">
                <div class="content">
                    <div class="title">D & D</div>
                    <div class="type">Weapons and Characters for D&D</div>
                    <div class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, nemo
                        perspiciatis delectus cumque mollitia, odio praesentium id quidem facere recusandae doloribus
                        vel repudiandae fugiat? Rem.</div>
                    <div class="button">
                        <a href="https://github.com/RiccardoMarino00/D-and-D-backend" class="github-link">GitHub</a>
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
                        <a class="github-link">GitHub</a>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="thumbnail">
            <div id="blu2" class="item">
                <p>Discord</p>
                <img src="../components/icons/1295196.png" alt="">
            </div>
            <div id="giallo2" class="item">
                <p>BookaVacay</p>
                <img src="../components/icons/plane.jpg" alt="">
            </div>
            <div id="rosso2" class="item">
                <p>PlanaVacay</p>
                <img src="../components/icons/bocaVacaySlide.jpg" alt="">
            </div>
            <div id="verde2" class="item">
                <p>D & D</p>
                <img src="../components/icons/d&dWallpaper.jpg" alt="">
            </div>
            <!-- <div class="item">
                <img src="../components/icons/viola.jpg" alt="">
            </div> -->
        </div>
        <div class="arrows">
            <button @click="moveSlider('prev')" class="prev pulse"> prev </button>
            <button @click="moveSlider('next')" class="next pulse"> next </button>
        </div>
    </div>

</template>

<style scoped>
.thumbnail .item p {
    background-color: rgba(255, 78, 71, 0.5);
    width: max-content;
    padding: 5px 8px;
    border-radius: 8px;
    color: white;
    position: relative;
    top: 7%;
    right: 5%;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
}

.slider .goback {
    border: 2px solid #fff;
    padding: 10px;
    border-radius: 6px;
    color: #fff;
    transition: background-color 480ms ease;
    z-index: 1000;
    position: relative;
    top: 15px;
    left: 5px;
    cursor: pointer;

}

.slider .goback:hover {
    background-color: #FF4E47;
    color: white;
    border: 2px solid #FF4E47;

}

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

.slider .list .item .content .title {
    font-size: 5em;
    font-weight: bold;
    line-height: 1.3em;
}

.slider .list .item .content .type {
    color: rgb(255, 78, 71);
    font-size: 3em;
    font-weight: bold;
    line-height: 1.4em;
}

.slider .list .item .content .description {
    font-size: 18px;
}

.slider .list .item .content .button {
    margin-top: 20px;
}

.slider .list .item .content .button .github-link {
    border: 1px solid white;
    background-color: transparent;
    cursor: pointer;
    letter-spacing: 2px;
    padding: 7px 15px;
    font-weight: 500;
    transition: 0.4s;
    border-radius: 6px;
    /* color: rgb(255, 78, 71); */
}

.slider .list .item .content .button .github-link:hover {
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
    gap: 40px;
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
    /* Metti la prima slide sopra le altre */
}

/* Animazione di ingresso per il contenuto della slide corrente */
.slider .list .item:nth-child(1) .content .title,
.slider .list .item:nth-child(1) .content .type,
.slider .list .item:nth-child(1) .content .description,
.slider .list .item:nth-child(1) .content .button {
    transform: translateY(50px);
    /* Sposta il contenuto inizialmente verso il basso */
    filter: blur(20px);
    opacity: 0;
    animation: showContent 0.5s 1s linear 1 forwards;
}

@keyframes showContent {
    to {
        transform: translateY(0px);
        /* Riporta il contenuto nella posizione iniziale */
        filter: blur(0px);
        opacity: 1;
    }
}

.slider .list .item:nth-child(1) .content .title {
    animation-delay: 0.2s;
}

.slider .list .item:nth-child(1) .content .type {
    animation-delay: 0.3s;
}

.slider .list .item:nth-child(1) .content .description {
    animation-delay: 0.4s;
}

.slider .list .item:nth-child(1) .content .button {
    animation-delay: 0.5s;
}

/* animation for button next  riduce temporaneamente l'immagine principale*/
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

/* Animazione per la miniatura nell'ultima posizione quando viene cliccato 'next' */
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


/* Animazione per il movimento del carosello delle miniature */
.slider.next .thumbnail {
    animation: effectNext .5s linear 1 forwards;
}


/* Definisce lo spostamento laterale delle miniature */
@keyframes effectNext {
    from {
        transform: translatex(150px)
    }
}

/* animation for prev button */

/* Animazione per il bottone 'prev', riduce temporaneamente la seconda slide */
.slider.prev .list .item:nth-child(2) {
    z-index: 2;
}

/* Riduce temporaneamente l'immagine della seconda slide */
.slider.prev .list .item:nth-child(2) img {
    position: absolute;
    bottom: 0;
    left: 0;
    animation: outFrame 0.5s linear 1 forwards;
}


/* Anima la riduzione delle immagini verso la dimensione delle miniature */
@keyframes outFrame {
    to {
        width: 150px;
        height: 220px;
        bottom: 50px;
        left: 45%;
        border-radius: 20px
    }

}

/* Nasconde la miniatura all'inizio per poi farla apparire */
.slider.prev .thumbnail .item:nth-child(1) {
    overflow: hidden;
    opacity: 0;
    animation: showThumbnail .5s linear 1 forwards;
}


/* Anima il contenuto della slide in uscita quando si clicca 'prev' */
.slider.prev .list .item:nth-child(1) .content .title,
.slider.prev .list .item:nth-child(1) .content .type,
.slider.prev .list .item:nth-child(1) .content .description,
.slider.prev .list .item:nth-child(1) .content .button {

    animation: contentOut 0.5s 1s linear 1 forwards;
}


/* Definisce l'animazione per nascondere il contenuto */
@keyframes contentOut {
    to {
        transform: translateY(-150px);
        filter: blur(20px);
        opacity: 0
    }
}


.pulse {
    animation: pulse-animation 2s infinite;
}

.pulse:hover {
    animation: none;
}

@keyframes pulse-animation {
    0% {
        box-shadow: 0 0 0 0px rgba(255, 78, 71, 0.9);
    }

    100% {
        box-shadow: 0 0 0 30px rgba(255, 78, 71, 0);
    }
}

.current {
    filter: grayscale(100%);
}

@media screen and (max-width: 768px) {
    .thumbnail .item {
        width: 100px;
        height: 170px;
        flex-shrink: 0;
        position: relative;
        /* transition: transform 0.5s ease; */
    }

    .slider .list .item .content {
        padding-right: 0;
        top: 12%;
    }

    .slider .list .item .content .title {
        font-size: 30px;
    }

    .slider .list .item .content .type {
        font-size: 30px;
    }

    .slider .list .item .content .description {
        font-size: 16px;
    }

    .arrows {
        right: 60%;
    }

    .thumbnail .item p {
        padding: 3px 6px;
        font-size: 14px;
    }
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
</style>