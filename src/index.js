import './scss/main.scss';
import Vue from 'vue';

import store from './store';

import Main from './Main.vue';

new Vue({
    el: '#app',
    components: {
        Main,
    },
    created() {
        this.$store.dispatch('getData', 'starships');
        this.$store.dispatch('getData', 'planets');
        this.$store.dispatch('getData', 'people');
    },
    template: '<Main/>',
    store,
});
