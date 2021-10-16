<template>
  <div>
    <div id="conta" class="page-header clear-filter">
      <div class="page-header-image"></div>
      <div class="content">
        <div class="container container-fluid">
          <div class="col-md-5 ml-auto mr-auto">
            <card type="login fluid" plain>
              <div slot="header">
                <h1 class="h1-seo">Reserva tu cita</h1>
              </div>
              <form @submit.prevent="methodenviaraBackend">
                <fg-input
                  v-model="citas.nombreUsuario"
                  type="text"
                  class="no-border input-lg"
                  addon-left-icon="now-ui-icons users_circle-08"
                  placeholder="Nombre paciente"
                >
                </fg-input>

                <fg-input
                  v-model="citas.fechaInicio"
                  type="text"
                  class="no-border input-lg"
                  addon-left-icon="now-ui-icons users_circle-08"
                  placeholder="Fecha inicio, Ej: 2021-09-27 5:00"
                >
                </fg-input>

                <fg-input
                  v-model="citas.fechaFinalizacion"
                  type="text"
                  class="no-border input-lg"
                  addon-left-icon="now-ui-icons users_circle-08"
                  placeholder="Fecha finalizacion, Ej: 2021-09-27 5:00"
                >
                </fg-input>

                <div class="card-footer text-center">
                  <button
                    class="btn btn-primary btn-round btn-lg btn-block"
                    id="bt"
                  >
                    Reservar
                  </button>
                </div>
              </form>
            </card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components";
import axios from "axios";
import "vue-datepicker-ui/lib/vuedatepickerui.css";
import VueDatepickerUi from "vue-datepicker-ui";
export default {
  name: "reservar",
  bodyClass: "login-page",
  components: {
    Card,
    [Button.name]: Button,

    [FormGroupInput.name]: FormGroupInput,
  },
  props: ["idPaciente", "idMedico"],
  data() {
    return {
      citas: {
        nombreUsuario: "",
        fechaInicio: "",
        fechaFinalizacion: "",
        pacienteId: this.idPaciente,
        medicoId: this.idMedico
      },
    };
  },
  methods: {
    methodenviaraBackend() {
      axios
        .post("https://vast-forest-78933.herokuapp.com/citas/crear", this.citas)
        .then(() => alert("cita creada"));
    },
  },
};
</script>
<style scoped lang="scss">
#day {
  margin: -15px 0px 25px 0px;
  --v-calendar-picker-color: #1687a7;
  --v-calendar-input-bg-color: #ffffff;
  --v-calendar-select-bg-color: #1687a7;
  --v-calendar-border-color: #323b43;
  --v-calendar-triangle-color: #1687a7;
  --v-calendar-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.2);
  --v-calendar-top-shadow: 3px -14px 30px 0px rgba(0, 0, 0, 0.2);
  --v-calendar-text-color: #ffffff;
  --v-calendar-action-color: #ffffff;
  --v-calendar-text-disabled-color: #e0e0eb7c;
  --v-calendar-view-button-color: #ffffff;
  --v-calendar-datepicker-icon-color: #ffffff;
  --v-calendar-datepicker-icon-size: 1.1rem;
  --v-calendar-active-bg-color: #276678;
  --v-calendar-active-text-color: #ffffff;
  --v-calendar-range-bg-color: #282c34;
  --v-calendar-view-button-font-weight: 00;
  --v-calendar-view-button-font-size: 1.1rem;
  --v-calendar-range-text-color: rgb(255, 255, 255);
  --v-calendar-range-radius: 100%;
  --v-calendar-day-hover-bg-color: #323b43;
  --v-calendar-day-width: 45px;
  --v-calendar-day-height: 45px;
  --v-calendar-day-font-size: 0.8rem;
  --v-calendar-day-font-weight: 500;
  --v-calendar-input-border: 1px solid #383e48;
  --v-calendar-input-text-color: #000000;
  --v-calendar-input-font-size: 0.9rem;
  --v-calendar-input-font-weight: 500;
  --v-calendar-content-radius: 6px;
  --v-calendar-day-name-font-size: 0.9rem;
  --v-calendar-day-name-font-weight: 600;
  --v-calendar-day-name-color: #323b43;
  --v-calendar-year-font-size: 1.1rem;
  --v-calendar-year-color: #ffffff;
  --v-calendar-year-font-weight: 500;
  --v-calendar-input-bg-disable-color: rgb(245, 245, 245);
  --v-calendar-input-text-disable-color: #ffffff;
  --v-calendar-year-disabled-color: #b8b8b9;
  --v-calendar-year-disabled-bg-color: transparent;
  --v-calendar-year-padding: 10px;
  --v-calendar-year-border: none;
  --v-calendar-year-border-radius: none;
  --v-calendar-month-font-size: 1.1rem;
  --v-calendar-month-color: #ffffff;
  --v-calendar-month-font-weight: 500;
  --v-calendar-month-disabled-color: #b8b8b9;
  --v-calendar-month-disabled-bg-color: transparent;
  --v-calendar-month-padding: 8px;
}
</style>
