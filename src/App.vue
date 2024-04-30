<template>
<MainHeader />

<section class="about-us container mt-5">
  <p class="text-center">Na Woxiee, não apenas construímos sites - nós criamos experiências digitais excepcionais que impulsionam seu sucesso online. Com anos de experiência e uma equipe apaixonada, estamos comprometidos em oferecer não apenas designs deslumbrantes, mas também funcionalidades poderosas que elevam sua marca a novos patamares. Nossa abordagem centrada no cliente e nossa dedicação à inovação nos diferenciam, garantindo que cada projeto seja único e impactante. Junte-se a nós para uma jornada digital emocionante, onde sua visão se torna realidade.</p>
  <router-link class="btn-outline-purple" to="/a-woxiee">Descubra Mais</router-link>
</section>

<InitialServices />

<img src="@/assets/images/default-wave.png" style="margin: 0 auto; display: table;">

<section class="jobs">
  <div class="jobs-bg">
    <div class="container">
      <h2 class="text-center text-light">
        Jobs
      </h2>
      <img src="@/assets/images/job-underline-title.png" class="job-underline-title">
      <div class="jobs-wrapper mb-5">
        <img src="@/assets/images/job-01.png" alt="Dashboard Subscribers Resultados da Mega" class="img-fluid">
        <img src="@/assets/images/job-02.png" alt="AvisaLoto SPA" class="img-fluid">
        <img src="@/assets/images/job-03.png" alt="Resultados da Mega SPA" class="img-fluid">
      </div>
    </div>
  </div>
</section>

<img src="@/assets/images/dots.png" class="dots">

<section class="testimonials container">
  <h2>O que falam de nós</h2>
  <article class="left">
    <div class="content">
      <p>Incrível experiência de trabalho com a Woxiee! Eles entenderam completamente nossas necessidades e entregaram um site que superou nossas expectativas. Altamente recomendado!</p>
      <p class="author">Maria Silva, CEO da Elys Enxovais</p>
    </div>
    <img src="@/assets/images/vertical-dots.png">
  </article>

  <article class="right">
    <img src="@/assets/images/vertical-dots.png">
    <div class="content">
      <p>Equipe profissional e dedicada! Fiquei impressionado com a atenção aos detalhes e o compromisso em garantir que nosso site fosse perfeito. Obrigado, Woxiee!</p>
      <p class="author">João Oliveira, Proprietário da Apoio Logística</p>
    </div>
  </article>

  <article class="left">
    <div class="content">
      <p>A Woxiee não apenas criou um site visualmente atraente, mas também nos ajudou a otimizá-lo para os mecanismos de busca. Vimos um aumento significativo no tráfego desde então. Excelente trabalho!</p>
      <p class="author">Ana Santos, Diretora de Marketing da QLYTYC Advisory</p>
    </div>
    <img src="@/assets/images/vertical-dots.png">
  </article>
</section>

<footer>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <router-link class="footer-logo" to="/">
          <img src="@/assets/images/woxiee-footer-logo.png" alt="Woxiee Footer Logo">
        </router-link>
        <p>
          Rua Palmeira dos Índios, 103, Maceió, Alagoas, Brasil<br />
          (82) 99601-2515<br />
          contato@woxiee.com<br />
        </p>
      </div>
      <div class="col-md-3">
        <h2 class="purple-text">Site</h2>
        <div class="map-links">
          <router-link to="/a-woxiee">Sobre Nós</router-link>
          <router-link to="/servicos">Serviços</router-link>
          <router-link to="/portfolio">Portfólio</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/contato">Contato</router-link>
        </div>
      </div>
      <div class="col-md-3 follow">
        <h2 class="purple-text">Siga-nos</h2>
        <div class="d-flex gap-3 align-items-center">
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
import InitialServices from './components/InitialServices.vue';
export default {
  components: {
    MainHeader,
    InitialServices,
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

body { font-family: 'Open Sans', sans-serif !important; }
a { text-decoration: none !important; }

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
.testimonials h2 {
  font-size: 35px;
  font-weight: 600;
  color: #000;
  margin: 0 auto;
  text-align: center;
}
article.left {
  border-left: 3px solid #C98EFE;
  display: flex;
  align-items: center;
  gap: 30px;
  padding-left: 30px;
  max-width: 1000px;
  margin: 20px auto;
}
article.left div p {
  margin: 0;
}
p.author {
  font-weight: 700;
}

article.right {
  border-right: 3px solid #C98EFE;
  display: flex;
  align-items: center;
  gap: 30px;
  padding-right: 30px;
  max-width: 1000px;
  margin: 20px auto;
}
article.right div p {
  margin: 0;
}
footer {
  width: 100%;
  min-height: 350px;
  background: #333;
  display: table;
  margin-top: 50px;
  color: #FFF;
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
/*
a.router-link-exact-active {
  color: #42b983;
}
*/



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
</style>
