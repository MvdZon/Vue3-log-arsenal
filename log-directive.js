function logUpdate(binding) {
    const [key] = Object.keys(binding.modifiers)
    const value = binding.instance[key]
    
    console.log(`V-log value of ${key} is:`, value)
}

export default {
    mounted(el, binding) {
        logUpdate(binding)
    },
    updated(el, binding) {
        logUpdate(binding)
    }
}