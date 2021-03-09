<template>
  <div>
  </div>
</template>



<script>
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css' //estilos para funcionamiento de notificaciones

export default {
  name: 'Notificaciones',
  components: {

  },
  props: {
    class: null,
    name: null,
    message: null,
  },
  data: function () {
    return {

    }
  },
  methods: {
    success() {
      this.$toast.success({ title:'Success', message:'Mensaje Success de prueba'})
    },
    info() {
      this.$toast.info({ title:'Info', message:'Mensaje Info de prueba'})
    },
    error() {
      this.$toast.error({ title:'Error', message:'Mensaje Error de prueba'})
    }
  },
};

</script>
