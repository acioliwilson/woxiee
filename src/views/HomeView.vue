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

<TestiMonials />
</template>

<script>
import InitialServices from '@/components/InitialServices.vue'
import TestiMonials from '@/components/TestiMonials.vue';
export default {
  components: {
    InitialServices,
    TestiMonials,
  }
}
</script>