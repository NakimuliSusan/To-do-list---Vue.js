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
.pt-3{
  background-color:#ffffff;
}
.input{
 padding:20px;
 width:25%;
 border-radius:20px;
}
.input::placeholder{
  text-align: center;
  font-size:20px;
}
.button{
  margin-left:3%;
  padding:20px;
  border-radius:20px;
  background-color: rgb(12, 150, 188);
  border-style:none;
}
.button:hover{
  background-color:palevioletred;
}
</style>
