module.exports = `import './.stable/index.scss';
import Vue from 'vue';
import componentName from './componentName.vue';
new Vue({
    el: '.component-name-wrap',
    render: h=>h(componentName),
});
`
