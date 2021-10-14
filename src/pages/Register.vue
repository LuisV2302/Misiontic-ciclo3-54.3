<template>
  <div class="page-header">
    <main-navbar></main-navbar>
    <div class="page-header-image"></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container" id="logoup">
              <img v-lazy="'./Logo_Mesa de trabajo 1.png'"  alt="logo" />
            </div>
            <fg-input class="no-border input-lg" placeholder="Username">
            </fg-input>

            <fg-input class="no-border input-lg" placeholder="Nombre completo">
            </fg-input>

            <fg-input class="no-border input-lg" placeholder="Correo">
            </fg-input>

            <fg-input class="no-border input-lg" placeholder="Tipo de sangre">
            </fg-input>

            <fg-input class="no-border input-lg" placeholder="Telefono">
            </fg-input>

            <div class="roles-container">
              <n-radio v-model="esDoctor" v-bind:value="true" label="1">Medico</n-radio>
              <n-radio v-model="esDoctor" v-bind:value="false" label="2">Paciente</n-radio>
            </div>

            <div v-if="esDoctor == true" class="medico-data">
                <fg-input class="no-border input-lg" placeholder="Direccion consultorio">
                </fg-input>

                <fg-input class="no-border input-lg" placeholder="Especialidad">
                </fg-input>
            </div>

            <template slot="raw-content">
              <div class="card-footer text-center">
                <a
                  href="#pablo"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  >Crear cuenta</a
                >
              </div>
              <div class="pull-left">
                <h6>
                  <a href="#login" id="textbottom" class="link footer-link">Iniciar sesion</a>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <a href="#helpxd" id="textbottom1" class="link footer-link">Need Help?</a>
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput, Radio} from "@/components";
import MainNavbar from '@/layout/MainNavbar';
export default {
  name: "login-page",
  bodyClass: "login-page",
  components: {
    Card,
    MainNavbar,
    [Radio.name]: Radio,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      esDoctor: null,
    };
  }
};
</script>
<style>
.roles-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.medico-data{
    margin-top: 15px;
}
.page-header-image{
    /* background: linear-gradient(rgba(39,102,120,1) 0%,
         rgba(211,224,234,1) 80%, rgba(246,245,245,1) 100%); */
         background: white;
}
#textbottom{
  margin-left: 10px;
  font-size: 100%;
}
#textbottom1{
  margin-right: 12px;
  font-size: 100%;
}
</style>
