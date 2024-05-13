<template>
<section class="services container">
    <h2 class="d-flex align-items-center justify-content-center gap-4">
        <img src="@/assets/images/right-arrow.png" class="img-fluid">
        <span>Somos especialistas em</span>
        <img src="@/assets/images/left-arrow.png" class="img-fluid">
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
</template>

<style lang="css" scoped>
.services {
    overflow-x: hidden;
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
.btn-fill-gradient {
    color: #FFF !important;
    font-family: 'Open Sans', sans-serif !important;
}

@media screen and (max-width: 700px) {
    .s-card { width: 100%; text-align: center; }
    .s-card-body { width: 100% !important; max-width: 100% !important; justify-content: center !important; }
}
</style>
