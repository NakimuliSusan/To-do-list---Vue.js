<template>

  <v-content>

    <Todolist/>

  </v-content>

</template>

<script>
import Todolist from './components/suzie-todo.vue'
export default {
  name: 'App',
  components: { Todolist },
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
.content{
  background-color:#ffffff;
}
button{
  padding:10px;
  border-radius:20px;
  background-color:#87cee9;
  border-style: none;
}
input::placeholder{
    text-align: center;
    font-size:20px;
}

</style>
