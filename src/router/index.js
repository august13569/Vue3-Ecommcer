import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    // path: '/',
    // name: 'home',
    // component: HomeView,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  // },
  //
  // Front Router
  {
    path: '/faq',
    component: () => import('../views/front/FAQ.vue'),
  },
  {
    path: '/contact',
    component: () => import('../views/front/Contact.vue'),
  },
  {
    path: '/about',
    component: () => import('../views/front/About.vue'),
  },
  {
    path: '/',
    component: () => import('../views/front/HomePage.vue'),
  },
  {
    path: '/products',
    component: () => import('../views/front/Products.vue'),
  },
  {
    path: '/products/:productId',
    component: () => import('../views/front/TheProduct.vue'),
  },
  {
    path: '/cart',
    component: () => import('../views/front/ShoppingCart.vue'),
  },
  {
    path: '/order',
    component: () => import('../views/front/Order.vue'),
  },
  {
    path: '/checkout/:orderId',
    component: () => import('../views/front/CheckOut.vue'),
  },
  // Back Router
  {
    path: '/login',
    component: () => import('../views/back/Login.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/back/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/back/Products.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/back/Coupons.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/back/Orders.vue'),
      },
    ],
  },
  // Page Not Found 404
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/front/PageNotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
