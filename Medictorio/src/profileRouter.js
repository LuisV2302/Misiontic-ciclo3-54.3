import Vue from 'vue';
import Router from 'vue-router';
import Profile from './pages/Perfil_medico.vue';
import ProfileP from './pages/Perfil_paciente.vue';
import Admin from './pages/Admin.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainNavbarMedico from './layout/MainNavbarMedico.vue';
import MainFooter from './layout/MainFooter.vue';


Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/perfil_medico',
      name: 'profile',
      components: { default: Profile, header: MainNavbarMedico, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
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
