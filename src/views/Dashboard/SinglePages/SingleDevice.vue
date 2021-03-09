<template>
  <div class="SingleDevice">


    <v-card
      class="mx-auto "
      >
      <v-card-title>Información Básica</v-card-title>

      <v-container>
        <v-row justify="center">
          <v-col cols="4" xs="4" sm="3" md="2">
              <div style="text-align: center;" >
                  <v-avatar
                    color="grey"
                    size="85"
                    >
                    <v-img :src="dataGlobal.user.foto"></v-img>
                  </v-avatar>
              </div>
              <div style="text-align: center;" >
                  <v-btn
                    elevation="2"
                    small
                    class="mt-2"
                    >
                    <v-icon left>pencil</v-icon>
                    editar
                  </v-btn>
              </div>
          </v-col>

          <v-col cols="8" xs="8" sm="9" md="10" >
            <v-row>
              <v-col cols="12" xs="12" sm="6" md="4" >
                <v-text-field
                  :value="dataGlobal.user.name"
                  label="Nombre"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" xs="12" sm="6" md="4" >
                <v-text-field
                  :value="dataGlobal.user.apellidos"
                  label="Apellidos"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="8" >
                <v-text-field
                  :value="dataGlobal.user.email"
                  label="e-mail"
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>


          </v-col>
        </v-row>
      </v-container>

      <v-divider class="mx-4"></v-divider>
    </v-card>



  </div>
</template>

<script>
  export default {
    name: 'SingleDevice',
    props: {
      dataGlobal: null,
    },

    data: () => ({


    }),
  }
</script>
