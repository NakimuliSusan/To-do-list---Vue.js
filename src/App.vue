<template>

  <v-content>

    <suzie-todo-vue/>

  </v-content>

</template>

<script>
import suzieTodoVue from './components/suzie-todo.vue'
export default {
  name: 'App',
  components: { suzieTodoVue },
  data: () => ({

  })
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
.first{
  background-color:#ffffff;
}

</style>
