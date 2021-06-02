import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import aos from './plugins/aos-plugin.js'

import Notifications from 'cxlt-vue2-toastr';

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

aos.start();

Vue.config.productionTip = false

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
