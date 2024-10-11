<script>

</script>

<template>
    <div class="container">
        <div class="intro">
            <h1>BookaVacay</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis architecto tempora voluptate
                nostrum aperiam a nesciunt temporibus consequatur! Harum, architecto?</p>
        </div>
        <div class="content">
            <div class="container-info">
                <div class="info">
                    <h2 class="red-txt">Frontend Technologies:</h2>
                    <p>SQL, CSS, PHP, LARAVEL</p>
                    <h2 class="red-txt">Backend Technologies:</h2>
                    <p>SQL, CSS, PHP, LARAVEL</p>
                    <h2 class="red-txt">Goals:</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt!</p>
                    <h2 class="red-txt">Description:</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit, libero aliquam sed, nemo
                        delectus voluptates alias molestias aliquid hic temporibus distinctio labore perferendis. At,
                        sed
                        officia. Optio, cupiditate quae?</p>
                </div>
            </div>
            <div class="image"></div>
        </div>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    height: 100vh;
    width: 100vw;
    border: 1px solid black;
    padding: 0 20px 0 20px;
}



.intro {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    padding: 50px 0 50px 0;
}

.intro h1 {
    margin-bottom: 30px;
    font-size: 48px;
}

.intro p {
    font-size: 22px;
}

.content {
    display: flex;
}

.info {

    padding: 30px 20px 30px 20px;
    text-align: center;
    margin: auto 0;
}

.info h2:nth-of-type(-n+4) {
    margin-bottom: 10px;
    font-size: 21px;

}

.info p:nth-of-type(-n+3) {
    margin-bottom: 20px;
}

.container-info {
    height: 454px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    max-width: 48%;
    display: flex;
    align-items: center;
}
</style>