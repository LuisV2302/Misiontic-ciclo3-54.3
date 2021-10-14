<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      
         <a href="">
           <p>MEDICTORIO</p>
           </a>

 
      
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          href="/inicio#/inicio"
          target="_blank"
        >
         
          <p>Página principal</p>
        </a>

        
      </li>

<li class="nav-item">
        <a
          class="nav-link"
          href="/login#/login"
          target="_blank"
        >
         
          <p>Login</p>
        </a>

        
      </li>


<li class="nav-item">
        <a
          class="nav-link"
          href="/registro#/registro"
          target="_blank"
        >
         
          <p>Sign Up</p>
        </a>

        
      </li>
<li class="nav-item">
        <a
          class="nav-link"
          href="/Perfil_paciente#/Perfil_paciente"
          target="_blank"
        >
         
          <p>PERFIL</p>
        </a>


     
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Twitter"
          data-placement="bottom"
          href="https://twitter.com/CreativeTim"
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
          href="https://www.facebook.com/CreativeTim"
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
          href="https://www.instagram.com/CreativeTimOfficial"
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
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
  
    Navbar,
  
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
