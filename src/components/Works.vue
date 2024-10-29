<script>


</script>


<template>
    <div class="works-container">
        <h3>My Works</h3>
        <!-- <p>Here are some projects i've worked on.</p> -->
        <!-- <div class="article-div">
            <article>
                <img class="img-article" src="./icons/DiscordRicca.png" alt="" loading="lazy">
                <img class="img-hover" src="./icons/DiscordHoverDef2.png" alt="" loading="lazy">
            </article>

            <article>
                <img class="img-article" src="./icons/Avada.png" alt="" loading="lazy">
                <img class="img-hover" src="./icons/AvadaHoverDef5.png" alt="" loading="lazy">
            </article>
            <article>
                <img class="img-article" src="./icons/Ricky Sfondi_Tavola disegno 1-02.png" alt="" loading="lazy">
                <img class="img-hover" src="./icons/Ricky Sfondi_Tavola disegno 1-02.png" alt="" loading="lazy">
            </article>

            <article>
                <img class="img-article" src="./icons/dungeon-work.png" alt="" loading="lazy">
                <img class="img-hover" src="./icons/DD.png" alt="" loading="lazy">
            </article>

            <article>
                <img class="img-article" src="./icons/marvel-work.png" alt="">
                <img class="img-hover" src="./icons/marvel.png" alt="">
            </article>
        </div> -->

        <div class="slider" style="
        --width: 100px;
        --height: 50px;
        --quantity: 10;
        ">
            <div class="list">
                <div class="item" style="--position: 1">
                    <p>BookaVacay</p>
                </div>
                <div class="item" style="--position: 2">
                    <p>Discord</p>
                </div>
                <div class="item" style="--position: 3">
                    <p>PlanaVacay</p>
                </div>
                <div class="item" style="--position: 4">
                    <p>Marvel</p>
                </div>
                <div class="item" style="--position: 5">
                    <p>D & D</p>
                </div>
                <div class="item" style="--position: 6">
                    <p>Whatsapp</p>
                </div>
                <div class="item" style="--position: 7">
                    <p>BookaVacay</p>
                </div>
                <div class="item" style="--position: 8">
                    <p>Marvel</p>
                </div>
                <div class="item" style="--position: 9">
                    <p>PlanaVacay</p>
                </div>
                <div class="item" style="--position: 10">
                    <p>Discord</p>
                </div>
                <!-- <div class="item" style="--position: 11"><img src="./icons/discordfont.png" alt=""></div> -->
                <!-- <div class="item" style="--position: 12"><img src="./icons/avadafont.png" alt=""></div> -->
                <!-- <div class="item" style="--position: 13"><img src="./icons/bookafont.png" alt=""></div> -->
                <!-- <div class="item" style="--position: 14"><img src="./icons/d&dfont.png" alt=""></div> -->
                <!-- <div class="item" style="--position: 15"><img src="./icons/marvelfont.png" alt=""></div> -->
            </div>
        </div>
        <div class="slider" reverse="true" style="
        --width: 250px;
        --height: 200px;
        --quantity: 5;
        ">
            <div class="list">
                <div class="item" style="--position: 1"><img src="./icons/provaslider.jpg" alt=""></div>
                <div class="item" style="--position: 2"><img src="./icons/provaslider.jpg" alt=""></div>
                <div class="item" style="--position: 3"><img src="./icons/provaslider.jpg" alt="">
                </div>
                <div class="item" style="--position: 4"><img src="./icons/provaslider.jpg" alt=""></div>
                <div class="item" style="--position: 5"><img src="./icons/provaslider.jpg" alt=""></div>
                <!-- <div class="item" style="--position: 6"><img src="./icons/DiscordRicca.png" alt=""></div>
                <div class="item" style="--position: 7"><img src="./icons/Avada.png" alt=""></div>
                <div class="item" style="--position: 8"><img src="./icons/Ricky Sfondi_Tavola disegno 1-02.png" alt="">
                </div>
                <div class="item" style="--position: 9"><img src="./icons/dungeon-work.png" alt=""></div>
                <div class="item" style="--position: 10"><img src="./icons/marvel-work.png" alt=""></div> -->
            </div>
        </div>
        <div class="space-div"></div>
    </div>
</template>


<style>
.slider {
    width: 100%;
    height: var(--height);
    overflow: hidden;
    mask-image: linear-gradient(to right,
            transparent,
            #000 15% 85%,
            transparent)
}

.slider .list {
    display: flex;
    width: 100%;
    min-width: calc(var(--width) * var(--quantity));
    position: relative;
    align-items: center;
}

.slider .list .item {
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: autoRun 10s linear infinite;
    animation-delay: calc((10s / var(--quantity)) * (var(--position) - 1)) !important;
    transition: filter 0.5s;
}

@keyframes autoRun {
    from {
        left: 100%;
    }

    to {
        left: calc(var(--width) * -1);
    }
}

.slider .list .item p {
    width: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.slider .list .item img {
    width: 100%;
}

.slider[reverse="true"] .item {
    animation: reversePlay 10s linear infinite;
}

@keyframes reversePlay {
    from {
        left: calc(var(--width) * -1);
    }

    to {
        left: 100%;
    }
}

.img-article {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: opacity 0.5s ease, transform 0.3s ease;
    object-fit: cover;
}

.slider:hover .item {
    animation-play-state: paused !important;
    filter: grayscale(1);
}

.slider .item:hover {
    filter: grayscale(0);
}

.img-hover {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.5s ease;
    object-fit: cover;


}

.works-container {
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
}

.works-container h3 {
    font-size: 35px;
}

.works-container p {
    font-size: 22px;
}


.article-div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 27px;
    margin-top: 80px;
    column-gap: 27px;
}

.img-article {
    opacity: 1;
    transform: scale(1);

}

.img-hover {
    opacity: 0;
}

article {
    position: relative;
    width: 100%;
    height: 230px;
    border-radius: 10px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}



/* article:hover .img-article {
    opacity: 0;
    transform: scale(1.1);
}

article:hover .img-hover {
    opacity: 1;
} */



.space-div {
    height: 100px;
}

article button {
    display: none;
    position: relative;
    left: 50%;
    bottom: 50px;
    transform: translate(-50%, -50%);
    padding: 0.5rem;
    width: 10rem;
    border-radius: 10px;
    border: 1px solid white;
    background-color: transparent;
    color: white;
    font-size: 0.9rem;
    transition: background-color 0.5s ease;
}

.router {
    display: none;
    position: relative;
    left: 50%;
    bottom: 50px;
    transform: translate(-50%, -50%);
    padding: 0.5rem;
    width: 10rem;
    border-radius: 10px;
    border: 1px solid white;
    background-color: transparent;
    color: white;
    font-size: 0.9rem;
    transition: background-color 0.5s ease;
}



article:hover .router {
    display: block;
}

article .router::before {
    transform: scaleX(0);
    transform-origin: bottom right;
    border-radius: 10px;

}

article .router:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;

}

article .router::before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: 10px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: rgb(255, 78, 71);
    z-index: -1;
    transition: transform .3s ease;
}

article .router {
    position: relative;
}


@media (orientation: landscape) {
    body {
        grid-auto-flow: column;
    }
}

/* ----------------------MEDIA TABLET-------------------------------*/

@media (min-width: 768px) and (max-width: 992px) {
    .img-article {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        transition: opacity 0.5s ease, transform 0.3s ease;
        object-fit: cover;
    }

    .img-hover {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;
        transition: opacity 0.5s ease;
        object-fit: cover;


    }

    .works-container {
        max-width: 700px;
        margin: 0 auto;
        text-align: center;
    }

    .works-container h3 {
        font-size: 35px;
    }

    .works-container p {
        font-size: 22px;
    }


    .article-div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 27px;
        margin-top: 80px;
        column-gap: 27px;
    }

    .img-article {
        opacity: 1;
        transform: scale(1);

    }

    .img-hover {
        opacity: 0;
    }

    article {
        position: relative;
        width: 100%;
        height: 230px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }



    /* article:hover .img-article {
        opacity: 0;
        transform: scale(1.1);
    }

    article:hover .img-hover {
        opacity: 1;
    } */



    .space-div {
        height: 100px;
    }
}

/* ----------------------MEDIA PHONE-------------------------------*/

@media (max-width: 768px) {
    .img-article {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        transition: opacity 0.5s ease, transform 0.3s ease;
        object-fit: cover;
    }

    .img-hover {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;
        transition: opacity 0.5s ease;
        object-fit: cover;


    }

    .works-container {
        max-width: 500px;
        margin: 0 auto;
        text-align: center;
    }

    .works-container h3 {
        font-size: 35px;
    }

    .works-container p {
        font-size: 22px;
    }


    .article-div {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        row-gap: 27px;
        margin-top: 80px;
        column-gap: 27px;
        margin: 10px;
    }

    .img-article {
        opacity: 1;
        transform: scale(1);

    }

    .img-hover {
        opacity: 0;
    }

    article {
        position: relative;
        width: 100%;
        height: 230px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }



    /* article:hover .img-article {
        opacity: 0;
        transform: scale(1.1);
    }

    article:hover .img-hover {
        opacity: 1;
    } */



    .space-div {
        height: 100px;
    }
}
</style>