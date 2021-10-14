<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        Medictorio
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Designed by Ernesto.
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          href="#/"
          target="_blank"
        >
          <i class=""></i>
          <p>Pagina principal</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="#/perfil_paciente"
          target="_blank"
        >
          <i class=""></i>
          <p>Perfil</p>
        </a>
      </li>
      <drop-down
              tag="li"
              title="Cuenta"
              class="nav-item"
      >
        <nav-link to="/Singup">
          <i class="now-ui-icons emoticons_satisfied"></i> Sign up
        </nav-link>
        <nav-link to="/login">
          <i class="now-ui-icons users_single-02"></i> Login
        </nav-link>
        <nav-link to="/administracion">
          <i class="now-ui-icons education_agenda-bookmark"></i> Administrar agenda
        </nav-link>
      </drop-down>
      <li class="nav-item">
        <a
          class="nav-link btn btn-neutral"
          href="/reservar/"
          target="_blank"
        >
          <i class=""></i>
          <p class="cita">Agendar cita</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Twitter"
          data-placement="bottom"
          href="https://twitter.com/"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import axios from "axios";
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover
  },
  created(){
        let apiURL = "http://localhost:8000/buscarproducto/${this.$route.params.id}";
        axios.get(apiURL).then((res) => {
            this.producto = res.data;
        });
    }
};
</script>


<style scoped></style>
