<template>
  <div id="app" class="Home">
    <v-app class="font">

      <HomeHeader></HomeHeader>

      <v-main>
          <v-container
            fluid
            fill-height
            >
            <v-row class="fill-height">
                <v-col cols="12" class="fill-height">
                  <div style="min-height: 100vh">
                    <router-view></router-view>
                  </div>
                </v-col>
            </v-row>
          </v-container>
          <HomeFooter></HomeFooter>
      </v-main>
    </v-app>
  </div>
</template>



<script>
import HomeHeader from './Layouts/Home/HomeHeader';
import HomeFooter from './Layouts/Home/HomeFooter';


export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeFooter,
  },
  data: () => ({
  }),
  methods: {

  },
}
</script>
