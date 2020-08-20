<template>
  <div id="app">
    <Header />
    <router-view class="main" />
    <Footer />
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue'

  export default {
    name: "app",
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    background: #f0f2f5;
  }
  #app{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .main{
    flex: 1;
    padding:15px;
  }
  .container{
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    background: white;
    box-shadow: 0 0 6px rgba(0,0,0,.1);
    padding: 15px;
    border-radius: 4px;
  }
</style>
