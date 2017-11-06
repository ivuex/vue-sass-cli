import './.stable/index.scss';

import Vue from 'vue';

import hello from './hello.vue';

new Vue({
    el: '#hello',
    // el: '#hello',
    render: h=>h(hello),
});
