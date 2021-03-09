<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    :clipped="$vuetify.breakpoint.mdAndUp"
    app

    >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img :src="dataGlobal.user.foto"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>{{dataGlobal.user.name}}</v-list-item-title>

      <v-btn
        icon
        @click.stop="mini = !mini"
      >
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in itemsTop"
        :key="item.text"
        :to="item.url"
        link
        >
        <v-list-item-icon>
          <v-icon color="green darken-2">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          v-for="item in itemsBottom"
          :key="item.text"
          :to="item.url"
          link
          >
          <v-list-item-icon>
            <v-icon color="blue darken-2">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>

</template>

<script>
  export default {
    name: 'DashboardNavbar',
    props: {
      dataGlobal: null,
      drawer: true,
    },

    data() {
      return {
        mini: false,
        itemsTop: [
          { text: 'Dashboard', icon: 'dashboard', url: '/me/dashboard/' },
          { text: 'Mi Cuenta', icon: 'account_circle', url: '/me/user:12' },
          { text: 'Proyectos', icon: 'widgets', url: '/me/proyectos' },
          { text: 'Dispocitivos', icon: 'settings_remote', url: '/me/dispocitivos' },
        ],
        itemsBottom: [
          { text: 'Chat', icon: 'flutter_dash', url: '' },
          { text: 'Ayuda', icon: 'help_outline', url: '' },
        ],
      }
    },
  }
</script>
