<template>
<header>
    <div class="container mt-4">
        <div class="d-flex justify-content-between align-items-center">
            <router-link to="/"><img src="@/assets/images/woxiee-logo.png" alt="Woxiee logo"></router-link>
            <nav class="main-navbar">
                <router-link to="/a-woxiee">A Woxiee</router-link>
                <router-link to="/serviços">Serviços</router-link>
                <router-link to="/portfolio">Portfólio</router-link>
                <router-link to="/blog">Blog</router-link>
                <router-link to="/contato">Diga Olá</router-link>
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
                    Transforme sua presença digital com sites que impressionam, criados sob medida para você pela Woxiee. Desde designs arrojados até funcionalidades avançadas, nós trazemos sua visão à vida na web. Seja notado, seja lembrado, seja Woxiee!
                </p>
                <router-link class="btn-fill-gradient mt-5" to="/servicos">Comece Agora!</router-link>
            </div>
            <div class="col-md-4 text-light w-icon">
                <img src="@/assets/images/w-icon.png" alt="W Icon" class="img-fluid">
            </div>
        </div>
    </div>
    <img src="@/assets/images/long-waves.png" alt="Waves" class="long-waves">
</header>
</template>

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
</style>
