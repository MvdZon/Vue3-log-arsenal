function logUpdate(el, binding, vnode) {
    const hasModifiers = Object.keys(binding.modifiers).length > 0;
    let key, value;

    if(hasModifiers) {
        [key] = Object.keys(binding.modifiers)
        value = binding.instance[key]
    } else {
        key = vnode.ctx.type.name
        value = binding.instance
    }
    
    console.log(`Value of ${key} is:`, value)
}

export default {
    updated(el, binding, vnode) {
        logUpdate(el, binding, vnode)
    },
    mounted(el, binding, vnode) {
        logUpdate(el, binding, vnode)
    }
}