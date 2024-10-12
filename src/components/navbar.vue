<template>
    <nav>
        <div class="container">
            <div class="row">
                <div class="nav-logo">
                    <img class="logo" src="../components/icons/logo-no-background.png" alt="">
                </div>
                <div></div>
                <div></div>
                <div></div>

                <div class="link-nav">
                    <a href="mailto:riccardo.marino09@gmail.com" class="contact-me">Contact me!</a>
                    <a class="link"></a>
                </div>
            </div>


        </div>
    </nav>
</template>


<style scoped>
nav {
    height: 98px;
    padding: 20px 0 20px 0;
}

.container {

    width: 80%;
    margin: 0 auto;
}

.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.container-link-nav {
    display: flex;
    width: 100px;

}

.logo {
    width: 90px;
    height: 55px
}

.logo:hover {
    filter: grayscale();
}

.contact-me {
    border: 2px solid #FF4E47;
    padding: 10px;
    border-radius: 50px;
    color: #FF4E47;
    transition: background-color 480ms ease;

}

.contact-me:hover {
    background-color: #FF4E47;
    color: white;
}

.link-nav {
    width: 180px;
    align-items: center;
    display: flex;
    justify-content: space-between;
}


/*---------------------------- RESPONSIVE TABLET---------------------------------- */

@media screen and (max-width: 992px) {
    nav {
        height: 90px;
        padding: 20px 0 20px 0;
    }

    .container {
        width: 80%;
        margin: 0 auto;
    }

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    .container-link-nav {
        display: flex;
        width: 100px;

    }

    .logo {
        width: 90px;
        height: 55px
    }

    .logo:hover {
        filter: grayscale();
    }

    .contact-me {
        border: 2px solid #FF4E47;
        padding: 8px;
        border-radius: 50px;
        color: #FF4E47;
        transition: background-color 480ms ease;

    }

    .contact-me:hover {
        background-color: #FF4E47;
        color: white;
    }

    .link-nav {
        width: 180px;
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
}

/*---------------------------- RESPONSIVE PHONE---------------------------------- */
@media (max-width: 768px) {
    nav {
        height: 90px;
        padding: 20px 0 20px 0;
    }

    .container {

        width: 80%;
        margin: 0 auto;
    }

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    .container-link-nav {
        display: flex;
        width: 100px;

    }

    .logo {
        width: 90px;
        height: 55px
    }

    .logo:hover {
        filter: grayscale();
    }

    .contact-me {
        border: 2px solid #FF4E47;
        padding: 6px;
        border-radius: 50px;
        color: #FF4E47;
        transition: background-color 480ms ease;

    }

    .contact-me:hover {
        background-color: #FF4E47;
        color: white;
    }

    .link-nav {
        width: 180px;
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
}
</style>