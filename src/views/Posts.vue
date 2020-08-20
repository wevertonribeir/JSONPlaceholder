<template>
    <div class="posts">
        <div class="container">
            <div class="header">
                <h1>Posts</h1>
                <router-link class="ui primary button right" to="/posts/create">
                    NOVO
                </router-link>
            </div>
            <div class="ui divider"></div>
            <PostsList />
        </div>
    </div>
</template>

<script>
import PostsList from "@/components/PostsList.vue"

export default {
    name: "Posts",
    components:{
        PostsList
    }
}
</script>

<style scoped>
    .header{
        position: relative;
    }
    .right{
        position: absolute;
        top: 0;
        right: 0;
    }
</style>