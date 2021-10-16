<template>
  <div>
    <div class="page-header">
      <parallax class="page-header-image"> </parallax>
      <div class="container" id="Perfil">
        <div class="photo-container">
          <img src="img/ppp.jpg" id="pp" alt="pp" />
        </div>
        <h3 class="title">{{ Pacientedata.nombre }}</h3>
        <p class="category">Usuario</p>
        <div class="content"></div>
        <button class="btn btn-medicos" v-on:click="verMedicos">
          <p class="cita">Ver medicos</p>
        </button>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <h3 class="title">Detalles del usuario</h3>
        <ul class="list-group row" id="Lista">
          <span id="usuarios">Tipo de sangre</span>
          <li class="list-group-item col-6 embed-responsive" id="Elementos">
            {{ Pacientedata.tipoSangre }}
          </li>
          <span id="usuarios">Email</span>
          <li class="list-group-item col-6 embed-responsive" id="Elementos">
            {{ Pacientedata.correo }}
          </li>
          <span id="usuarios">Ciudad</span>
          <li class="list-group-item col-6 embed-responsive" id="Elementos">
            {{ Pacientedata.ciudad }}
          </li>
          <span id="usuarios">Celular </span>
          <li class="list-group-item col-6 embed-responsive" id="Elementos">
            {{ Pacientedata.telefono }}
          </li>
        </ul>
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <h4 class="title text-center">Citas</h4>
          </div>
          <div class="table-responsive">
            <table
              class="
                table
                table-bordered
                table-striped
                table-hover
                table-responsive-md
              "
            >
              <thead>
                <tr class="bg-primary">
                  <th scope="col">#</th>
                  <th scope="col"><strong>Paciente</strong></th>
                  <th scope="col"><strong>Fecha Inicio</strong></th>
                  <th scope="col"><strong>Fecha Finalizacion</strong></th>
                </tr>
              </thead>
              <tbody v-for="(cita, i) in Citadata" :key="cita._id">
                <tr>
                  <th scope="row">{{ i + 1 }}</th>
                  <td>{{ cita.nombreUsuario }}</td>
                  <td>{{ cita.fechaInicio }}</td>
                  <td>{{ cita.fechaFinalizacion }}</td>
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
import axios from "axios";
export default {
  name: "profile",
  bodyClass: "profile-page",
  components: {},
  props: ["idPaciente"],
  data() {
    return {
      Pacientedata: "",
      Citadata: null,
    };
  },

  created() {
    axios
      .get(
        "https://vast-forest-78933.herokuapp.com/paciente/buscarPorId/" +
          this.idPaciente
      )
      .then((res) => {
        this.Pacientedata = res.data;
      })

    axios
      .get(
        "https://vast-forest-78933.herokuapp.com/citas/buscarPorPacienteId/" +
          this.idPaciente
      )
      .then((resp) => {
        this.Citadata = resp.data;
      })
  },
  methods: {
    verMedicos() {
      this.$router.push({
        name: "lista medicos",
        params: {
          idPaciente: this.idPaciente,
        },
      });
    },
  },
};
</script>
<style>
.btn-medicos {
  border-radius: 5px;
  border: 2px solid black;
}
#Perfil {
  margin-top: 50px;
}
thead {
  color: white;
}
</style>
