<template>
  <div class="home">
    <div>
      <h1>Solluti Tecnologias</h1>
      <h2>Teste Prático Vue.js</h2><br>
      <div class="ui large buttons">
        <router-link to="/posts" class="ui button">Posts</router-link>
        <div class="or" data-text="ou"></div>
        <router-link to="/photos" class="ui button">Photos</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>
  h1{
    font-size: 48px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .home{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  .button{
    display: flex;
    width: 99px;
    align-items: center;
    justify-content: center;
  }
  @media (max-width:600px){
    h1{
      font-size: 24px;
    }
    h2{
      font-size: 18px;
    }
  }
</style>
