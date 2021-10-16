import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './pages/Inicio.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Perfil_medico from './pages/Perfil_medico.vue';
import Perfil_paciente from './pages/Perfil_paciente.vue';
import Reservar from './pages/Reservar.vue';
import ListaMedicos from './pages/ListaMedicos.vue';
import Admin from './pages/Admin.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainNavbarMedico from './layout/MainNavbarMedico.vue';
import MainFooter from './layout/MainFooter.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'inicio',
      components: { default: Inicio, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/register',
      name: 'register',
      components: { default: Register },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/perfil_medico',
      name: 'perfil medico',
      components: { default: Perfil_medico, footer: MainFooter },
      props: {
        default: true,
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/perfil_paciente',
      name: 'perfil paciente',
      components: { default: Perfil_paciente, header: MainNavbar, footer: MainFooter },
      props: {
        default: true,
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' },
      }
    },
    {
      path: '/reservar',
      name: 'reservar',
      components: { default: Reservar, header: MainNavbar, footer: MainFooter },
      props: {
        default: true,
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/lista_medicos',
      name: 'lista medicos',
      components: { default: ListaMedicos, header: MainNavbar, footer: MainFooter },
      props: {
        default: true,
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/administracion',
      name: 'admin',
      components: { default: Admin,header: MainNavbar, footer: MainFooter },
      props: {
        default: true,
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
