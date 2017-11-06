import './.stable/index.scss';

import Vue from 'vue';

import ohmy from './ohmy.vue';

new Vue({
    el: '#ohmy',
    // el: '#ohmy--bGRza',
    render: h=>h(ohmy),
});
