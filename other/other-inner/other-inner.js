import './index.scss';

import Vue from 'vue';

import OtherInner from './other-inner.vue';

new Vue({
    el: '#v',
    render: h=>h(OtherInner),
});
