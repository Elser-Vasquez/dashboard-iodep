<template>
  <v-app class="font">
    <router-view></router-view>
  </v-app>
</template>



<script>
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css' //estilos para funcionamiento de notificaciones

export default {
  name: 'App',
  components: {

  },
  data: function () {
    return {

    }
  },

};

</script>
