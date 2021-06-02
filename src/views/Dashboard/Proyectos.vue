<template>
  <div class="proyectos">
    <div class="c-grid">

      <v-item-group class="c-container d-flex flex-wrap">

          
        <v-hover><!-- ============== + card para añadir ============== -->
          <template v-slot:default="{ hover }">
            <v-card
              max-width="344"
              class="c-card ma-4"
              data-aos="zoom-in"
              outlined 
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">
                    AGREGAR
                  </div>
                  <v-list-item-title class="text-h5 mb-1 text-center">
                    <v-icon size="50">add</v-icon>
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-center mt-5">Agregar nuevo proyecto</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  :opacity="0.5"
                  absolute
                  color="#00000011"
                >
                  <v-btn class="c-card" color="#00000000" raised>
                  </v-btn>
                </v-overlay>
              </v-fade-transition>

            </v-card>
          </template>
        </v-hover> <!-- + card para añadir -->
        
        <v-item
          v-for="(item, i) in proyectos"
          :key="i"
        >
          <v-hover ><!-- ============== Un card ============== -->
            <template v-slot:default="{ hover }">
              <v-card
                max-width="344"
                class="c-card ma-4"
                data-aos="zoom-in"
                :data-aos-delay="(i+1)*100"
                outlined
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4">
                      {{ item.device }}
                    </div>
                    <v-list-item-title class="text-h5 mb-1">
                      {{ item.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
                  </v-list-item-content>

                </v-list-item>
                
                <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    :opacity="0.5"
                    absolute
                    color="#00000011"
                  >
                    <v-btn class="c-card" color="#00000000" raised>
                    </v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover> <!-- End un card -->
        </v-item>

      
      </v-item-group>
    </div>

  </div>
</template>

<script>
  import * as projectsService from '@/services/projectService.js'

  export default {
    name: 'Proyectos',
    props: {
      dataGlobal: null,
    },

    data: () => ({
      proyectos: [],
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
    beforeCreate: function(){
    },
    created: function () {
      this.getProjects()
    },
    methods: {
      getProjects(){
        this.proyectos = projectsService.getProjects();
        console.log(this.proyectos);
      }
    }

  }
</script>

<style scoped>
  .proyectos {
    display: grid;
    grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
    grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
    min-height: 70vh;
  }
  .c-grid {
    grid-column-start: 3;
    grid-column-end: span col4-start;
    grid-row-start: 2;
    grid-row-end: span 2;
  }
  .c-card {
    height:208px;
    width: 296px;
    min-height: 208px;
  }
  
</style>