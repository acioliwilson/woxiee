<template>
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

<style lang="css" scoped>
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
</style>
