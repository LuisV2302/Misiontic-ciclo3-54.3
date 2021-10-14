<template>
  <div>
    <div class="page-header">
      <parallax
        class="page-header-image"
      >
      </parallax>
      <div class="container" id="Perfil">
        <div class="photo-container">
          <img src="img/pp.jpg" id="pp" alt="pp" />
        </div>
        <h3 class="title">Medico123</h3>
        <p class="category">Dermatologo</p>
        <div class="content">
          <div class="social-description">
            <h2>4,5</h2>
            <p>Calificación</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <h3 class="title">Detalles del usuario</h3>
                <ul class="list-group row" id="Lista">
                    <span id="especialidad">Especialidad</span>
                     <li class="list-group-item col-6 embed-responsive" id="Elementos">
                        Dermatología
                     </li>
                     <span id="correo">Email</span>
                     <li class="list-group-item col-6 embed-responsive" id="Elementos">
                        Medico@gmail.com
                     </li >
                      <span id="ciudad">Ciudad</span>
                     <li class="list-group-item col-6 embed-responsive" id="Elementos">
                        Medellín
                     </li>
                     <span id="rol">Rol</span>
                        <li class="list-group-item col-6 embed-responsive" id="Elementos">
                           Medico
                        </li>
                      <span id="celular">Celular </span>
                        <li class="list-group-item col-6 embed-responsive" id="Elementos">
                          312741243
                        </li>
                      <span id="direccion">Dirección Consultorio</span>
                        <li class="list-group-item col-6 embed-responsive" id="Elementos">
                          Calle 95 #12 - 110
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
import { Tabs, TabPane } from '@/components';
import axios from "axios";

export default {
  name: 'profile',
  bodyClass: 'profile-page',
  components: {
    Tabs,
    TabPane
  },
  data() {
    return {
        nombre: "",
        especialidad:"",
        calificacion:"",
        correo:"",
        ciudad:"",
        rol:"",
        celular:"",
        direccion: ""
        }
  }
};
</script>
<style>
#Perfil{
margin-top: 50px;
}

</style>
