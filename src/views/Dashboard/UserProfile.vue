<template>
  <div >
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



    <v-expansion-panels class="mt-4">
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h3>Información De Usuario</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6" >
              <v-text-field
                :value="dataGlobal.user.name"
                label="Dirección 1"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6" >
              <v-text-field
                :value="dataGlobal.user.apellidos"
                label="Dirección 2"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6" >
              <v-text-field
                value= "+051 987987987"
                label="Telefono"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6" >
              <v-text-field
                value= "24004"
                label="Codigo Postal"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="4" xs="4" sm="4" md="4" >
              <v-text-field
                value= "Perú"
                label="País"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="4" xs="4" sm="4" md="4" >
              <v-text-field
                value= "Amazonas"
                label="Región"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="4" xs="4" sm="4" md="4" >
              <v-text-field
                value= "Bagua"
                label="Ciudad"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels class="mt-4">
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h3>Información de dispocitivos y proyectos</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6" >
              <v-text-field
                :value="dataGlobal.user.name"
                label="Dirección 1"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6" >
              <v-text-field
                :value="dataGlobal.user.apellidos"
                label="Dirección 2"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6" >
              <v-text-field
                value= "+051 987987987"
                label="Telefono"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6" >
              <v-text-field
                value= "24004"
                label="Codigo Postal"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="4" xs="4" sm="4" md="4" >
              <v-text-field
                value= "Perú"
                label="País"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="4" xs="4" sm="4" md="4" >
              <v-text-field
                value= "Amazonas"
                label="Región"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="4" xs="4" sm="4" md="4" >
              <v-text-field
                value= "Bagua"
                label="Ciudad"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>



  </div>
</template>

<script>
  export default {
    name: 'UserProfile',
    props: {
      dataGlobal: null,
    },

    data: () => ({
      links: [
          'Home',
          'About Us',
          'Team',
          'Services',
          'Blog',
          'Contact Us',
      ],
    }),
  }
</script>
