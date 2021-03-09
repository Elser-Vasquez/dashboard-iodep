<template>
  <div class="proyectos">

        <v-row justify="center">
          <v-col
            v-for="(item, i) in itemsCard"
            :key="i"
            cols="12" xs="12" sm="12" md="4"
            >
            <v-card
              :color="item.color"
              dark
              >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    v-text="item.title"
                  ></v-card-title>
                  <v-card-subtitle>
                    {{item.state}}<strong style="font-size: 20px;">   {{item.n}}</strong>
                  </v-card-subtitle>
                </div>
                <v-avatar
                  class="ma-3"
                  size="85"
                  tile
                  >
                  <v-img :src="item.src"></v-img>
                </v-avatar>
              </div>
            </v-card>


          </v-col>
        </v-row>

        <v-row >
          <v-col
            cols="12" xs="12" sm="12" md="12"
            >
            <v-card outlined >
              Pronto
            </v-card>
          </v-col>
        </v-row>

  </div>
</template>

<script>
  export default {
    name: 'Proyectos',
    props: {
      dataGlobal: null,
    },

    data: () => ({
      itemsCard: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Proyectos',
          state: 'Activos',
          n: '7',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Dispocitivos',
          state: 'Conectados',
          n: '24',
        },
        {
          color: 'teal darken-1',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Sensores',
          state: 'En tu red',
          n: '43',
        },
      ],
    }),
  }
</script>
