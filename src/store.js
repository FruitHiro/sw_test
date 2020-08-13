import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tab: 'Starships',
        data: {
            starships: {},
            planets: {},
            people: {},
        }
    },
    mutations: {
        updateData: (state, info) => {
            state.data[info.type] = info.data;
        },
        updateTab: (state, data) => {
            state.tab = data;
        },
    },
    actions: {
        getData({ commit }, type = 'starships') {
            fetch(`https://swapi.dev/api/${type}/`)
                .then(response => response.json())
                .then(data => {
                    commit('updateData', {type, data});
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
});
