<template>
  <div class="dispocitivos">

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
            v-for="(item, i) in devices"
            :key="i"
            cols="12" xs="6" sm="6" md="4"
            >
            <v-card outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4" >
                    ESTADO:
                    <strong v-if="item.state" class="green--text">activo</strong>
                    <strong v-else class="error--text">inactivo</strong>
                  </div>
                  <v-list-item-title class="headline mb-1" >
                    {{item.name}}
                  </v-list-item-title>

                  <v-list-item-subtitle>{{item.text}}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  >
                  <v-icon color="#1F7087" size="80">{{item.icon}}</v-icon>
                </v-list-item-avatar>
              </v-list-item>
              <v-card-actions>
                <v-btn outlined rounded text :to="'/me/dispocitivos/' + item.id">
                  editar
                </v-btn>
                <v-btn outlined rounded text v-on:click="deleteDevice(item)">
                  eliminar
                </v-btn>
              </v-card-actions>
            </v-card>


          </v-col>
        </v-row>


        <DeleteDevice></Deletedevice>


  </div>
</template>

<script>
import DeleteDevice from '@/components/Dashboard/Dialogos/DeleteDevice.vue';

  export default {
    name: 'Dispocitivos',
    components: {
      DeleteDevice,
    },
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
      devices: [
        {
          id: '153v543465',
          icon: 'inbox',
          name: 'Sensor 1',
          text: 'estación central',
          state: true,
        },
        {
          id: '12343465',
          icon: 'star',
          name: 'Sensor temp',
          text: 'empaquetado',
          state: true,
        },
        {
          id: '153v54365',
          icon: 'send',
          name: 'actuador motor',
          text: 'estacion 2 red periferica',
          state: false,
        },
        {
          id: '153v55665',
          icon: 'sensors',
          name: 'driver stepper',
          text: 'linea 1 estacion monson',
          state: true,
        },
        {
          id: '153v54df65',
          icon: 'star',
          name: 'Sensor temp',
          text: 'empaquetado',
          state: true,
        },
        {
          id: '153v5gt7665',
          icon: 'send',
          name: 'actuador motor',
          text: 'estacion 2 red periferica',
          state: false,
        },
        {
          id: '1512444yuiiuy',
          icon: 'sensors',
          name: 'driver stepper',
          text: 'linea 1 estacion monson',
          state: true,
        },
      ],
    }),
    methods: {
      deleteDevice(item){
        this.$emit('eventDevice', item);
      },
    },
  }
</script>
