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
    beforeMount(el, binding, vnode) {
        el.addEventListener('click', () => logUpdate(el, binding, vnode))
    },
    unmounted(el, binding, vnode) {
        el.addEventListener('click', () => logUpdate(el, binding, vnode))
    }
}