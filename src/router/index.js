import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '@/views/NotFoundPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/me',
    name: 'me',
    redirect: '/me/dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Me.vue'),
    meta: {rutaProtegida: true},
    children: [
      {
        path: '/me/dashboard/',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/Dashboard.vue')
      },
      {
        path: '/me/user:id',
        name: 'user',
        component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/UserProfile.vue')
      },
      {
        path: '/me/proyectos',
        name: 'proyectos',
        component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/Proyectos.vue')
      },
      {
        path: '/me/dispocitivos',
        name: 'dispocitivos',
        component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/Dispocitivos.vue')
      },
      {
        path: '/me/dispocitivos/:id',
        name: 'dispocitivo',
        component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/SinglePages/SingleDevice.vue')
      },
      {
        path: '/me/proyectos/:id',
        name: 'Proyectos',
        component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/SinglePages/SingleProyect.vue')
      },
    ],
  },
  {
    path: '/',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "demo" */ '../views/Login.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Login/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Login/Register.vue')
      },
      {
        path: '/forgotpassword',
        name: 'recuperarContraseña',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Login/ForgotPassword.vue')
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "demo" */ '../views/Home.vue'),
  },
  {
    path: '*',
    component: NotFound,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = false;
  const routeProtect = to.matched.some(item => item.meta.rutaProtegida)

  console.log('ruta: ',routeProtect, '  token:', token)

  if (routeProtect && token === null) {
    //ruta es protegida , pero token no valido
    next('/')
  }else{
    //ruta protegida t token valido
    next()
  }
})

export default router
