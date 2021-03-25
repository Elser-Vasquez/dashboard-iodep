<template>
  <div>
    <v-progress-linear
      indeterminate
      color="blue"
    ></v-progress-linear>
    <v-footer padless>
      <v-col class="text-init" cols="6" xs="6">
        <h5>
          {{ new Date().getFullYear() }} — © <strong>IODEP</strong>
        </h5>
      </v-col>

      <v-col class="text-end" cols="6" xs="6">

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 primary--text"
          icon
          >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-col>

    </v-footer>

  </div>
</template>

<script>
  export default {
    name: 'DashboardFooter',

    data() {
      return {
        links: [
            'Home',
            'Login',
        ],
        icons: [
        'facebook',
        'emoji_objects',
        'share',
      ],
      }
    },
  }
</script>
