<template>
    <div class="container">
        <div class="quotes-and-partnerships">
            <h1>ORÇAMENTOS</h1>
            <p>Estamos aqui para transformar suas ideias em realidade. Se você está procurando um serviço personalizado ou deseja um orçamento para seu projeto, por favor, clique no botão abaixo. Nosso time estará pronto para analisar suas necessidades e oferecer uma solução que atenda perfeitamente às suas expectativas.</p>
            <div class="quote-wrapper-btn">
                <button class="quote-btn" @click="redirect">Fazer Orçamento</button>
            </div>
        </div>
        <div class="sugestions">
            <h1>DÚVIDAS E SUGESTÕES</h1>
            <p>Estamos ansiosos para ouvir de você. Se você tem alguma dúvida, feedback ou sugestão sobre nossos produtos ou serviços, por favor, não hesite em compartilhar conosco através do formulário abaixo. Estamos sempre buscando melhorar e sua opinião é extremamente valiosa para nós.</p>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Seu nome" v-model="name">
            </div>
            <div class="form-group mt-3">
                <input type="email" class="form-control" placeholder="Seu email" v-model="email">
            </div>
            <div class="form-group mt-2">
                <textarea placeholder="Sua mensagem" rows="10" class="form-control" v-model="message"></textarea>
            </div>
            <div class="form-group mt-2">
                <button class="send-message" @click="sendContact">
                    <span>Enviar</span>
                    <i class="bi bi-arrow-right-short"></i>
                </button>
            </div>
        </div>
        <div class="d-flex gap-4 align-items-center justify-content-center" style="width: 100%; margin: 100px 0;">
            <a href="#" class="social-icon-b">
                <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="social-icon-b">
                <i class="bi bi-twitter-x"></i>
            </a>
            <a href="#" class="social-icon-b">
                <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="social-icon-b">
                <i class="bi bi-linkedin"></i>
            </a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
        }
    },
    methods: {
        redirect() {
            this.$router.push('/oferta/criar-site')
        },
        async sendContact() {
            const data = {
                name: this.name,
                email: this.email,
                message: this.message,
            }
            await axios.post('https://woxiee-sendmail2.vercel.app/send', data)
            .then((response) => {
                console.log(response)
                this.$router.go('/')
            }).catch(error => console.error(error))
        }
    }
}
</script>

<style lang="css" scoped>
.quotes-and-partnerships {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0 0 0;
}
.quotes-and-partnerships h1 {
    font-size: 45px;
    font-weight: 800;
    color: #333;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
}
.quotes-and-partnerships p {
    text-align: center;
    font-size: 17px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: #333;
    margin-top: 10px;
}
.quote-wrapper-btn {
    margin-top: 20px;
    border: 1px solid #D6B2FF;
    padding: 4px;
    background: none;
    border-radius: 15px;
    transition: .5s ease all !important;
}
.quote-btn {
    padding: 16px 30px;
    border-radius: 13px;
    color: #FFF;
    background: #9E58F0;
    display: table;
    border: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 17px;
    font-weight: 600;
    transition: .4s ease all;
}
.quote-wrapper-btn:hover {
    border-radius: 100px;
    background: #a8fae5;
    border: 1px solid #a8fae5;
}
.quote-btn:hover {
    border-radius: 100px;
    background: #25e6b5;
}


.sugestions {
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sugestions h1 {
    font-size: 45px;
    font-weight: 800;
    color: #333;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
}
.sugestions p {
    text-align: center;
    font-size: 17px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: #333;
    margin-top: 10px;
}
.form-group {
    width: 100%;
}
.send-message {
    padding: 14px 30px;
    border-radius: 100px;
    background: #9E58F0;
    border: none;
    color: #FFF;
    font-size: 17px;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    transition: .3s ease all;
    display: flex;
    gap: 7px;
    align-items: center;
}
.send-message:hover {
    background: #25e6b5;
}
.send-message i {
    margin-left: -20px;
    opacity: 0;
    transition: .3s ease all;
}
.send-message:hover i {
    opacity: 1 !important;
    margin-left: 0 !important;
}

.social-icon-b {
    color: #9E58F0;
    font-size: 24px;
}
</style>