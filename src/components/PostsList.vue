<template>
    
      <div class="ui middle aligned selection list">
        <router-link class="item" v-for="post in posts" :key="post.id" :to="{name: 'Post', params: {id: post.id}}">
            <div class="right floated content">
              <i class="fas fa-times" @click="deletePost(post.id)"></i>
            </div>
            <div class="content pr-1">
              <div class="header">{{post.title}}</div>
              <div class="body">{{post.body}}</div>
            </div>
        </router-link>
      </div>
    
</template>

<script>
import { api } from "@/services.js";

export default {
    name: "PostsList",
    data(){
        return {
            posts: null
        }
    },
    methods: {
        getPosts(){
            api.get("/posts")
                  .then(response => {
                      this.posts = response.data;
                  })
        },
        deletePost(postId){
          event.preventDefault();
          if(confirm("Tem certeza que deseja deletar esse post?")){
            api.delete(`/posts/${postId}`)
              .then((response) => {
                console.log(response);
              })
            this.getPosts();
          }
        }
    },
    created(){
        this.getPosts();
    }
}
</script>

<style scoped>
  .content.pr-1{
    padding-right: 20px;
  }
</style>
