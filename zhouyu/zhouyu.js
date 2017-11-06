import './.stable/index.scss';

import Vue from 'vue';

import zhouyu from './zhouyu.vue';

new Vue({
    el: '#zhouyu',
    // el: '#zhouyu--hash',
    render: h=>h(zhouyu),
});
