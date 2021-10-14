<template>
  <div>
    <div class="page-header">
      <parallax
        class="page-header-image"
      >
      </parallax>
      <div class="container" id="Perfil">
        <div class="photo-container">
          <img src="img/ppp.jpg" id="pp" alt="pp" />
        </div>
        <h3 class="title">{{Pacientedata.nombre}}</h3>
        <p class="category">Usuario</p>
        <div class="content">
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <h3 class="title">Detalles del usuario</h3>
                <ul class="list-group row" id="Lista">
                    <span id="usuarios">Tipo de sangre</span>
                     <li class="list-group-item col-6 embed-responsive" id="Elementos">
                        {{Pacientedata.tipoSangre}}
                     </li>
                     <span id="usuarios">Email</span>
                     <li class="list-group-item col-6 embed-responsive" id="Elementos">
                        {{Pacientedata.correo}}
                     </li >
                      <span id="usuarios">Ciudad</span>
                     <li class="list-group-item col-6 embed-responsive" id="Elementos">
                        {{Pacientedata.ciudad}}
                     </li>
                      <span id="usuarios">Celular </span>
                        <li class="list-group-item col-6 embed-responsive" id="Elementos">
                          {{Pacientedata.telefono}}
                        </li>
                      <span id="usuarios">Dirección Consultorio</span>
                        <li class="list-group-item col-6 embed-responsive" id="Elementos">
                          {{Pacientedata.direccion}}
                        </li>
                  </ul>
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <h4 class="title text-center">Citas</h4>
          </div>
          <div class="table-responsive">
            <table class="table table-bordered table-striped table-hover table-responsive-md">
              <thead>
                        <tr class="bg-primary">
                            <th scope="col">#</th>
                            <th scope="col"><strong>Especialidad</strong></th>
                            <th scope="col"><strong>Fecha y hora</strong></th>
                        </tr>
              </thead>
              <tbody v-for="cita in Citadata" :key="cita.id"> 
                        <tr>
                            <th scope="row">1</th>
                            <td >{{cita.area}}</td>
                            <td>{{cita.fecha}}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>{{cita.area}}</td>
                            <td>{{cita.fecha}}</td>
                        </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'profile',
  bodyClass: 'profile-page',
  components: {
  },props:['idPaciente'],
  data (){
        return {
        Pacientedata: '',
        Citadata: null
        }
    },
  created(){ 
    let idpaciente1 = '61678dc3225c2453eff2d78f'; //id prueba
    //alert("id del medico " + idmedico2);
    axios.get("http://localhost:8000/pacientes/buscarPorId/"+idpaciente1)
    .then((res) => {this.Pacientedata = res.data
    }).catch((error) => console.log(error));

    axios.get("http://localhost:8000/citas/buscarPorPacienteId/"+idpaciente1)
    .then((resp) => {this.Citadata = resp.data
    }).catch((error) => console.log(error));
  }
};
</script>
<style>
#Perfil{
margin-top: 50px;
}
thead{
  color:white;
}
</style>
