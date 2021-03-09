<template>
  <div class="Login">

    <v-container>
      <v-row >
        <v-col align="center">
          <v-card width="420" align="center" class="pt-10">

            <div >
              <h2>Iniciar Sesión</h2>
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

                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'visibility' : 'visibility_off'"
                    :rules="passwordRules"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Contraseña"
                    hint="Contraseña segura"
                    counter
                    @click:append="show1 = !show1"
                    outlined
                  ></v-text-field>



                  <v-btn
                    class="mt-10"
                    block
                    color="primary"
                    @click="resetValidation"
                  >
                    Iniciar Sesión
                  </v-btn>
                </v-form>
              </div>
            </v-card-text>

            <v-card-text>
              <div>
                <router-link  to="/forgotpassword">
                  ¿Se te olvidó tu contraseña?
                </router-link>
              </div>

            </v-card-text>
          </v-card>

          <div class="mt-10">
            ¿No tienes una cuenta?
            <router-link  to="/register">
              Regístrate aquí
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
      password: '',
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail no valido',
      ],
      passwordRules: [
        value => !!value || 'Contraseña es requerido.',
        v => v.length >= 6 || 'Minimo 6 caracteres',
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
