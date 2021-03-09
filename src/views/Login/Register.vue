<template>
  <div class="Register">
    <v-container class="">
      <v-row>
        <v-col align="center">
          <v-card width="420" align="center" class="pt-10">

            <div>
              <h2>Registrarse</h2>
            </div>
            <v-card-text>
              <div class="ml-6 mr-6 mb-2">
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  >
                  <v-text-field
                    v-model="nombre"
                    label="Nombre"
                    required
                    outlined
                  ></v-text-field>

                  <v-text-field
                    v-model="apellidos"
                    label="Apellidos"
                    required
                    outlined
                  ></v-text-field>

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
                    Registrarse
                  </v-btn>
                </v-form>
              </div>
            </v-card-text>
          </v-card>

          <div class="mt-10">
            ¿Ya tienes una cuenta?
            <router-link to="/login">
              Ingresa aquí
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>



<script>



export default {
  name: 'Register',
  components: {

  },
  data() {
    return {
      model: {
        name: '',
        email: '',
        password: '',
        agree: false
      }
    };
  },
  methods: {

  },
}
</script>
