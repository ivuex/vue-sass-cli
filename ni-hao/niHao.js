import './.stable/index.scss';

import Vue from 'vue';

import niHao from './niHao.vue';

new Vue({
    el: '#ni-hao',
    // el: '#ni-hao',
    render: h=>h(niHao),
});
