import { Parallax } from '../components';
import VueDatepickerUi from 'vue-datepicker-ui'
import 'vue-datepicker-ui/lib/vuedatepickerui.css';

const globalComponents = {
  install(Vue) {
    Vue.component(Parallax.name, Parallax, 'Datepicker', VueDatepickerUi);
  }
};

export default globalComponents;
