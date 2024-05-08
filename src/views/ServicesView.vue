<template>
<div class="container my-5">
    <img src="@/assets/images/servicos.png" alt="O que fazemos?" class="d-table mx-auto">
    <p class=" my-4 text-center default-p">
        Na Woxiee, estamos comprometidos em oferecer uma ampla gama de serviços de alta qualidade para atender às necessidades únicas do seu negócio. Desde o desenvolvimento de sites impressionantes até estratégias avançadas de otimização SEO, nossa equipe experiente está aqui para ajudar sua marca a se destacar online. Conheça mais sobre o que oferecemos abaixo:
    </p>
    <InitialServices />
</div>
<div class="mx-auto d-table">
    <div class="d-flex align-items-center gap-3">
        <span class="light-dot"></span>
        <span class="light-dot"></span>
        <span class="light-dot"></span>
        <span class="light-dot"></span>
        <span class="light-dot"></span>
    </div>
</div>
<div class="portfolio my-5">
    <div class="res-ms">
        <div class="container">
            <div class="imagebox">
                <img src="@/assets/images/resultados-da-mega-screenshot.png" class="screenshot mt-5">
                <div class="portfolio-info">
                    <h1>Resultados da Mega-Sena</h1>
                    <p>Website desenvolvido para o resultadosdamegasena.com.br com o objetivo de disponibilizar os resultados das principais loterias federais. Automatizamos a atualização e disponibilização destes resultados através de uma API desenvolvida em Node juntamente ao desenvolvimento do website. Todo o design também desenvolvido pela Woxiee, permite que os usuários naveguem facilmente e tenham tudo ao seu alcance.</p>
                    <a href="https://resultadosdamegasena.com.br" target="_blank">+ Ver mais</a>
                </div>
            </div>
        </div>
    </div>
    <div class="marketmail">
        <div class="container">
            <div class="imagebox">
                <div class="mktm-portfolio-info">
                    <h1>MarketMail</h1>
                    <p>Sistema de campanhas de email marketing desenvolvido com as tecnologias mais avançadas da atualidade. Dashboard completo com possibilidade de criação ou importação de lista de contatos, criação de campanha e customização de layout de email marketing. Sistema extremamente completo desenvolvido juntamente a sua API pela Woxiee.</p>
                    <a href="https://resultadosdamegasena.com.br" target="_blank">+ Ver mais</a>
                </div>
                <img src="@/assets/images/marketmail-screenshot.png" class="screenshot2 mt-5">
            </div>
        </div>
    </div>
</div>
<TestiMonials class="mt-negative" />
</template>

<script>
import InitialServices from '@/components/InitialServices'
import TestiMonials from '@/components/TestiMonials.vue';
export default {
    components: {
        InitialServices,
        TestiMonials,
    }
}
</script>
    
<style lang="css" scoped>
.story p {
    font-size: 17px;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.4;
    margin-bottom: 25px;
}

.team {
    display: flex;
    gap: 40px;
    align-items: center;
}

.collaborator {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.collaborator p {
    margin: 0;
    font-size: 14px;
}

.c-name {
    font-family: 'Open Sans', sans-serif;
    display: table;
    margin-top: 15px !important;
    font-weight: 600;
    margin-bottom: 12px;
}

.add {
    width: 35px;
    height: 35px;
    border-radius: 100px;
    background: #F1F4FB;
    color: #B8C0D1;
    font-size: 25px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
}

p.default-p {
    font-family: 'Open Sans', sans-serif !important;
    font-size: 17px !important;
    color: #333;
    line-height: 1.5 !important;
}

.res-ms {
    width: 100%;
    min-height: 750px;
    background: url('@/assets/images/resultados-da-mega-background.png') no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
}

.light-dot {
    width: 7px;
    height: 7px;
    display: table;
    background: #EAEAEA;
    border-radius: 100px;
}

.portfolio-info h1 {
    font-size: 40px;
    font-family: 'Open Sans', sans-serif;
    color: #000;
    line-height: 1.5;
    margin: 100px 0 0 0;
    font-weight: 700;
}
.portfolio-info p {
    color: #000;
    font-size: 17px;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    margin: 15px 0 30px 0;
}

.portfolio-info a {
    padding: 12px 20px;
    border-radius: 100px;
    background: #F1F4FB;
    color: #A3ACBF;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    transition: .3s ease all;
}
.portfolio-info a:hover {
    background: #C98EFE;
    color: #FFF;
}

.marketmail {
    width: 100%;
    min-height: 750px;
    background: url('@/assets/images/marketmail-background.png') no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
}

.mktm-portfolio-info h1 {
    font-size: 40px;
    font-family: 'Open Sans', sans-serif;
    color: #000;
    line-height: 1.5;
    margin: 50px 0 0 0;
    font-weight: 700;
}
.mktm-portfolio-info p {
    color: #000;
    font-size: 17px;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    margin: 15px 0 30px 0;
}

.mktm-portfolio-info a {
    padding: 12px 20px;
    border-radius: 100px;
    background: #F1F4FB;
    color: #A3ACBF;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    transition: .3s ease all;
}
.mktm-portfolio-info a:hover {
    background: #C98EFE;
    color: #FFF;
}

.imagebox {
    display: flex;
    gap: 40px;
    align-items: center;
    width: 100%;
}

.screenshot, .screenshot2 {
    width: 100%;
    max-width: 350px;
    height: auto;
}

@media screen and (max-width: 1000px) {
    .w-woxiee-icon {
        display: none;
    }
}
.mt-negative {
    margin-top: -70px;
    margin-bottom: 100px;
}
</style>
