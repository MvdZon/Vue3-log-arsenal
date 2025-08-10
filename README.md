# Vue Log Arsenal

> Vue Log Arsenal is a lightweight plugin that equips your Vue 3 app with an arsenal of logging directives for easier debugging.

## Directives

| Directive | Description |
|----------|-------------|
| `v-log` | Logs all reactive and computed properties in the component. |
| `v-log.propertyName` | Logs the specified reactive property or computed value. |
| `v-log-change` | Logs all reactive and computed properties whenever a value within the component changes. |
| `v-log-change.propertyName` | Logs the specified property or computed value when its value changes. |
| `v-log-click` | Logs all reactive and computed properties in the component when the element with this directive is clicked. |
| `v-log-click.propertyName` | Logs the specified property or computed value when the element is clicked. |

## Demo
[Vue Log Arsenal in action](https://gifyu.com/image/bNdcu)

## Installation
> npm install vue-log-arsenal

```sh
import { createApp } from 'vue'
import App from './App.vue'
import logArsenal from 'vue-log-arsenal'

const app = createApp(App)
app.use(logArsenal)
app.mount('#app')
```

## Example
Logs the 'foobar' property when the div is clicked:
```sh
<div v-log-click.foobar>
    <p>
        Lorem ipsum
    </p>
</div>
```

Logs the 'foobar' property whenever its value changes:
```sh
<div v-log-change.foobar>
    <p>Lorem ipsum</p>
</div>
```

Logs all reactive and computed properties of this component when 'blabla' is true:
```sh
<div>
    <p 
        v-if="blabla === true"
        v-log
    >
        Lorem ipsum
    </p>
</div>
```