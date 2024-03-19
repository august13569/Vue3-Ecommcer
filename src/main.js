import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import mitt from 'mitt';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import en from '@vee-validate/i18n/dist/locale/en.json';
import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/font/poppins.css';

const emitter = mitt();

const app = createApp(App);
app.config.globalProperties.$filters = { currency, date };
app.config.globalProperties.$emitter = emitter;

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ en, zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

setLocale('zhTW');

app.use(VueAxios, axios);
app.use(router);
app.component('Loading', Loading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');
