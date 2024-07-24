import logDirective from './log-directive.js';
import logClickDirective from './log-click-directive.js';
import changeDirective from './change-directive.js';

export default {
    install(Vue) {
        Vue.directive('log', logDirective);
        Vue.directive('log-click', logClickDirective);
        Vue.directive('change', changeDirective);
    }
};