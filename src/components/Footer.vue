<template>
    <footer>
        <div class="ui divider"></div>
        <span>copyright © 2020 | All rights reserved.</span>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    footer{
        position: relative;
        top: 60px;
    }
    .ui.divider{
        margin: 0;
    }
    span{
        display: block;
        padding: 20px 0;
        text-align: center;
    }
</style>