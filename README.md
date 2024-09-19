# Vue Log Arsenal

> An arsenal of logging directives to improve the debugging experience of Vue3 applications

## Directives
- v-log: Log all properties and computed values in this component.
- v-log.variable: Log the property or computed value with the given name.
- v-log-change: Log all properties and computed values in this component when the value changes.
- v-log-change.variable: Log the property or computed value with the given name when a value changes.
- v-log-click: When clicked on this element, log all properties and computed values in this component.
- v-log-click.variable: When clicked on this element, log the property or computed value with the given name.

## Installation

```sh
import { createApp } from 'vue'
import App from './App.vue'
import logArsenal from 'vue-log-arsenal'

const app = createApp(App)
app.use(logArsenal)
app.mount('#app')
```

## Example

```sh
<div v-log-click.foobar>
    <p 
        v-if="blabla === true"
        v-log.otherObj
    ></p>
</div>
```