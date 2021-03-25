<template>
  <div class="font">
          <v-row class=" fill-height" >
              <v-col cols="12" xs="4" sm="4" md="4"  class="white mx-lg-auto">
                <div style="min-height: 100vh">
                  <v-container>
                    <h1 class="primary--text text-center mt-15" style="font-size: 40px;">IODEP</h1>
                    <div class="text-center mx-5 mt-10" style="font-size: 20px;">¡Bienvenidos! Construyamos juntos cosas increíbles.</div>
                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="indigo"
                        to="/home"
                      >
                        Home
                      </v-btn>
                    </div>
                  </v-container>
                  <v-img src="https://image.freepik.com/vector-gratis/xtreme-ilustracion-colorida-hombre-gamer-manager-distante-trabajo-remoto-disenador-marketing-internet-freelance-sienta-computadora-ciber-poder-fluido-teletrabajo-diseno-web-negocio_191130-20.jpg"></v-img>
                </div>
              </v-col>

              <v-col cols="12" xs="8" sm="8" md="8"  class="mx-lg-auto my-lg-auto">
                <div class="qaqa">
                  <router-view></router-view>
                </div>
              </v-col>
          </v-row>

  </div>
</template>



<script>
import LoginHeader from './Layouts/Login/LoginHeader';
import LoginFooter from './Layouts/Login/LoginFooter';

export default {
  name: 'Login',
  components: {
    LoginHeader,
    LoginFooter,
  },
  data: () => ({


  }),
  methods: {
    msg(clase, title, message){
      if(clase==='success'){this.$toast.success({ title:title, message:message})}
      if(clase==='info'){this.$toast.info({ title:title, message:message})}
      if(clase==='error'){this.$toast.error({ title:title, message:message})}
    },
  },
}
</script>
