import http from '../plugins/requests'

export default {
    namespaced: true,
    state: {
        query: "",
        gifts: [],
        offset: 0,
        loading:false,
        notFound:false,
    },
    actions: {
        SEARCH({commit, state}, payload) {
            state.loading=true;
            if (payload.shift !== undefined) {
                state.offset += payload.shift
            }
            var url = http.makeUrl(state);
            let req = http.makeRequest('GET', url);
            req.then((data) => {
                if (data.data.length === 0) {
                    state.notFound=true;
                    url = http.makeUrl(state);
                    req = http.makeRequest('GET', url);
                    req.then((data) => {
                        commit('NOT_FOUND_GIFT',data.data);
                    })
                }else{
                state.notFound=false;
                if (payload.newQuery !==undefined) {
                    commit('UPDATE_GIFTS', data.data);
                } else if(state.query!==""){
                    commit('ADD_GIFTS', data.data);
                }}
            })
        },
    },
    mutations: {
        UPDATE_GIFTS(state, data) {
            window.scrollTo(pageXOffset, 0);
            let tempArray = [];
            for (let i = 0; i < data.length; i++) {
                tempArray.push([data[i].images.fixed_height.webp, data[i].images.fixed_width_small.webp,data[i].title])
            }
            state.gifts = tempArray;
            state.loading=false;
        },
        ADD_GIFTS(state, data) {
            let tempArray = [];
            for (let i = 0; i < data.length; i++) {
                tempArray.push([data[i].images.fixed_height.webp, data[i].images.fixed_width_small.webp,data[i].title])
            }
            state.gifts = state.gifts.concat(tempArray);
            state.loading=false;
        },
        NOT_FOUND_GIFT(state, data){
            state.gifts = [[data.images.fixed_height.webp,data.images.fixed_width_small.webp,data.title]]
            state.loading=false;
        }

    }
}

