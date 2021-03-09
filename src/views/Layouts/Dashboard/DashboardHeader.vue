<template>

  <v-app-bar
    :clipped-left="$vuetify.breakpoint.mdAndUp"
    app
    color="blue darken-3"
    dark
    >
    <v-toolbar-title style="width: auto" class="ml-0 pl-3">
      <v-app-bar-nav-icon @click.stop="toggleNavbar()"></v-app-bar-nav-icon>

      <router-link tag="span" class="hidden-sm-and-down" to="/me">
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

    <v-btn class="mr-3" icon v-on:click="">
      <v-icon>apps</v-icon>
    </v-btn>

    <v-badge
      class="mr-3"
      color="red"
      content="5"
      overlap
      offset-x="20"
      offset-y="20"
      >
      <v-menu left bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon large v-bind="attrs" v-on="on" >
            <v-btn icon v-on:click="">
              <v-icon>notifications</v-icon>
            </v-btn>
          </v-btn>
        </template>

        <v-list dense style="max-width:450px;">
          <v-container>
            <h5>Notificaciones</h5>
          </v-container>
          <div
            v-for="item in ntfs"
            >
            <v-list-item
              @click="() => {}"
              :key="item.title"
              link
              >
              <v-list-item-icon>
                <v-icon color="red">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <div>
                  <h5 class="text--primary">{{ item.title }}</h5>
                  <p class="mt-2 text--secondary" style="font-size:14px; ">{{ item.text }}</p>
                </div>

              </v-list-item-content>
              <v-list-item-icon>
                <v-list-item-title class="text--secondary">{{ item.time }}</v-list-item-title>
              </v-list-item-icon>
            </v-list-item>
            <v-divider inset></v-divider>
          </div>
        </v-list>
      </v-menu>
    </v-badge>

    <v-menu class="mr-3" left bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <div><h5>{{dataGlobal.user.name}}</h5></div>
        <v-btn icon large v-bind="attrs" v-on="on" >
          <v-avatar size="38px" item>
            <v-img
              :src="dataGlobal.user.foto"
            >
            </v-img>
          </v-avatar>
        </v-btn>
      </template>

      <v-list dense>
        <v-list-item
          @click="() => {}"
          v-for="item in items"
          :key="item.text"
          :to="item.url"
          link
          >
          <v-list-item-icon>
            <v-icon color="green darken-2">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-btn class="mt-2 ml-5 mr-5" outlined small color="red">
          <v-icon left>input</v-icon>
          Cerrar sesión
        </v-btn>
      </v-list>
    </v-menu>
  </v-app-bar>



</template>

<script>
  export default {
    name: 'DashboardHeader',
    props: {
      dataGlobal: null,
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
        this.$emit('stateDrawer',"");
      },
    },
  }
</script>
