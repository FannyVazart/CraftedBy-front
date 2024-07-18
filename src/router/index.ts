import { createRouter, createWebHistory } from 'vue-router'
import TestFetch from '../views/TestFetch.vue'
import HomeView from '../views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import ProfileView from '@/views/ProfileView.vue'
import CartView from '@/views/CartView.vue'
import { useUserStore } from '@/stores/UserStore'
import Register from '@/components/Register.vue';
import LogOut from '@/views/LogOutView.vue';
import DeliveryView from '@/views/DeliveryView.vue';
import ConnectionModal from '@/components/UserComponents/ConnectionModal.vue';
import ValidatedOrderView from '@/views/ValidatedOrderView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/TestFetch',
      name: 'Test',
      component: TestFetch
    },
    {
      path: '/Product/:id',
      name: 'Product',
      component: ProductView
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView,
      meta: { requiresAuth: true }

    },
    {
      path: '/Cart',
      name: 'Cart',
      component: CartView
    },
    {
      path: '/login',
      name: 'Login',
      component: ConnectionModal
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: DeliveryView
    },
    {
      path: '/congrats',
      name: 'congrats',
      component: ValidatedOrderView
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogOut
    }
  ]
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth && !userStore.getToken) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router
