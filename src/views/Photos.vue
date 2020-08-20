<template>
  <div class="photos">
      <div class="ui cards">

        <a class="card" v-for="photo in photos" :key="photo.id">
          <div class="image">
            <img :src="photo.thumbnailUrl">
          </div>
        </a>

      </div>
  </div>
</template>

<script>
import { api } from "@/services.js"

export default {
    name: "Photos",
    data(){
      return {
        photos: null
      }
    },
    methods: {
      getPhotos(){
        api.get('/album/1/photos')
          .then(response => {
            this.photos = response.data;
          });
      }
    },
    created(){
      this.getPhotos();
    }
}
</script>

<style scoped>
  .cards{
    width: 100%;
    max-width: 912px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>