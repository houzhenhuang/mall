import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
//解决 路由重复跳转 问题
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Shopcart = () => import('../views/shopcart/Shopcart')
const Profile = () => import('../views/profile/Profile')

const routes = [
  {
    path:'',
    redirect:'/Home'
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Category',
    component: Category
  },
  {
    path: '/Shopcart',
    component: Shopcart
  },
  {
    path: '/Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
