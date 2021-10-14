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
        <h3 class="title">Paciente Apellido</h3>
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
                        O+
                     </li>
                     <span id="usuarios">Email</span>
                     <li class="list-group-item col-6 embed-responsive" id="Elementos">
                        Paciente123@gmail.com
                     </li >
                      <span id="usuarios">Ciudad</span>
                     <li class="list-group-item col-6 embed-responsive" id="Elementos">
                        Bogota
                     </li>
                     <span id="usuarios">Rol</span>
                        <li class="list-group-item col-6 embed-responsive" id="Elementos">
                           Paciente
                        </li>
                      <span id="usuarios">Celular </span>
                        <li class="list-group-item col-6 embed-responsive" id="Elementos">
                          300231243
                        </li>
                      <span id="usuarios">Dirección Consultorio</span>
                        <li class="list-group-item col-6 embed-responsive" id="Elementos">
                          Calle 25 #12 - 80
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
                            <th scope="col"><strong>Medico</strong></th>
                        </tr>
              </thead>
              <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Dermatología</td>
                            <td>12/08/21 12:30 pm</td>
                            <td>Medico Dermatologo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Neurología</td>
                            <td>27/11/20 09:00 am</td>
                            <td>Medico Neurologo</td>
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

export default {
  name: 'profile',
  bodyClass: 'profile-page',
  components: {
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
