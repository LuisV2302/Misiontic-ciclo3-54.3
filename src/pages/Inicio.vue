<template>
  <div style>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url(img/bg6.jpg)"
      >
      </parallax>
      <div class="content-center">
        <div class="container d-flex justify-content-center"  id="contenedorPrincipal">
          <h1 class="title embed-responsive">Bienvenido a Medictorio</h1>
          <select id="seleccion" class="form-select form-select-lg mb-3 embed-responsive" aria-label=".form-select-lg example">
            <option selected="opt1">Filtra tus opciones</option>
            <option value="opt2">Precio</option>
            <option value="opt3">Especialidad</option>
            <option value="opt4">calificación</option>
            <option value="opt5">Ciudad</option>

        </select>
        <a href="#/listamedicos" id="botonbuscar">
        <n-button type="primary" round block size="mini" id="botonbuscar" class="button center embed-responsive">Buscar</n-button>
        </a>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">¿Quiénes somos?</h2>
            <h5 class="description">
              Somos una página que está diseñada para las reservas de citas con médicos
              particulares, nuestro objetivo es que sea un fácil acceso para los pacientes a sus
              consultas médicas, siendo un servicio más personalizado, con un registro único para
              los usuarios y su propio historial, para que lo consulten cuando lo vean necesario y
              sea lo más amigable posible y fácil de usar
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
      </div>
    </div>
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">¿Tienes preguntas?</h2>
        <p class="description">Escríbenos</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input id="Loginicon"
              class="input-lg"
              placeholder="Escribe tu nombre"
              v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <fg-input  id="Loginicon"
              class="input-lg"
              placeholder="Escribe tu correo"
              v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                v-model="form.message"
                placeholder="Déjanos tu mensaje"
              ></textarea>
            </div>
            <div class="send-button">
              <n-button type="primary" round block size="lg"
                >Enviar mensaje</n-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'inicio',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  }
};
</script>
<style>
  #seleccion{
    
    box-shadow: -4px 4px 7px -2px rgba(0,0,0,0.75);
    margin: 13px 15px 0px 50px;
    max-width: 30%;
    min-width: 40%;
  }
  #botonbuscar{
    width: auto;
    align-self: center;
  }
  #contenedorPrincipal{
    align-items: center;
    align-content: center;
  }
#Loginicon{
  width: auto;
  height: 80%;
  margin-top: 10px;
}

</style>
