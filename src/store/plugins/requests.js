export default {
    async makeRequest(method, url) {
        console.log(url);
        const response = await fetch(url, {method: method})

        return await response.json();
    },
    makeUrl(state) {
        console.log(state)
        if (state.query === "") {
            return 'https://api.giphy.com/v1/gifs/trending?' + process.env.VUE_APP_API_KEY + '&limit=48&rating=g'
        } else if (state.notFound) {
            return process.env.VUE_APP_URL + 'random?' + process.env.VUE_APP_API_KEY
                + '&tag=404&rating=r';
        } else {
            return  process.env.VUE_APP_URL + 'search?' + process.env.VUE_APP_API_KEY
                + '&limit=48&offset=' + state.offset + '&rating=g&lang=en&q=' + state.query;
        }

    }
}

