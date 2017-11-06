import './index.sass';

import Vue from 'vue';

import OtherInnerInner from './other-inner-inner.vue';

new Vue({
    el: '#v',
    render: h=>h(OtherInnerInner),
});
