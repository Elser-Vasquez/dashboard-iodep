<template>
  <div class="deleteDevice">

    <v-dialog
      v-model="dialog"
      persistent
      max-width="340"
      >
      <v-card>
        <v-card-title >
          ¿Deseas eliminar dispocitivo?
        </v-card-title>
        <v-card-text>
          Se eleminará el dispocitivo <strong>{{device.name}}</strong> y todos sus datos recolectados, además su acceso por API hacia el servidor quedará desabilitada.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>

          <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
            v-on:click="msg('success','Dispocitivo eliminado','El dispocitivo a sido eliminado correctamente')"
          >
            Eliminar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>



  </div>
</template>

<script>
  export default {
    name: 'DeleteDevice',
    props: {
      dataDevice: null,   //recivimos los datos del dispocitivo que se eliminara de la base de datos
    },

    data: () => ({
      dialog: false,
      device: null,      //guardamos los datos del dispocitivo a eliminar enviado por el padre

    }),
    methods: {
      msg(clase, title, message){
        if(clase==='success'){this.$toast.success({ title:title, message:message})}
        if(clase==='info'){this.$toast.info({ title:title, message:message})}
        if(clase==='error'){this.$toast.error({ title:title, message:message})}
      },
      deleteDevice(item){
        this.dialog = true;
        this.device = item;
      },
    },
    created: function() {       //eventos entrantes desde el padre
      this.$parent.$on('eventDevice', this.deleteDevice);   //llega el evento del padre y abre el evento interno en methods
    },
  }
</script>
