<template>
    <footer>
        <div class="button-div">
            <a class="see-more-button" href="#">See more on GitHub</a>
        </div>
        <div class="container">
            <img src="./icons/logo-white.png" alt="">
            <p>The fastest way to learn to code is to start building, <br> and let the challenges teach you.</p>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/riccardo-marino-149115315/"><font-awesome-icon
                            class="social-icon" :icon="['fab', 'linkedin-in']" /></a>
                </li>

                <li>
                    <a href="https://github.com/RiccardoMarino00"><font-awesome-icon class="social-icon"
                            :icon="['fab', 'github']" /></a>
                </li>

                <li>
                    <a href="mailto:riccardo.marino09@gmail.com"><font-awesome-icon class="social-icon"
                            :icon="['fas', 'envelope']" /></a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style scoped>
.container {
    background-color: #FF4E47;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    padding: 5rem;
    justify-content: space-evenly;
    font-size: 1.5rem;
    position: relative;
    z-index: 1;
}

.container img {
    width: 57px;
    height: 55px;
    position: relative;
}

ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
}

.container p {
    color: #fdcdcd;
}

.social-icon {
    color: #fdcdcd;
}

ul li {
    border: 1px solid #fdcdcd;
    margin: 1rem;
    border-radius: 50%;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    transition: background-color 500ms ease;
    width: 5rem;
}

ul li:hover {
    background-color: #fdcdcd;
}

ul li:hover .social-icon {
    color: #FF4E47;
}

.see-more-button {
    border: 2px solid #FF4E47;
    padding: 15px;
    border-radius: 50px;
    color: white;
    transition: background-color 480ms ease, padding 200ms ease;
    font-size: 20px;
    position: relative;
    top: 100px;
    z-index: 1000;
    background-color: #FF4E47;

}

.see-more-button:hover {
    background-color: #fdcdcd;
    color: #FF4E47;
    padding: 18px;
    border: none;
}

.button-div {
    text-align: center;
    position: relative;
}


/* ---------------------MEDIA PHONE----------------------------- */

@media (max-width: 768px) {
    ul {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        margin: 0 auto;
    }

    ul li {
        border: 1px solid #fdcdcd;
        margin: 1rem;
        border-radius: 50%;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        transition: background-color 500ms ease;
        width: 4rem;

    }

}
</style>