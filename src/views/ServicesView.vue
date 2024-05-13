<template>
<div class="container my-5">
    <h1 class="page-title">O que fazemos?</h1>
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

<div class="container my-5">
    <div class="client res-ms"></div>
    <div class="infobox">
        <img src="@/assets/images/services/res-ms-profile.png" class="profile-img">
        <div>
            <h2>Resultados da Mega-Sena</h2>
            <p>Website desenvolvido com o objetivo de disponibilizar os resultados das principais loterias federais. Resultados automatizados através de uma API desenvolvida exclusivamente para o site.</p>
        </div>
    </div>
    <span class="serv-separator"></span>
</div>

<TestiMonials />
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

.client {
    width: 100%;
    height: 200px;
    border-radius: 15px;
    display: table;
}

.res-ms {
    background: url('@/assets/images/services/res-ms-head.png') no-repeat;
    background-size: cover;
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
.page-title {
    font-size: 45px;
    font-family: 'Open Sans', sans-serif !important;
    font-weight: 800;
    color: #333 !important;
    text-align: center;
    margin: 0 auto;
    text-transform: uppercase;
}

.infobox {
    margin-top: -140px;
    padding: 0 50px;
    display: flex;
    align-items: center;
    gap: 30px;
}
.infobox div h2 {
    margin-top: 90px;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 35px;
}
.infobox div p {
    line-height: 1.7;
    font-family: 'Open Sans', sans-serif;
    font-size: 17px;
}
.serv-separator {
    width: 100%;
    max-width: 300px;
    height: 1px;
    display: table;
    background: #EAEAEA;
    margin: 70px auto;
}

@media screen and (max-width: 700px) {
    .infobox {
        flex-direction: column;
    }
    .infobox div h2 {
        margin: 0 !important;
        text-align: center;
    }
    .infobox div p {
        text-align: center;
    }
}
</style>