<script>


</script>


<template>
    <div class="works-container">
        <h3>My Works</h3>
        <p>Here are some projects i've worked on.</p>
        <div class="article-div">
            <article>
                <img class="img-article" src="./icons/DiscordRicca.png" alt="" loading="lazy">
                <img class="img-hover" src="./icons/DiscordHoverDef2.png" alt="" loading="lazy">
                <!-- <router-link class="router" to="/slider-works">Visit Detailed Page</router-link> -->
            </article>

            <article>
                <img class="img-article" src="./icons/Avada.png" alt="" loading="lazy">
                <img class="img-hover" src="./icons/AvadaHoverDef5.png" alt="" loading="lazy">
                <!-- <router-link class="router" to="/slider-works">Visit Detailed Page</router-link> -->
            </article>
            <article>
                <img class="img-article" src="./icons/Ricky Sfondi_Tavola disegno 1-02.png" alt="" loading="lazy">
                <img class="img-hover" src="./icons/Ricky Sfondi_Tavola disegno 1-02.png" alt="" loading="lazy">
                <!-- <router-link class="router" to="/slider-works">Visit Detailed Page</router-link> -->
            </article>

            <article>
                <img class="img-article" src="./icons/dungeon-work.png" alt="" loading="lazy">
                <img class="img-hover" src="./icons/DD.png" alt="" loading="lazy">
                <!-- <router-link class="router" to="/slider-works">Visit Detailed Page</router-link> -->
            </article>

            <article>
                <img class="img-article" src="./icons/marvel-work.png" alt="">
                <img class="img-hover" src="./icons/marvel.png" alt="">
                <!-- <router-link class="router" to="/slider-works">Visit Detailed Page</router-link> -->
            </article>
        </div>
        <div class="space-div"></div>
    </div>
</template>


<style>
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



article:hover .img-article {
    opacity: 0;
    transform: scale(1.1);
}

article:hover .img-hover {
    opacity: 1;
}



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



    article:hover .img-article {
        opacity: 0;
        transform: scale(1.1);
    }

    article:hover .img-hover {
        opacity: 1;
    }



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



    article:hover .img-article {
        opacity: 0;
        transform: scale(1.1);
    }

    article:hover .img-hover {
        opacity: 1;
    }



    .space-div {
        height: 100px;
    }
}
</style>