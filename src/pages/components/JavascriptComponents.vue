<template>
  <div class="section section-javascript" id="javascriptComponents">
    <div class="container">

      
        
        <div class="col-md-6">
          <h4>Elige fecha disponible</h4>
          <div class="row">
            <div class="col-md-6">
              <div class="datepicker-container">
                <fg-input>
                  <el-date-picker
                    type="date"
                    popper-class="date-picker date-picker-primary"
                    placeholder="agenda disponible"
                    v-model="pickers.datePicker"
                  >
                  </el-date-picker>
                </fg-input>
              </div>
            </div>
          </div>
        </div>
            </div>
            </div>
   

</template>
<script>
import { Button, Modal, FormGroupInput } from '@/components';
import { Popover, Tooltip, DatePicker } from 'element-ui';

export default {
  components: {
    

    [DatePicker.name]: DatePicker,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      modals: {
        classic: false,
        mini: false
      },
      pickers: {
        datePicker: ''
      }
    };
  }
};
</script>
<style lang="scss">

</style>
