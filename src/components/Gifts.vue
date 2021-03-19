<template>
<div>
  <v-row class="pa-0" v-if="notFound===false">
    <v-col
        v-for="(gif,index) in gifts"
        :key="index"
        class="d-flex child-flex pa-0"
        lg="2"
        :cols="4"
    >
      <a  @click="shareViaWebShare(gif[0],gif[2])">
      <v-img
          :src="gif[0]"
          :lazy-src="gif[1]"
          :key="gif[0]"
          aspect-ratio="1"
          class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
          >
            <v-progress-circular
                indeterminate
                color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      </a>
    </v-col>
  </v-row>
  <v-row class="pa-0" align="center" justify="center" v-else>
    <v-col
        v-for="(gif,index) in gifts"
        :key="index"
        class="d-flex child-flex pa-0"
        :cols="6"
    >
      <a  @click="shareViaWebShare(gif[0],gif[2])">
        <v-img
            :src="gif[0]"
            :lazy-src="gif[1]"
            :key="gif[0]"
            aspect-ratio="1"
            class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </a>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  name: "Gifts",
  data: function () {
    return {
    }
  },
  computed:{
    gifts() {
      return this.$store.state.gif.gifts
    },
    notFound() {
      return this.$store.state.gif.notFound
    },
    loading(){
      return this.$store.state.gif.loading
    }
  },
  created() {
    var promise =this.makeRequest('GET', 'https://api.giphy.com/v1/gifs/trending?api_key=V9wCFxmz1l4PFQiQ2NaskBRjCkE9LIdL&limit=48&rating=g')
    promise.then((data)=>{
      this.$store.commit('gif/UPDATE_GIFTS',(data.data));
    })
      const eventHandler = () => {
      if(this.loading===false) {
        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
        if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
          // добавим больше данных
          this.$store.dispatch('gif/SEARCH', {'shift':48})
        }
      }
      }
      document.addEventListener("scroll", eventHandler)
  },
  methods: {
    shareViaWebShare(url,title) {
      navigator.share({
        title:title,
        url: url
      })
    },

    async makeRequest(method, url) {
      const response = await fetch(url,{ method: method})
      return await response.json();
    },
    randomInt(max) {
      return Math.floor(Math.random() * Math.floor(max))+1;
    },

  }

}
</script>

<style scoped>

</style>
