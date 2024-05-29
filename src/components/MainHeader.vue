<template>
<header>
    <div class="container mt-4">
        <div class="d-flex justify-content-between align-items-center">
            <router-link to="/"><img src="@/assets/images/woxiee-logo.png" class="img-fluid" alt="Woxiee logo"></router-link>
            <input type="checkbox" id="navCheck">
            <label for="navCheck" class="btn-toggle">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <nav class="main-navbar">
                <router-link to="/a-woxiee" @click="unChecked">A Woxiee</router-link>
                <router-link to="/servicos" @click="unChecked">Serviços</router-link>
                <router-link to="/blog" @click="unChecked">Blog</router-link>
                <router-link to="/contato" @click="unChecked">Diga Olá</router-link>
            </nav>
        </div>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 text-light">
                <h1 class="banner-title">
                    Desbloqueie seu Potencial Online <br />
                    com a <span class="purple">Woxiee</span>!
                </h1>
                <p class="banner-description">
                    Transforme sua presença digital com sites que impressionam, criados sob medida para você pela Woxiee. Desde designs arrojados até funcionalidades avançadas, nós trazemos sua visão à vida na web. <span style="font-weight: 700;">Seja notado, seja lembrado, seja Woxiee!</span>
                </p>
                <router-link class="btn-fill-gradient mt-5 btn-banner" to="/oferta" style="color: #FFF !important;">Comece Agora!</router-link>
            </div>
            <div class="col-md-4 text-light w-icon">
                <img src="@/assets/images/w-icon.png" alt="W Icon" class="img-fluid">
            </div>
        </div>
    </div>
    <img src="@/assets/images/long-waves.png" alt="Waves" class="long-waves">
</header>
</template>

<script>
export default {
    data() {
        return {
            check: false,
        }
    },
    methods: {
        unChecked() {
            document.getElementById('navCheck').checked = false
        }
    }
}
</script>

<style scoped>
header {
    width: 100%;
    min-height: 730px;
    background: var(--default-color);
    display: table;
}

.main-navbar {
    display: flex;
    align-items: center;
    gap: 40px;
    justify-content: flex-end;
}

.main-navbar a {
    text-decoration: none;
    color: #FEFDFF;
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    transition: .3s ease all;
}

.main-navbar a:hover {
    color: var(--hover-light-link);
}

.purple {
    color: var(--text-purple);
}

.banner-title {
    color: #FFF;
    font-family: 'Open Sans', sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 1.3;
    margin: 60px 0 0 0;
}

.banner-description {
    line-height: 1.5;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    margin-top: 20px;
}

.btn-fill-gradient {
    border-radius: 100px;
    padding: 15px 25px;
    color: #FFF;
    font-weight: 600;
    font-size: 18px;
    display: table;
    background-image: var(--btn-fill-gradient);
}

.long-waves {
    transform: translateY(-50px);
}

.btn-outline-purple {
    border-radius: 100px;
    border: 2px solid var(--btn-outline-purple);
    color: var(--btn-outline-purple);
    padding: 15px 25px;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    font-size: 17px;
    margin: 20px auto;
    display: table;
    transition: .3s ease all;
}

.btn-outline-purple:hover {
    background: var(--btn-outline-purple);
    color: #FFF;
}

@media screen and (max-width: 700px) {
    .banner-title, .banner-description { text-align: center; }
    .banner-description { margin-bottom: 40px; }
    .btn-banner { margin: 0 auto !important; }
}
</style>