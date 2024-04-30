<template>
<div class="container my-5">
    <img src="@/assets/images/a-woxiee.png" alt="A Woxiee">
    <div class="row">
        <div class="col-md-8 story mt-4">
            <p>
                A jornada da Woxiee começou em 2023, quando um grupo de visionários decidiu unir forças para criar uma agência de desenvolvimento web como nenhuma outra. Nossa paixão pela tecnologia e pelo design nos impulsionou a começar esta jornada, com o objetivo de oferecer soluções digitais excepcionais para empresas de todos os tamanhos. Desde então, temos crescido e nos adaptado, mas nossa missão permanece a mesma: capacitar nossos clientes a alcançarem o sucesso online, oferecendo serviços inovadores e personalizados.
            </p>
            <p>
                Na Woxiee, somos uma equipe diversificada de profissionais talentosos, cada um trazendo habilidades únicas para a mesa. De designers criativos a desenvolvedores experientes e estrategistas de marketing digital, nossa equipe está unida por um compromisso com a excelência e a satisfação do cliente. 
            </p>
            <div class="team">
                <div class="collaborator">
                    <img src="@/assets/images/team-01.png" alt="Wilson Acioli - CEO, Founder and Software Engineer">
                    <p class="c-name">Wilson Acioli</p>
                    <p>
                        CEO, Founder &amp;<br />
                        Software Engineer
                    </p>
                </div>
                <div class="add"><span>+</span></div>
            </div>
        </div>
        <div class="col-md-4">
            <img src="@/assets/images/w-woxiee-icon.png" class="img-fluid w-woxiee-icon">
        </div>
    </div>
    <img src="@/assets/images/default-wave.png" class="d-table mx-auto py-5">
    <p class="text-center">
        Na Woxiee, nossos valores são a espinha dorsal do nosso negócio. Estamos comprometidos com a qualidade excepcional em tudo o que fazemos, buscando constantemente a inovação e aprimoramento. Colocamos nossos clientes em primeiro lugar, sempre buscando superar suas expectativas e garantir sua satisfação. Transparência, integridade e trabalho em equipe são fundamentais em cada interação que temos, e estamos empenhados em construir relacionamentos de confiança e duradouros com nossos clientes.
    </p>
</div>
</template>

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

@media screen and (max-width: 1000px) {
    .w-woxiee-icon {
        display: none;
    }
}
</style>