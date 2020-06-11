import Vue from "vue";
import VueRouter from "vue-router"

import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/home',
    meta:{
      showFoot:true
    }
  },
  {
    path:'/home',
    component: Home,
    meta:{
      showFoot:true
    }
  },{
    path:'/search',
    component: Search,
    meta:{
      showFoot:true
    }
  },{
    path:'/order',
    component: Order,
    meta:{
      showFoot:true
    }
  },{
    path:'/profile',
    component: Profile,
    meta:{
      showFoot:true
    }
  },{
    path:'/login',
    component: Login
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router