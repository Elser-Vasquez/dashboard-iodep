<template>

  <v-app-bar
    :clipped-left="$vuetify.breakpoint.mdAndUp"
    app
    color="blue darken-3"
    dark
    >
    <v-toolbar-title style="width: auto" class="ml-0 pl-3">
      <router-link tag="span" class="hidden-sm-and-down" to="/">
        <v-btn icon large>
          <v-avatar size="38px" item>
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIxa2looOJyFRK4WmPw_Q8HIKyFVGcicM7w&usqp=CAU">
            </v-img>
          </v-avatar>
        </v-btn>
        GLOBAL IOT
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn class="ma-2" text color="white" to="/login">
        login
        <v-icon>login</v-icon>
    </v-btn>
    
  </v-app-bar>
</template>

<script>
  export default {
    name: 'HomeHeader',
    props: {
    },
    data() {
      return {
        items: [
          { text: 'Perfil', icon: 'account_circle', url: '/me/user:12' },
          { text: 'Proyectos', icon: 'widgets', url: '/me/proyectos' },
          { text: 'Dispocitivos', icon: 'settings_remote', url: '/me/dispocitivos' },
          { text: 'Chat', icon: 'flutter_dash', url: '' },
          { text: 'Notificaciones', icon: 'notifications', url: '' },
        ],
        ntfs: [
          { icon: 'commute', title: 'Estacion opc', text: 'Se activo el periferico uno del sensor de movimiento', time: '12:30' },
          { icon: 'fingerprint', title: 'Planta disc', text: 'Nuevo dispocitivo detectado en la red', time: '8:12' },
          { icon: 'online_prediction', title: 'Sensor Hum', text: 'Error en la lectura de datos del sensor de humedad', time: '4:09' },
          { icon: 'touch_app', title: 'Estacion Lima', text: 'Se activo el periferico uno del sensor de nivel', time: '7:23' },
          { icon: 'widgets', title: 'Planta disc', text: 'Error en la comunicaciones del modulo de carga de la red', time: '5:52' },
        ],
      }
    },
    methods: {
      toggleNavbar(){
        //this.$emit('stateDrawer',"");
      },
    },
  }
</script>
