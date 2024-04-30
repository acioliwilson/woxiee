<template>
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
</template>

<script>
import InitialServices from '@/components/InitialServices.vue'
export default {
  components: {
    InitialServices,
  }
}
</script>