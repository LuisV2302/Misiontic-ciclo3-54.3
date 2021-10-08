<template>
<div>
  <div class="page-header clear-filter" filter-color='orange'>
    <div
      class="page-header-image"
      style="background-image: url('img/reservar.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" >
             <h1 class="h1-seo">Reserva tu cita</h1>
            </div>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Nombre del paciente"
            >
            </fg-input>

                <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Nombre del acompañante (si aplica)"
            >
            </fg-input>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons ui-1_email-85"
              placeholder="Email"
            >
            </fg-input>


     <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons business_badge"
              placeholder="Número de celular"
            >
            </fg-input>
             
            

        
          </card>
        </div>
      </div>
    </div>


  </div>
</div>
</template>
<script>



import { Card, Button, FormGroupInput } from '@/components';
import JavascriptComponents from './components/JavascriptComponents';
export default {
  name: 'login-page',
  bodyClass: 'login-page',
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>
<style></style>
