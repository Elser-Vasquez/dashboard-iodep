<template>
  <div class="ForgotPassword">

    <v-container>
      <v-row >
        <v-col align="center">
          <v-card width="420" align="center" class="pt-10">

            <div >
              <h2>¿Se te olvidó tu contraseña?</h2>
              <div class="px-10 py-5" style="font-size:12px;">
                Ingrese la dirección de correo electrónico de su cuenta y le enviaremos un enlace
                para restablecer su contraseña.
              </div>

            </div>
            <v-card-text>
              <div class="ml-6 mr-6 mb-2">
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  >
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    outlined
                  ></v-text-field>

                  <v-btn
                    class="mt-10"
                    block
                    color="primary"
                    @click="resetValidation"
                  >
                    Enviar petición
                  </v-btn>
                </v-form>
              </div>
            </v-card-text>
          </v-card>

          <div class="mt-10">
            <router-link  to="/login">
              Volver a iniciar sesión
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>



<script>

export default {
  name: 'Login',
  components: {

  },
  data: () => ({
      valid: true,
      show1: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail no valido',
      ],
  }),
  methods: {
    validate () {
        this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
