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
        <h3 class="title"> {{ Medicodata.nombre }}</h3>
        <div class="content">
          <div v-for="precio in Preciodata" :key="precio.id" class="social-description">
            <h2 >{{ precio.precio }}</h2>
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
                     </li >
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
                          {{ Medicodata.direccion }}
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
import axios from 'axios';
export default {
  name: 'profile',
  bodyClass: 'profile-page',
  components: {
    Tabs,
    TabPane
  },
  props:['idMedico','precio'],
  data (){
        return {
        Medicodata: '',
        Preciodata:'',
        }
    },
  created(){ 
    let idmedico1 = '6166eb68fb4a711eda8f8777'; //id prueba
    
    //alert("id del medico " + idmedico2);
    axios.get("http://localhost:8000/medicos/buscarPorId/"+idmedico1)
    .then((res) => {this.Medicodata = res.data
    }).catch((error) => console.log(error));
    axios.get("http://localhost:8000/citas/buscarPorMedicoId/"+idmedico1)
    .then((resp) => {this.Preciodata = resp.data
    }).catch((error) => console.log(error));
    }
};
</script>
<style>
#Perfil{
margin-top: 50px;
}

</style>
