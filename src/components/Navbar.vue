<template>
  <div>
    <v-app-bar
        app
        color="black"
        dark
    >
      <v-container class="pa-0" fluid>
        <v-row no-gutters class="mt-1">
          <v-col lg="1"  offset-lg="2" sm="2" cols="4">
            <a href="/"> <v-toolbar-title class="display-1">GIPHY </v-toolbar-title></a>
          </v-col>
          <v-col lg="5" sm="9"  xs="8" cols="7">
            <v-text-field
                hide-details
                prepend-icon="mdi-magnify"
                single-line
                v-model="query"
                placeholder="Find something interesting..."
            ></v-text-field>
          </v-col>
          <v-col  lg="2" class="ml-4 hidden-lg-and-down">
            <v-btn href="/upload">
              <span class="mr-2">Upload</span>
            </v-btn>
            <v-btn href="/create" class="ml-2">
              <span class="mr-2">Create</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-sheet id="scrolling-techniques" class="overflow-y-auto" max-height="9000"></v-sheet>
 </div>


</template>

<script>
export default {
  name: "Navbar",
  data(){
    return{
    }
  },
  computed:{
    query:{
      get: function(){
        return this.$store.state.gif.query;
      },
      set:function(newValue){
        this.$store.state.gif.query =newValue;
      }
    }
  },
  methods:{
    async makeRequest(method, url) {
      console.log(url);
      const response = await fetch(url, {method: method})
      return await response.json();
    },
  },
  watch: {
    query: function() {

        this.$store.dispatch("gif/SEARCH",{'shift':0,'newQuery':this.query});
    }
}}

</script>

<style scoped>
v-toolbar-title{
  font-size: 35px;
}
a{
  text-decoration: none;
}
</style>
