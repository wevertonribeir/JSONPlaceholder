<template>
  <header>
      <nav>
          <router-link to="/"><i class="fas fa-home"></i></router-link>
          <router-link to="/posts"><i class="fas fa-comment-alt"></i></router-link>
          <router-link to="/photos"><i class="fas fa-images"></i></router-link>
      </nav>
  </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    header{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        background: white;
        box-shadow: 0 0 3px rgba(0,0,0,.3);
    }
    header nav{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    header nav a{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: rgb(51,51,51);
        font-size: 26px;
        padding: 0 40px;
        border-bottom: solid 4px transparent;
    }
    header nav a.router-link-exact-active{
        color: #fec63e;
        border-bottom: solid 4px #fec63e;
    }
</style>