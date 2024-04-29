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
      <div class="col-md-4 text-light">
        <img src="@/assets/images/w-icon.png" alt="W Icon">
      </div>
    </div>
  </div>
  <img src="@/assets/images/long-waves.png" alt="Waves" class="long-waves">
</header>

<section class="about-us container mt-5">
  <p class="text-center">Na Woxiee, não apenas construímos sites - nós criamos experiências digitais excepcionais que impulsionam seu sucesso online. Com anos de experiência e uma equipe apaixonada, estamos comprometidos em oferecer não apenas designs deslumbrantes, mas também funcionalidades poderosas que elevam sua marca a novos patamares. Nossa abordagem centrada no cliente e nossa dedicação à inovação nos diferenciam, garantindo que cada projeto seja único e impactante. Junte-se a nós para uma jornada digital emocionante, onde sua visão se torna realidade.</p>
  <router-link class="btn-outline-purple" to="/a-woxiee">Descubra Mais</router-link>
</section>

<section class="services container my-5">
  <h2 class="d-flex align-items-center justify-content-center gap-4">
    <img src="@/assets/images/right-arrow.png">
    <span>Somos especialistas em</span>
    <img src="@/assets/images/left-arrow.png">
  </h2>
  <div class="cards-flex">
    <div class="s-card">
      <div class="s-card-body">
        <img src="@/assets/images/custom-design-icon.png" alt="Custom Design Icon">
        <p>
          <span>Design Personalizado</span><br />
          Nossos especialistas em design transformam suas ideias em realidade visualmente deslumbrante, garantindo que seu site se destaque da concorrência.
        </p>
        <router-link class="btn-fill-gradient" to="/servicos">Saiba Mais</router-link>
      </div>
    </div>
    <div class="s-card">
      <div class="s-card-body">
        <img src="@/assets/images/responsive-design-icon.png" alt="Responsive Design Icon">
        <p>
          <span>Desenvolvimento Web Responsivo</span><br />
          Criamos sites intuitivos e responsivos que funcionam perfeitamente em todos os dispositivos, proporcionando uma experiência excepcional.
        </p>
        <router-link class="btn-fill-gradient" to="/servicos">Saiba Mais</router-link>
      </div>
    </div>
    <div class="s-card">
      <div class="s-card-body">
        <img src="@/assets/images/seo-icon.png" alt="SEO Icon">
        <p>
          <span>Otimização para Motores de Busca (SEO)</span><br />
          Aumente sua visibilidade online e conquiste mais tráfego orgânico com nossas estratégias de SEO personalizadas e eficazes.
        </p>
        <router-link class="btn-fill-gradient" to="/servicos">Saiba Mais</router-link>
      </div>
    </div>
    <div class="s-card">
      <div class="s-card-body">
        <img src="@/assets/images/ecommerce-icon.png" alt="Ecommerce Icon">
        <p>
          <span>Integração de E-Commerce</span><br />
          Potencialize suas vendas online com uma loja virtual totalmente funcional e segura, projetada para impulsionar o crescimento do seu negócio.
        </p>
        <router-link class="btn-fill-gradient" to="/servicos">Saiba Mais</router-link>
      </div>
    </div>
    <div class="s-card">
      <div class="s-card-body">
        <img src="@/assets/images/support-icon.png" alt="Support Icon">
        <p>
          <span>Manutenção e Suporte Contínuo</span><br />
          Mantenha seu site sempre atualizado e protegido com nossos serviços de manutenção e suporte técnico especializado.
        </p>
        <router-link class="btn-fill-gradient" to="/servicos">Saiba Mais</router-link>
      </div>
    </div>
  </div>
</section>
<img src="@/assets/images/default-wave.png" style="margin: 0 auto; display: table;">
<section class="jobs">
  <div class="jobs-bg">
    <div class="container">
      <h2 class="text-center text-light">
        Jobs
      </h2>
      <img src="@/assets/images/job-underline-title.png" class="job-underline-title">
      <div class="jobs-wrapper">
        <img src="@/assets/images/job-01.png" alt="Dashboard Subscribers Resultados da Mega">
        <img src="@/assets/images/job-02.png" alt="AvisaLoto SPA">
        <img src="@/assets/images/job-03.png" alt="Resultados da Mega SPA">
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
      <div class="col-md-3">
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

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import url('@/assets/css/settings.css');

body { font-family: 'Open Sans', sans-serif !important; }
a { text-decoration: none !important; }

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
.services h2 {
  font-family: 'Open Sans', sans-serif;
  font-size: 35px;
  font-weight: 600;
  color: #000;
  margin: 0 auto;
}

.cards-flex {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 30px;
}
.s-card {
  padding: 30px;
  border-radius: 15px;
  border: 1px solid #EAEAEA;
}
.s-card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 250px !important;
  text-align: center !important;
}
.s-card-body p {
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.4;
}
.s-card-body p span {
  font-weight: 700;
  color: var(--text-purple);
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
</style>
