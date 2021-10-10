<template>
  <div class="page-header clear-filter" >
    <div
      class="page-header-image"
         style="background-color:white"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
<<<<<<< HEAD
            <div slot="header" class="logo-container" id="logoup">
              <img v-lazy="'./Logo_Mesa de trabajo 1.png'" id="logoup1" alt="" />
            </div>

            <fg-input id="Loginicon"
=======
            <div slot="header" class="logo-container">
              <img v-lazy="'img/now-logo.jpeg'" alt="" />
            </div>

            <fg-input
>>>>>>> 38661b19cbc8db5eb9bfe11a9cbc8d67e7c9090e
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Usuario"
            >
            </fg-input>

<<<<<<< HEAD
            <fg-input id="Loginicon"
=======
            <fg-input
>>>>>>> 38661b19cbc8db5eb9bfe11a9cbc8d67e7c9090e
              class="no-border input-lg"
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Contraseña"
            >
            </fg-input>
<<<<<<< HEAD
              <div class="card-footer text-center" >
                <a
                  href="#"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  id="bt">Ingresar</a
=======

            <template slot="raw-content" style="color:#276678">
              <div class="card-footer text-center" >
                <a
                  href="#pablo"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  >Ingresar</a
>>>>>>> 38661b19cbc8db5eb9bfe11a9cbc8d67e7c9090e
                >
              </div>
              <div class="pull-left">
                <h6>
<<<<<<< HEAD
                  <a href="#" id="textbottom" class="link footer-link">Registrarse</a>
=======
                  <a href="#pablo" class="link footer-link">Registrarse</a>
>>>>>>> 38661b19cbc8db5eb9bfe11a9cbc8d67e7c9090e
                </h6>
              </div>
              <div class="pull-right">
                <h6>
<<<<<<< HEAD
                  <a href="#" id="textbottom1" class="link footer-link">Ayuda</a>
                </h6>
              </div>
=======
                  <a href="#pablo" class="link footer-link">Ayuda</a>
                </h6>
              </div>
            </template>
>>>>>>> 38661b19cbc8db5eb9bfe11a9cbc8d67e7c9090e
          </card>
        </div>
      </div>
    </div>
<<<<<<< HEAD
=======
    <main-footer></main-footer>
>>>>>>> 38661b19cbc8db5eb9bfe11a9cbc8d67e7c9090e
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
<<<<<<< HEAD

=======
import MainFooter from '@/layout/MainFooter';
>>>>>>> 38661b19cbc8db5eb9bfe11a9cbc8d67e7c9090e
export default {
  name: 'login-page',
  bodyClass: 'login-page',
  components: {
    Card,
<<<<<<< HEAD
=======
    MainFooter,
>>>>>>> 38661b19cbc8db5eb9bfe11a9cbc8d67e7c9090e
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>
<style>
.page-header-image{
  background: linear-gradient(rgba(39,102,120,1) 0%,rgba(211,224,234,1) 80%, rgba(246,245,245,1) 100%);
}
.btn-lg btn-block{
  color:rgba(39,102,120,1);
}
<<<<<<< HEAD
#textbottom{
  margin-left: 10px;
  font-size: 100%;
}
#textbottom1{
  margin-right: 12px;
  font-size: 100%;
}
#bt{
  margin-top: -10px;
  margin-bottom: 20px;
}
#Loginicon{
  width: auto;
  height: 80%;
  margin-top: 10px;
}
=======
>>>>>>> 38661b19cbc8db5eb9bfe11a9cbc8d67e7c9090e
</style>
