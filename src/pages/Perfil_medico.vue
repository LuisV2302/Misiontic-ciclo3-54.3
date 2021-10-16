<template>
  <div>
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
          <div class="popover-body">Designed by Ernesto.</div>
        </el-popover>
      </template>
      <template slot="navbar-menu">
        <li class="nav-item">
          <a class="nav-link" href="#/" target="_blank">
            <i class=""></i>
            <p>Pagina principal</p>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/perfil_paciente" target="_blank">
            <i class=""></i>
            <p>Perfil</p>
          </a>
        </li>
        <drop-down tag="li" title="Cuenta" class="nav-item">
          <nav-link to="/Singup">
            <i class="now-ui-icons emoticons_satisfied"></i> Sign up
          </nav-link>
          <nav-link to="/login">
            <i class="now-ui-icons users_single-02"></i> Login
          </nav-link>
          <button v-on:click="administrarAgenda()">
            <i class="now-ui-icons education_agenda-bookmark"></i> Administrar
            agenda
          </button>
        </drop-down>
        <li class="nav-item">
          <button
            class="nav-link btn btn-neutral"
            href="#/reservar"
            target="_blank"
          >
            <i class=""></i>
            <p class="cita" v-on:click="agendarCita">Agendar cita</p>
          </button>
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
    <div class="page-header">
      <parallax class="page-header-image"> </parallax>
      <div class="container" id="Perfil">
        <div class="photo-container">
          <img src="img/pp.jpg" id="pp" alt="pp" />
        </div>
        <h3 class="title">{{ Medicodata.nombre }}</h3>
        <div class="content">
          <div class="social-description">
            <h2>{{ Medicodata.precio }}</h2>
            <p>Precio de la cita</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <h3 class="title">Detalles del usuario</h3>
        <ul class="list-group row" id="Lista">
          <span id="usuarios">Especialidad</span>
          <li class="list-group-item col-6 embed-responsive" id="Elementos">
            {{ Medicodata.especialidad }}
          </li>
          <span id="usuarios">Email</span>
          <li class="list-group-item col-6 embed-responsive" id="Elementos">
            {{ Medicodata.correo }}
          </li>
          <span id="usuarios">Ciudad</span>
          <li class="list-group-item col-6 embed-responsive" id="Elementos">
            {{ Medicodata.ciudad }}
          </li>
          <span id="usuarios">Celular </span>
          <li class="list-group-item col-6 embed-responsive" id="Elementos">
            {{ Medicodata.telefono }}
          </li>
          <span id="usuarios">Dirección Consultorio</span>
          <li class="list-group-item col-6 embed-responsive" id="Elementos">
            {{ Medicodata.direccionConsultorio }}
          </li>
        </ul>
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <h4 class="title text-center">Consultorio</h4>
          </div>
          <tabs
            pills
            class="nav-align-center"
            tab-content-classes="gallery"
            tab-nav-classes="nav-pills-just-icons"
            type="primary"
          >
            <tab-pane title="Profile">
              <i slot="label" class="now-ui-icons media-1_camera-compact"></i>
              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/example.jpg" class="img-raised" />
                    <img src="img/example2.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/example3.jpg" alt="" class="img-raised" />
                    <img src="img/example4.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>
          </tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane, DropDown, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
import axios from "axios";
export default {
  name: "profile",
  bodyClass: "profile-page",
  components: {
    Tabs,
    TabPane,
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover,
  },
  props: ["idMedico", "idPaciente"],
  data() {
    return {
      Medicodata: "",
      //Preciodata:'',
    };
  },
  created() {
    //alert("id del medico " + idmedico2);
    axios
      .get("https://vast-forest-78933.herokuapp.com/medico/buscarPorId/" + this.idMedico)
      .then((res) => {
        this.Medicodata = res.data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    agendarCita(){
      this.$router.push({
        name: "reservar",
        params: {
          idPaciente: this.idPaciente,
          idMedico: this.idMedico,
        }
      })
    },
    administrarAgenda(){
      this.$router.push({
        name: "admin",
        params: { 
          idMedico:  this.idMedico
        }
      })
    }
  }
};
</script>
<style>
#Perfil {
  margin-top: 50px;
}
</style>
