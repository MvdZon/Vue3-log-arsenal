import vDebug from './vDebug.vue';
import logging from './logging.js'
import componentTooltip from './componentTooltip.js'

const plugin = {
    install(Vue) {
        if(process.env.NODE_ENV === "development") {
            Vue.mixin(logging);
            Vue.mixin(componentTooltip)
        }

        Vue.component('vDebug', vDebug);
    }
};

export default plugin;

export { vDebug };