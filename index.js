import logDirective from './log-directive.js'
import logClickDirective from './log-click-directive.js'
import changeDirective from './change-directive.js'

export default {
    install(Vue, options = {}) {
        console.log((999))
        const noop = {}
        const isProd =
            (typeof process !== 'undefined' && process.env?.NODE_ENV === 'production') ||
            (typeof import.meta !== 'undefined' && import.meta.env?.PROD) ||
            false
        const directivesEnabled = options.enableInProduction ?? !isProd

        Vue.directive('log', directivesEnabled ? logDirective : noop)
        Vue.directive('log-click',  directivesEnabled ? logClickDirective : noop)
        Vue.directive('log-change', directivesEnabled ? changeDirective : noop)
    }
}