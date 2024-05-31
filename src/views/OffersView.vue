<template>
<div class="container my-5">
    <div class="hot-offers">
        <div class="d-flex gap-3 align-items-center">
            <img src="@/assets/images/right-arrow.png" alt="">
            <h1>Melhores Ofertas</h1>
            <img src="@/assets/images/left-arrow.png" alt="">
        </div>
        <div class="container my-5">
            <div class="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
                <button type="button" class="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
                <i class="bi bi-box-seam-fill"></i>
                <h1 class="text-body-emphasis">Site + Email Marketing</h1>
                <p class="col-lg-6 mx-auto mb-4">
                    Transforme seu negócio com um site profissional e campanhas de email marketing eficazes. Atraia mais clientes, aumente suas vendas e destaque-se no mercado. Solicite seu orçamento agora e comece a crescer online!
                </p>
                <div>
                    <span class="smaller-value">A PARTIR DE</span>
                    <p class="bigger-value">R$ 300</p>
                </div>
                <router-link to="/oferta/criar-site" class="btn-fill-gradient mb-5 mt-3 mx-auto">
                    Aproveitar a Oferta
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="css">
.hot-offers {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.hot-offers div h1 {
    font-size: 35px;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    color: #333;
    text-align: center;
}

.bi-box-seam-fill {
    font-size: 35px;
    color: var(--btn-outline-purple);
}

.smaller-value {
    color: #b4b4b4;
    font-weight: 500;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
}
.bigger-value {
    color: rgb(4, 104, 185);
    font-family: 'Open Sans', sans-serif;
    font-size: 35px;
    font-weight: 600;
    margin: -10px 0 0 0;
}

.g-forms {
    width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #FFF;
    z-index: 99999;
}
</style>
