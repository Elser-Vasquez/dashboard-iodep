<template>
  <div id="app" class="Dashboard">
    <v-app class="font">

      <DashboardNavbar :dataGlobal="dataGlobal" :drawer="drawer">
      </DashboardNavbar>

      <DashboardHeader :dataGlobal="dataGlobal" @stateDrawer="toggleNavbar">
      </DashboardHeader>

      <v-main>
          <v-container
            fluid
            fill-height
            >
            <v-row class="fill-height">
                <v-col cols="12" class="fill-height">
                  <div style="min-height: 100vh">
                    <router-view :dataGlobal="dataGlobal" transition="slide-x-transition"></router-view>
                  </div>
                </v-col>
            </v-row>
          </v-container>
          <DashboardFooter></DashboardFooter>
      </v-main>

      <v-btn
          bottom
          color="pink"
          dark
          fab
          fixed
          right
          @click="dialog = !dialog"
          >
          <v-icon>add</v-icon>
      </v-btn>

      <v-dialog
          v-model="dialog"
          width="800px"
          >
          <v-card>
            <v-card-title class="grey darken-2">
              Agregar nuevo dispositivo
            </v-card-title>
            <v-container grid-list-sm>
              <v-layout
                row
                wrap
              >
                <v-flex
                  xs12
                  align-center
                  justify-space-between
                >
                  <v-layout align-center>
                    <v-avatar
                      size="40px"
                      class="mr-3"
                    >
                      <img
                        src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                        alt=""
                      >
                    </v-avatar>
                    <v-text-field
                      placeholder="Name"
                    ></v-text-field>
                  </v-layout>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    prepend-icon="business"
                    placeholder="Company"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    placeholder="Job title"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    prepend-icon="mail"
                    placeholder="Email"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    type="tel"
                    prepend-icon="phone"
                    placeholder="(000) 000 - 0000"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    prepend-icon="notes"
                    placeholder="Notes"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <v-card-actions>
              <v-btn
                text
                color="primary"
              >Más Información</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="dialog = false"
              >Cancelar</v-btn>
              <v-btn
                text
                @click="dialog = false"
              >Agregar</v-btn>
            </v-card-actions>
          </v-card>
      </v-dialog>

    </v-app>
  </div>
</template>



<script>
import DashboardHeader from './Layouts/Dashboard/DashboardHeader';
import DashboardNavbar from './Layouts/Dashboard/DashboardNavbar';
import DashboardFooter from './Layouts/Dashboard/DashboardFooter';


export default {
  name: 'Me',
  components: {
    DashboardHeader,
    DashboardNavbar,
    DashboardFooter,
  },
  data: () => ({
    drawer: true,
    dialog: false,
    dataGlobal: {
      user: {
        name: 'Elser Aldair',
        apellidos: 'Vásquez Vargas',
        email: 'vasquez.95.elser@gmail.com 1234564564567546745675467',
        foto: 'https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/10/24/Recortada/img_femartinez_20181010-125104_imagenes_md_otras_fuentes_captura-kcOG-U452531892714hYG-980x554@MundoDeportivo-Web.JPG',
      },
    },
    items: [
      { text: 'Home', icon: 'home' },
      { text: 'My Account', icon: 'transfer_within_a_station' },
      { text: 'Users', icon: 'person_pin_circle' },
    ],
  }),
  methods: {
    msg(clase, title, message){
      if(clase==='success'){this.$toast.success({ title:title, message:message})}
      if(clase==='info'){this.$toast.info({ title:title, message:message})}
      if(clase==='error'){this.$toast.error({ title:title, message:message})}
    },
    toggleNavbar(){
      this.drawer = !(this.drawer);
    },
  },
}
</script>
