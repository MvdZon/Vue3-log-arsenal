<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div>
    <input 
      type="text" 
      v-model="input1Value" 
      v-log-click
    />
    <p v-log-click.showComputed>{{ input1Value }}</p>
  </div>
  <div>
    <input 
      type="number" 
      v-model="input2Value" 
    />
    <p>{{ input2Value }}</p>
  </div>
  <input 
    type="checkbox" 
    v-model="showComputed" 
  />
  <p v-if="showComputed"><strong>{{ allInputsValue }}</strong></p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    allInputsValue() {
      return this.input1Value + this.input2Value;
    }
  },
  data() {
    return {
      obj: {
        blabal: 1,
        isTest: true,
        iii: ' ddf22'
      },
      showComputed: false,
      input2Value: 33,
      input1Value: 'testtest'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
