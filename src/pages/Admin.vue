<template>
  <div class="page-header clear-filter" id="Pagina">
    <div class="content">
      <div class="col-md-5 ml-auto mr-auto" id="Horario">
        <h4 id="h4x">Citas</h4>
      </div>
    </div>
    <div class="align-content-center">
      <div class="content container">
        <div class="container">
          <vue-cal
            id="calendario"
            selected-date="2021-09-29"
            :time-from="5 * 60"
            :time-to="22 * 60"
            :time-step="60"
            hide-weekends
            hide-view-selector
            :disable-views="['years', 'year', 'month']"
            :editable-events="{
              title: false,
              drag: false,
              resize: false,
              delete: true,
              create: false,
            }"
            :events="events"
          ></vue-cal>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
export default {
  name: "admin",
  components: { VueCal },
  props: ["idMedico"],
    created(){
      axios.get("https://vast-forest-78933.herokuapp.com/citas/buscarPorMedicoId/"+this.idMedico)
      .then((res) => {
        let data = res.data
        for (let i=0; i<data.length; i++){
          let event = data[i]
          this.events.push({
            start: event.fechaInicio,
            end: event.fechaFinalizacion,
            title: event.nombreUsuario,
            content: '<i slot="label" class="embed-responsive now-ui-icons ui-1_bell-53"></i>',
            class: 'health',
          })
        }
      })
    },
  data() {
    return {
      yourFormat: "hh:mm a",
      yourDaysArray: [
        {
          start_time: { HH: "08", mm: "00" },
          end_time: { HH: "09", mm: "00" },
        },
      ],
      events: [],
    };
  },
};
</script>
<style>
.starter-page {
  min-height: calc(100vh - 95px);
}
#Pagina {
  background: linear-gradient(
    rgba(39, 102, 120, 1) 0%,
    rgba(211, 224, 234, 1) 100%,
    rgba(246, 245, 245, 1) 100%
  );
}
#calendario {
  height: 450px;
}
#Horario {
  margin: 130px 0px 0px 0px;
}
#h4x {
  font-weight: bold;
}
.thi {
  padding: 0px 10px 0 10px;
}
#Precio {
  width: 87%;
}
</style>