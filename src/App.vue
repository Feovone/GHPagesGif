<template>
  <v-app class="theme--dark">
    <v-container class="pa-0" fluid>
      <v-row no-gutters>
        <v-col lg="8" cols="12" offset-lg="2">
          <Navbar/>
          <v-main>
            <Gifts/>
          </v-main>
        </v-col>
      </v-row>
    </v-container>
  </v-app>

</template>

<script>
import Navbar from "../src/components/Navbar.vue";
import Gifts from "../src/components/Gifts.vue";

export default {
  name: 'App',
  components: {
    Navbar, Gifts
  },

  data: () => ({}),

};

</script>
<style>
</style>
