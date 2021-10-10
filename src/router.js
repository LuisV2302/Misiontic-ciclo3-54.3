import Vue from 'vue';
import Router from 'vue-router';
<<<<<<< HEAD
import Profile from './pages/Perfil_medico.vue';
import ProfileP from './pages/Perfil_paciente.vue';
import Admin from './pages/Admin.vue';
import Register from './pages/Register.vue';
import Inicio from './pages/Inicio.vue';
import Login from './pages/Login.vue';
import listamedicos from './pages/listamedicos.vue';
import reservar from './pages/reservar.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainNavbarMedico from './layout/MainNavbarMedico.vue';
import MainFooter from './layout/MainFooter.vue';


=======
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

>>>>>>> 38661b19cbc8db5eb9bfe11a9cbc8d67e7c9090e
Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'inicio',
      components: { default: Inicio, header: MainNavbar, footer: MainFooter },
=======
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
>>>>>>> 38661b19cbc8db5eb9bfe11a9cbc8d67e7c9090e
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
<<<<<<< HEAD
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/Singup',
      name: 'register',
      components: { default: Register, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/perfil_medico',
      name: 'profile',
      components: { default: Profile, header: MainNavbarMedico, footer: MainFooter },
=======
      path: '/landing',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
>>>>>>> 38661b19cbc8db5eb9bfe11a9cbc8d67e7c9090e
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
<<<<<<< HEAD
      path: '/perfil_paciente',
      name: 'profilep',
      components: { default: ProfileP, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/administracion',
      name: 'Admin',
      components: { default: Admin,header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/reservar',
      name: 'reservar',
      components: { default: reservar, header: MainNavbar, footer: MainFooter },
=======
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
>>>>>>> 38661b19cbc8db5eb9bfe11a9cbc8d67e7c9090e
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
<<<<<<< HEAD
    },
    {
      path: '/listamedicos',
      name: 'listamedicos',
      components: { default: listamedicos, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
    
      }
=======
>>>>>>> 38661b19cbc8db5eb9bfe11a9cbc8d67e7c9090e
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
