<template>
<div class="pt-3">
  <h1>Suzie's Todo-List</h1>
  <input class="input" type="text" v-model="newitem" @keyup.enter="addItem" placeholder="Enter Todo">
  <button class="button" large color="prmary" @click="addItem">Add Item</button>
</div>
</template>
<script>
import { app } from '../firebase/db'
export default {
  data () {
    return {
      Todos: [],
      newitem: ''
    }
  },
  methods: {
    async addItem () {
      if (this.newitem) {
        await app.collection('Todo').add({ name: this.newitem })
        this.newitem = ''
      }
    }
  }
}
</script>
