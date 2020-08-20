import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Posts from '@/views/Posts.vue'
import Photos from '@/views/Photos.vue'
import Post from '@/views/Post.vue'
import PostsCreate from '@/views/PostsCreate.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post,
    props: true
  },
  {
    path: '/posts/create',
    name: 'PostsCreate',
    component: PostsCreate,
    props: true
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
