<template>
  <div class="page-header clear-filter" id="Pagina">
    <div class="align-content-center">
      <div class="content container">
        <div class="col-md-5 ml-auto mr-auto" id="Horario">
            <h4 id="h4x">Horario disponible</h4>
            <vue-timepicker class="Hora" :format="yourFormat" v-model="unsetStringValue" placeholder="Inicio"></vue-timepicker>
            <span class="thi"> Hasta </span>
            <vue-timepicker class="Hora" :format="yourFormat" v-model="unsetStringValue" placeholder="Ultimo"></vue-timepicker>
            <div class="container-fluid">
              <a
                  href="#"
                  class="btn btn-info btn-round btn-lg btn-block"
                  id="bt">Agregar horario</a
                >
            </div>
        </div>
      <div class="container">
        <vue-cal id="calendario" selected-date="2021-09-29" :time-from="5 * 60" :time-to="22 * 60" 
        :time-step="60" hide-weekends hide-view-selector :disable-views="['years', 'year', 'month']" 
        :editable-events="{ title: false, drag: false, resize: false, delete: true, create: false }" 
        :events="events"></vue-cal>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueTimepicker from 'vue2-timepicker';
import 'vue2-timepicker/dist/VueTimepicker.css'
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
export default {
  name: 'admin',
  components: { VueTimepicker, VueCal },
  data () {
  return {
    yourFormat: 'hh:mm a',
    yourDaysArray: [
      {start_time: {HH: '08', mm: '00'}, end_time: {HH: '09', mm: '00'}},
    ],
    events: [
      {
        start: '2021-09-30 10:00',
        end: '2021-09-30 11:00',
        title: 'Paciente 1',
        content: '<i slot="label" class="embed-responsive now-ui-icons ui-1_bell-53"></i>',
        class: 'health',
        },
        {
        start: '2021-10-01 6:00',
        end: '2021-10-01 8:00',
        title: 'Paciente 2',
        content: '<i slot="label" class="embed-responsive now-ui-icons ui-1_bell-53"></i>',
        class: 'health',
        },
        {start: '2021-09-28 14:30',
        end: '2021-09-28 16:00',
        title: 'Paciente 3',
        content: '<i slot="label" class="embed-responsive now-ui-icons ui-1_bell-53"></i>',
        class: 'health',
        },
        {start: '2021-09-27 5:00',
        end: '2021-09-27 7:00',
        title: 'Paciente 4',
        content: '<i slot="label" class="embed-responsive now-ui-icons ui-1_bell-53"></i>',
        class: 'health',

        }
        ]
  }
}
};
</script>
<style>
.starter-page {
  min-height: calc(100vh - 95px);
}
#Pagina{
  background: linear-gradient(rgba(39,102,120,1) 0%,
         rgba(211,224,234,1) 100%, rgba(246,245,245,1) 100%);
}
#calendario{
  height: 450px;
}
#Horario{
  margin: 130px 0px 60px 0px;
}
#h4x{
  font-weight: bold;
}
.thi{
  padding: 0px 10px 0 10px;
}

#bt{
  margin-top: 20px;
  margin-bottom: -10px;
}
</style>
