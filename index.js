import debugTools from './debug-tools.vue';
import dataLogger from './data-logger.js'
import logDirective from './log-directive.js';
import componentViewer from './component-viewer.js'

const plugin = {
    install(Vue) {
        if(process.env.NODE_ENV === "development") {
            Vue.mixin(dataLogger);
            Vue.mixin(componentViewer)
        }

        Vue.component('vDebugTools', debugTools);
        Vue.directive('log', logDirective);
    }
};

export default plugin;

export { debugTools };