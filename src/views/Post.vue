<template>
  <div class="post">
    <div class="ui success message" v-if="message">
        <i class="fas fa-times" @click="closeMessage"></i>
        <div class="header">
            Seu post foi atualizado com sucesso!
        </div>
        <p>A requisição foi completada com sucesso mas nenhum dado foi adicionado ao servidor, log da resposta esta no <strong>console</strong></p>
    </div>
    <div class="container">
        <div v-if="post">
            
           <form action="" @submit="updatePost">

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

            <div class="ui comments" v-if="comments">
                <h3 class="ui dividing header">Comentarios</h3>

                <div class="comment" v-for="comment in comments" :key="comment.id">
                    <a class="avatar">
                        <img :src="profiles[Math.floor(Math.random() * 10)]">
                    </a>
                    <div class="content">
                    <a class="author">{{comment.name}}</a>
                    <div class="metadata">
                        <span class="date">Today at 5:42PM</span>
                    </div>
                    <div class="text">
                        {{comment.body}}
                    </div>
                    </div>
                </div>


            </div>
        </div>

    </div>
  </div>
</template> 

<script>
import {api} from '@/services.js';

export default {
    name: "Post",
    props: ['id'],
    data(){
        return {
            post: null,
            comments: null,
            title: "",
            body: "",
            loading: false,
            message: false,
            profiles: [
                "https://semantic-ui.com/images/avatar2/small/lindsay.png",
                "https://semantic-ui.com/images/avatar2/small/matthew.png",
                "https://semantic-ui.com/images/avatar/small/jenny.jpg",
                "https://semantic-ui.com/images/avatar/small/veronika.jpg",
                "https://semantic-ui.com/images/avatar/small/tom.jpg",
                "https://semantic-ui.com/images/avatar/small/christian.jpg",
                "https://semantic-ui.com/images/avatar/small/matt.jpg",
                "https://semantic-ui.com/images/avatar/small/tom.jpg",
                "https://semantic-ui.com/images/avatar/small/stevie.jpg",
                "https://semantic-ui.com/images/avatar/small/helen.jpg",
            ]
        }
    },
    methods: {
        getPost(){
            api.get(`/posts/${this.id}`)
                  .then(response => {
                      this.post = response.data;
                      this.title = response.data.title;
                      this.body = response.data.body;
                  })
        },
        getComments(){
            api.get(`/comments?postId=${this.id}`)
                  .then(response => {
                      this.comments = response.data;
                  })
        },
        updatePost(){
            event.preventDefault();
            this.loading = true;
            const options = {
                    method: 'PUT',
                    body: JSON.stringify({
                    id: this.id,
                    title: this.title,
                    body: this.body,
                    userId: this.post.userId
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
            api.put(`/posts/${this.id}`, options)
                .then(response => {
                    console.log(response);
                    this.loading = false;
                    response.status == 200 ? this.message = true : '';
                    setTimeout(() => {
                        this.message = false;
                    }, 10000);
                });
        },
        closeMessage(){
            this.message = false;
        }
    },
    created(){
        this.getPost();
        this.getComments();
    }
}
</script>

<style scoped>
    h2{
        text-align: left !important;
    }
    .fas.fa-times{
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }
    .message{
        max-width: 700px;
        margin: 0 auto;
        margin-bottom: 15px;
    }
</style>