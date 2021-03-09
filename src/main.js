import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import Notifications from 'cxlt-vue2-toastr';

import VueGoogleCharts from 'vue-google-charts'   //esto es para las graficas analiticas

//importamos socket.io
//import VueSocketIO from 'vue-socket.io'
/*Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:3000/',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
    options: { path: "/" } //Optional options
}))*/



import '@babel/polyfill'

Vue.config.productionTip = false

Vue.use(VueGoogleCharts)

Vue.use(Notifications, {   //parametros generales para notificaciones
    position: 'bottom right',
    showDuration: 500,
    hideDuration: 500,
    timeOut: 5000,
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
    progressBar: true,
    closeButton: true,
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
