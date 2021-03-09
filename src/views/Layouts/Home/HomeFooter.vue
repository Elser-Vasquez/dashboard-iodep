<template>
  <div>
    <v-footer
      color="blue darken-3"
      padless
      >
      <v-row
        justify="center"
        no-gutters
      >
        <v-col
          class="lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>GLOBAL IOT</strong>
        </v-col>
      </v-row>
    </v-footer>


  </div>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data() {
      return {
        links: [
            'Home',
            'About Us',
            'Team',
            'Services',
            'Blog',
            'Contact Us',
        ],
      }
    },
  }
</script>
