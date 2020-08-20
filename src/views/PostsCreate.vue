<template>
  <div>
      <form action="" @submit="cratePost">

            <div class="ui success message" v-if="message">
                <i class="fas fa-times" @click="closeMessage"></i>
                <div class="header">
                    Seu post foi adicionado com sucesso!
                </div>
                <p>A requisição foi completada com sucesso mas nenhum dado foi adicionado ao servidor, log da resposta esta no <strong>console</strong></p>
            </div>

            <div class="ui form">
                <div class="field">
                    <label>Titulo</label>
                    <input type="text" name="first-name" placeholder="Titulo" v-model="title" required>
                </div>
                <div class="field">
                    <label>Conteudo</label>
                    <textarea rows="12" v-model="body" required></textarea>
                </div>

                <div class="ui buttons">
                    <router-link to="/posts" class="ui button">Voltar</router-link>
                    <div class="or" data-text="ou"></div>
                    <button class="ui positive button loading" type="button" v-if="loading">Salvar</button>
                    <button class="ui positive button" type="submit" v-else>Salvar</button>
                </div>

            </div>
            
      </form>
      
  </div>
</template>

<script>
import { api } from '@/services.js'

export default {
    name: "PostsCreate",
    data(){
        return {
            title: '',
            body: '',
            loading: false,
            message: false
        }
    },
    methods: {
        cratePost(){
            event.preventDefault();
            this.loading = true;
            const options = {
                    method: 'POST',
                    body: JSON.stringify({
                    title: this.title,
                    body: this.body,
                    userId: 1
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
            api.post('/posts', options)
                .then(response => {
                    console.log(response);
                    this.loading = false;
                    response.status == 201 ? this.message = true : '';
                    setTimeout(() => {
                        this.message = false;
                    }, 10000);
                });
        },
        closeMessage(){
            this.message = false;
        }
    }
}
</script>

<style scoped>
    form{
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
    }
    .fas.fa-times{
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }
</style>