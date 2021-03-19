import Vue from 'vue'
import Vuex from 'vuex'
import gif from './modules/gif'
// import Requests from './plugins/requests'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        gif
    },
})
