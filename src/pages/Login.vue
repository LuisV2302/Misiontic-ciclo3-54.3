<template>
  <div class="page-header clear-filter">
    <div class="page-header-image" style="background-color: white"></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container" id="logoup">
              <img
                v-lazy="'img/logo-med.png'"
                id="logoup1"
                alt=""
              />
            </div>
            <div class="roles-container">
              <n-radio v-model="login.role"  label="medico"
                >Medico</n-radio
              >
              <n-radio v-model="login.role"  label="paciente"
                >Paciente</n-radio
              >
            </div>
            <fg-input
              id="Loginicon"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Usuario"
              v-model="login.username"
            >
            </fg-input>

            <fg-input
              id="Loginicon"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Contraseña"
              v-model="login.contraseña"
            >
            </fg-input>
            <div class="card-footer text-center">
              <button
                href="#"
                class="btn btn-primary btn-round btn-lg btn-block"
                v-on:click="registrarse"
                id="bt"
                >Ingresar</button
              >
            </div>
            <div class="pull-left">
              <h6>
                <a href="#" id="textbottom" class="link footer-link"
                  >Registrarse</a
                >
              </h6>
            </div>
            <div class="pull-right">
              <h6>
                <a href="#" id="textbottom1" class="link footer-link">Ayuda</a>
              </h6>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Card, Button, FormGroupInput, Radio } from "@/components";
export default {
  name: "login-page",
  bodyClass: "login-page",
  components: {
    Card,
    [Button.name]: Button,
    [Radio.name]: Radio,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      login: {
      },
      errors: [],
    };
  },
  methods: {
    registrarse() {
      axios
        .post(`https://vast-forest-78933.herokuapp.com/api/auth/login/`, this.login)
        .then((response) => {
          localStorage.setItem("jwtToken", response.data.token);
          if(this.login.role == "medico"){
            this.$router.push({
              name: "perfil medico",
              params:{
                idMedico: response.data.userId
              }
            });
          }else{
            this.$router.push({
              name: "perfil paciente",
              params:{
                idPaciente: response.data.userId
              }
            });
          }
        })
        .catch((e) => {
          console.log(e);
          this.errors.push(e);
        });
    },
    register() {
      this.$router.push({
        name: "Register",
      });
    },
  },
};
</script>
<style>
.roles-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
}
.page-header-image {
  background: linear-gradient(
    rgba(39, 102, 120, 1) 0%,
    rgba(211, 224, 234, 1) 80%,
    rgba(246, 245, 245, 1) 100%
  );
}
.btn-lg btn-block {
  color: rgba(39, 102, 120, 1);
}
#textbottom {
  margin-left: 10px;
  font-size: 100%;
}
#textbottom1 {
  margin-right: 12px;
  font-size: 100%;
}
#bt {
  margin-top: -10px;
  margin-bottom: 20px;
}
#Loginicon {
  width: auto;
  height: 80%;
  margin-top: 10px;
}
</style>