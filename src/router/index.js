import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import help from "../views/helpP.vue";
import Helps from "../components/note/note.vue";
import Helpid from "../components/note/note.vue";
import posts from "../views/Posts.vue";
import post from  "../views/post.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/posts/:id",
    name: "Post",
    component: post,
    props:true
  },

  {
    path: "/posts",
    name: "Posts",
    component: posts
  },

  {
    path: "/help",
    name: "Help",
    component: help,children:[
      {path:"",component:Helps, name:'helps'},
      {path:":id", name:'Helpid' ,component:Helpid,props:true},

    ],
  },
  {
    path:'*',redirect:"/help"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
