<template>
  <div class="page-header">
    <main-navbar></main-navbar>
    <div class="page-header-image"></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <img class="img-logo" v-lazy="'img/logo-med.png'" alt="logo" />
            </div>

            <fg-input
              type="text"
              class="no-border input-lg"
              placeholder="Username"
              v-model="usuario.username"
              required
            >
            </fg-input>

            <fg-input
              type="password"
              class="no-border input-lg"
              placeholder="Contraseña"
              v-model="usuario.contraseña"
              required
            >
            </fg-input>

            <fg-input
              type="text"
              class="no-border input-lg"
              placeholder="Nombre completo"
              v-model="usuario.nombre"
              required
            >
            </fg-input>

            <fg-input
              type="email"
              class="no-border input-lg"
              placeholder="Correo"
              v-model="usuario.correo"
              required
            >
            </fg-input>

            <fg-input
              class="no-border input-lg"
              placeholder="Tipo de sangre"
              v-model="usuario.tipoSangre"
              required
            >
            </fg-input>

            <fg-input
              type="number"
              class="no-border input-lg"
              placeholder="Telefono"
              v-model="usuario.telefono"
              required
            >
            </fg-input>

            <fg-input
              type="text"
              class="no-border input-lg"
              placeholder="Ciudad"
              v-model="usuario.ciudad"
              required
            >
            </fg-input>

            <div class="roles-container">
              <n-radio v-model="esDoctor" v-bind:value="true" label="1"
                >Medico</n-radio
              >
              <n-radio v-model="esDoctor" v-bind:value="false" label="0"
                >Paciente</n-radio
              >
            </div>

            <div v-if="esDoctor == true" class="medico-data">
              <fg-input
                class="no-border input-lg"
                placeholder="Precio estandar de citas"
                v-model="usuario.precio"
                required
              >
              </fg-input>
              <fg-input
                class="no-border input-lg"
                placeholder="Direccion consultorio"
                v-model="usuario.direccionConsultorio"
                required
              >
              </fg-input>

              <fg-input
                class="no-border input-lg"
                placeholder="Especialidad"
                v-model="usuario.especialidad"
                required
              >
              </fg-input>
            </div>

            <template slot="raw-content">
              <div class="card-footer text-center">
                <button
                  href="#pablo"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  v-on:click="crearUsuario"
                >
                  Crear cuenta
                </button>
              </div>
              <div class="pull-left">
                <h6>
                  <a href="#login" class="link footer-link">Iniciar sesion</a>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <a href="#helpxd" class="link footer-link">Need Help?</a>
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import axios from "axios";
import { Card, Button, FormGroupInput, Radio } from "@/components";
import MainFooter from "@/layout/MainFooter";
import MainNavbar from "@/layout/MainNavbar";
export default {
  name: "login-page",
  bodyClass: "login-page",
  components: {
    Card,
    MainNavbar,
    MainFooter,
    [Radio.name]: Radio,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      esDoctor: null,
      usuario: {
        username: "",
        contraseña: "",
        nombre: "",
        correo: "",
        telefono: "",
        tipoSangre: "",
        ciudad: "",
        precio: null,
        direccionConsultorio: null,
        especialidad: null,
      },
    };
  },
  methods: {
    crearUsuario() {
      if (this.esDoctor == 1) {
        let medico = {
          username: this.usuario.username,
          contraseña: this.usuario.contraseña,
          nombre: this.usuario.nombre,
          correo: this.usuario.correo,
          telefono: this.usuario.telefono,
          ciudad: this.usuario.ciudad,
          tipoSangre: this.usuario.tipoSangre,
          precio: this.usuario.precio,
          direccionConsultorio: this.usuario.direccionConsultorio,
          especialidad: this.usuario.especialidad,
          role: "medico"
        };
        axios
          .post("https://vast-forest-78933.herokuapp.com/api/auth/register/", medico)
          .then(() => {
            this.$router.push({
              name: "login" 
            });
          });
      } else {
        let paciente = {
          username: this.usuario.username,
          contraseña: this.usuario.contraseña,
          nombre: this.usuario.nombre,
          correo: this.usuario.correo,
          telefono: this.usuario.telefono,
          tipoSangre: this.usuario.tipoSangre,
          ciudad: this.usuario.ciudad,
          role: "paciente"
        };
        axios
          .post("https://vast-forest-78933.herokuapp.com/api/auth/register/", paciente)
          .then(() => {
            this.$router.push({
              name: "login" 
            });
          })
      }
    },
  },
};
</script>
<style>
.roles-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.medico-data {
  margin-top: 15px;
}
.page-header-image {
  /* background: linear-gradient(rgba(39,102,120,1) 0%,
         rgba(211,224,234,1) 80%, rgba(246,245,245,1) 100%); */
  background: white;
}
.img-logo {
  transform: scale(2);
}
</style>