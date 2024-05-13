<template>
<MainHeader />
<router-view />
<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <router-link class="footer-logo" to="/">
                    <img src="@/assets/images/woxiee-footer-logo.png" alt="Woxiee Footer Logo">
                </router-link>
                <p class="address">
                    Rua Palmeira dos Índios, 103, Maceió, Alagoas, Brasil<br />
                    (82) 99601-2515<br />
                    contato@woxiee.com<br />
                </p>
            </div>
            <div class="col-md-3 site">
                <h2 class="purple-text">Site</h2>
                <div class="map-links">
                    <router-link to="/a-woxiee">Sobre Nós</router-link>
                    <router-link to="/servicos">Serviços</router-link>
                    <router-link to="/blog">Blog</router-link>
                    <router-link to="/contato">Contato</router-link>
                </div>
            </div>
            <div class="col-md-3 follow">
                <h2 class="purple-text">Siga-nos</h2>
                <div class="d-flex gap-3 align-items-center social-icons-btn">
                    <a href="#" class="social-icon">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#" class="social-icon">
                        <i class="bi bi-twitter-x"></i>
                    </a>
                    <a href="#" class="social-icon">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#" class="social-icon">
                        <i class="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
export default {
    components: {
        MainHeader,
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import url('@/assets/css/settings.css');

body {
    font-family: 'Open Sans', sans-serif !important;
}

a {
    text-decoration: none !important;
}

::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}

::-webkit-scrollbar-thumb {
    background: violet;
}

.jobs {
    background: #141933 !important;
    display: table;
    width: 100%;
    height: 550px;
    margin-top: 50px;
}

.jobs-bg {
    width: 100%;
    height: 550px;
    background: url('@/assets/images/jobs-background.png') no-repeat;
    background-position: right;
    display: table;
}

.jobs-bg .container h2 {
    font-size: 35px;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    margin-top: 50px;
}

.job-underline-title {
    margin: 0 auto;
    display: table;
}

.jobs-wrapper {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 30px;
    align-items: baseline;
    flex-wrap: wrap;
}

img.dots {
    margin: 50px auto;
    display: table;
}

footer {
    width: 100%;
    min-height: 300px;
    background: #333;
    display: table;
    margin-top: 70px;
    color: #FFF;
    padding: 50px 0;
}

footer div div div p {
    margin-top: 12px;
    font-size: 17px;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.4;
}

.map-links {
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.map-links a {
    color: #FFF;
    font-family: 'Open Sans', sans-serif;
}

.purple-text {
    color: #C98EFE;
    font-size: 35px;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
}

.social-icon {
    color: #FFF;
    font-size: 18px;
}

a.router-link-exact-active {
  color: #C98EFE !important;
  font-weight: 600;
}

@media screen and (max-width: 1000px) {
    .main-navbar {
        width: 100%;
        height: 100vh;
        background: #141933;
        position: fixed;
        top: 0;
        left: -100%;
        transition: .3s ease all;
        flex-direction: column;
        justify-content: center !important;
        align-items: center !important;
        z-index: 200;
    }

    .w-icon {
        display: none;
    }

    .long-waves {
        transform: translateY(0) !important;
        margin-top: 40px;
    }

    .banner-title {
        margin: 0 !important;
    }

    .left-arrow {
        display: none !important;
    }

    .btn-toggle {
        display: table;
        width: 25px;
        height: 25px;
        cursor: pointer;
        z-index: 999 !important;
    }

    .btn-toggle span {
        height: 3px;
        background: #FFF;
        border-radius: 100;
        display: table;
        transition: .3s ease all;
    }

    .btn-toggle span:nth-child(1) {
        width: 20px;
    }

    .btn-toggle span:nth-child(2) {
        width: 25px;
        margin: 7px 0;
    }

    .btn-toggle span:nth-child(3) {
        width: 20px;
    }

    #navCheck {
        display: none;
    }

    #navCheck:checked~nav.main-navbar {
        left: 0 !important;
    }
    #navCheck:checked ~ .btn-toggle span:nth-child(2) {
      transform: translateX(-10px);
      opacity: 0;
      margin: 0;
    }
    #navCheck:checked ~ .btn-toggle span:nth-child(1) {
      transform: rotate(45deg) translateY(4px);
    }
    #navCheck:checked ~ .btn-toggle span:nth-child(3) {
      transform: rotate(-45deg) translateY(-4px);
    }
    header { min-height: auto !important; padding-bottom: 50px; }
}

@media screen and (max-width: 1500px) {
    .long-waves {
        display: none !important;
    }

    .follow {
        margin-top: 20px !important;
        margin-bottom: 50px !important;
    }
}

#navCheck {
  display: none;
}

@media screen and (max-width: 700px) {
    .footer-logo {
        margin: 0 auto; 
        display: table;
    }
    .address { margin: 20px 0 40px 0; line-height: 1.6; }
    .address, .site, .follow { text-align: center; }
    .follow { margin-top: 50px !important; }
    .social-icons-btn { justify-content: center; margin-top: 20px; }
}
</style>
