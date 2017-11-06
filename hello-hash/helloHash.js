import './.stable/index.scss';

import Vue from 'vue';

import helloHash from './helloHash.vue';

new Vue({
    el: '#hello-hash',
    // el: '#hello-hash',
    render: h=>h(helloHash),
});
