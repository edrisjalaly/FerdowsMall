import { createRouter, createWebHistory } from 'vue-router'
import { APP_ROUTE_NAMES } from '../constants/routeNames'
import Home from '@/views/Home/Home.vue'
import SignIn from '@/views/auth/SignIn.vue'
import NotFound from '@/views/auth/NotFound.vue'
import AcceessDenied from '@/views/auth/AcceessDenied.vue'
import ContactUs from '@/views/Home/ContactUs.vue'
import ProductList from '@/views/Product/ProductList.vue'
import Signup from '@/views/auth/Signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: APP_ROUTE_NAMES.HOME,
      component: Home,
    },
    {
      path: '/sign-in',
      name: APP_ROUTE_NAMES.SIGN_IN,
      component: SignIn,
    },
    {
      path: '/sign-up',
      name: APP_ROUTE_NAMES.SIGN_UP,
      component: Signup,
    },
    {
      path: '/sing-up',
      name: APP_ROUTE_NAMES.ACCESS_DENIED,
      component: AcceessDenied,
    },
    {
      path: '/not-found',
      name: APP_ROUTE_NAMES.NOT_FOUND,
      component: NotFound,
    },
    {
      path: '/contact-us',
      name: APP_ROUTE_NAMES.CONTACT_US,
      component: ContactUs,
    },
    {
      path: '/product-list',
      name: APP_ROUTE_NAMES.PRODUCT_LIST,
      component: ProductList,
    },
  ],
})

export default router
