<template>
    <div class="container">
        <div class="features">
            <div class="features-content">
                <article class="main-post">
                    <h1>6 DICAS PARA SEU SITE FICAR MAIS RÁPIDO</h1>
                    <p>Uma das características mais importantes no seu site é a velocidade de carregamento. Descubra 6 soluções inteligentes para o seu site e mantenha-o bem ranqueado nos motores de buscas do Google.</p>
                    <router-link to="/blog/post01" class="default-post-btn">Ver post</router-link>
                </article>
                <div class="others-features">
                    <div class="post">
                        <h2>AUMENTE SUAS VENDAS ONLINE UTILIZANDO O GOOGLE</h2>
                    </div>
                    <div class="post">
                        <h2>SAIBA O PORQUÊ SUAS CAMPANHAS DE EMAIL MARKETING NÃO FUNCIONAM</h2>
                    </div>
                    <div class="post">
                        <h2>SAIBA COMO VENDER ONLINE SEM PRECISAR TER PRODUTOS EM ESTOQUE</h2>
                    </div>
                </div>
            </div>
        </div>

        <article class="general-post">
            <h1>AUMENTE SUAS VENDAS: UTILIZE O CHATGPT PARA MELHORAR A COPY DOS SEUS ANUNCIOS</h1>
            <figure>
                <img src="@/assets/images/blog/google-chatgpt.png" alt="ChatGPT + Google Ads">
            </figure>
            <p>Você já parou para pensar no poder das palavras na hora de vender um produto ou serviço? A copy, ou seja, o texto utilizado nos seus anúncios, desempenha um papel crucial no sucesso das suas campanhas de marketing. É aí que entra o ChatGPT, uma ferramenta revolucionária de inteligência artificial que pode transformar completamente a maneira como você se comunica com seus clientes.</p>
            <p>Imagine poder criar textos persuasivos e envolventes em questão de minutos, sem precisar quebrar a cabeça buscando as palavras perfeitas. Com o ChatGPT, isso é totalmente possível. Essa poderosa ferramenta utiliza algoritmos avançados de linguagem natural para gerar textos sob medida para as necessidades do seu negócio, aumentando assim o engajamento do seu público-alvo.</p>
            <p>Além disso, o ChatGPT é capaz de aprender com os feedbacks e ajustar suas recomendações com base nas preferências e comportamentos dos seus clientes. Isso significa que, quanto mais você utilizar a ferramenta, mais precisa e eficaz será a sua copy, gerando assim um impacto ainda maior nas suas vendas. Não perca mais tempo lutando para encontrar as palavras certas para seus anúncios. Experimente hoje mesmo o ChatGPT e descubra como ele pode revolucionar a forma como você se comunica com seus clientes e impulsionar as suas vendas para o próximo nível. Garanta já o sucesso do seu negócio com copywriting inteligente e eficaz!</p>
        </article>
    </div>
    <div class="container" style="margin-top: 70px;">
        <div class="row">
            <div class="col-md-7">
                <h2 class="anothers-posts">Outros Posts</h2>
                <article class="item">
                    <p class="small-date">10.05.2024</p>
                    <p class="post-title">Domínios: .com ou .com.br? Qual a escolha ideal para impulsionar seu negócio online?</p>
                </article>
                <article class="item">
                    <p class="small-date">09.05.2024</p>
                    <p class="post-title">Estratégias de Email Marketing: 5 obstáculos cruciais que comprometem o sucesso das suas campanhas</p>
                </article>
                <article class="item">
                    <p class="small-date">08.05.2024</p>
                    <p class="post-title">Google Analytics Descomplicado: Como otimizar a velocidade de carregamento do seu site para melhores resultados?</p>
                </article>
                <article class="item">
                    <p class="small-date">07.05.2024</p>
                    <p class="post-title">Redes Sociais: Como escolher entre Instagram ou Facebook para sua estratégia de marketing?</p>
                </article>
                <article class="item">
                    <p class="small-date">06.05.2024</p>
                    <p class="post-title">SEO: 5 erros comuns que prejudicam o ranqueamento do seu site no Google</p>
                </article>
                <div class="pagination">
                    <button type="button" class="previous">
                        <i class="bi bi-chevron-double-left"></i>
                    </button>
                    <button type="button" class="previous">
                        <i class="bi bi-chevron-left"></i>
                    </button>
                    <button type="button" class="current-page">
                        01
                    </button>
                    <button type="button" class="next-page">
                        02
                    </button>
                    <button type="button" class="next-page">
                        03
                    </button>
                    <button type="button" class="next-page">
                        04
                    </button>
                    <button type="button" class="next-page">
                        05
                    </button>
                    <button type="button" class="next-page">
                        <i class="bi bi-chevron-double-right"></i>
                    </button>
                    <button type="button" class="next-page">
                        <i class="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div class="col-md-5 publi-wrapper">
                <img src="@/assets/images/blog/publi-post.png" alt="Woxiee">
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.features {
    width: 100%;
    min-height: 500px;
    padding: 70px;
    margin: 100px auto;
    border-radius: 15px;
    border: 1px solid #E7EDFB;
    background: #F8FAFF;
    display: flex;
    align-items: center;
}
.features-content {
    display: flex;
    gap: 60px;
    align-items: center;
}
.main-post {
    border-right: 1px solid #EAEAEA;
    padding-right: 60px;
}
.main-post h1 {
    max-width: 480px;
    font-size: 40px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    line-height: 1.4;
    margin-top: 0;
    color: #333 !important;
}
.main-post p {
    max-width: 480px;
    font-size: 17px;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
}
.main-post .default-post-btn {
    padding: 13px 25px;
    border-radius: 100px;
    background: #9E58F0;
    color: #FFF;
    font-weight: 700;
    font-size: 17px;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
    display: table;
    margin-top: 30px;
    transition: .3s ease all;
}
.main-post .default-post-btn:hover {
    background: #6936a3;
}

.others-features {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.others-features .post {
    border-bottom: 1px solid #EAEAEA;
}
.others-features .post h2 {
    max-width: 550px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
    color: #333 !important;
    font-family: 'Open Sans', sans-serif;
    padding-bottom: 20px;
    margin: 0;
}
.others-features .post:nth-last-child(1) {
    border: none !important;
}

.general-post {
    border-bottom: 2px solid #333;
    padding-bottom: 40px;
}

.general-post h1 {
    font-size: 40px;
    color: #333;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    text-align: center;
    margin: 0 auto;
    display: table;
    font-weight: 700;
}
.general-post figure {
    margin: 40px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
    overflow: hidden;
    border-radius: 15px;
}
.general-post p {
    text-align: center;
    font-size: 17px;
    line-height: 1.5;
    font-family: 'Open Sans', sans-serif;
}

h2.anothers-posts {
    font-size: 40px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 25px;
}

.item {
    margin-bottom: 30px;
}
.small-date {
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    color: #000;
    font-weight: 400;
    margin: 0;
    line-height: 1.5;
}
.post-title {
    font-weight: 700;
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    color: #000;
    line-height: 1.5;
}

.pagination {
    display: flex;
    width: 100%;
    height: 50px;
    gap: 10px;
    align-items: center;
}
.previous {
    width: 40px;
    height: 40px;
    background: #EFEFEF;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: #C6C6C6;
}
.current-page {
    width: 40px;
    height: 40px;
    background: #5628B4;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: #FFF;
    font-weight: 600;
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
}
.next-page {
    width: 40px;
    height: 40px;
    background: #D8BBFF;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: #6E6189;
    font-weight: 600;
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    transition: .3s ease all;
}
.next-page:hover {
    background: #5628B4;
    color: #fff;
}
.publi-wrapper {
    float: right;
}

@media screen and (max-width: 1000px) {
    .features {
        padding: 30px !important;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .features-content {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
    }
    .main-post {
        border-right: 0px solid #EAEAEA;
        border-bottom: 1px solid #EAEAEA;
        padding-bottom: 50px;
        padding-right: 60px;
    }
    figure {
        height: auto !important;
    }
    figure img {
        width: 100% !important;
        height: auto;
    }
    .pagination {
        justify-content: center;
    }
    .publi-wrapper {
        float: none !important;
    }
    .publi-wrapper img {
        max-width: 350px;
        transform: rotate(90deg);
        margin: 0 auto;
        display: table;
    }
}
</style>