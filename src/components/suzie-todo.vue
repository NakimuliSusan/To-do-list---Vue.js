<template>
  <div class="pt-3">
    <h1>Suzie's Todo-List</h1>
    <input
      class="input"
      type="text"
      v-model="newitem"
      @keyup.enter="addItem"
      placeholder="Enter Todo"
    />
    <button class="button" large color="prmary" @click="addItem">
      Add Item
    </button>
    <v-card
      class="max-auto pa-3 ma-2 text-center"
      max-width="400"
      v-for="Todo in Todos"
      :key="Todo.id"
    >
    <div class="d-flex justify-content-between">
      <!-- Add the todo list items here -->
    </div>
    </v-card>
  </div>
</template>

<script>
import { db } from '../firebase/db'
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
        await db.collection('Todo').add({ name: this.newitem, done: false })
        this.newitem = ''
      }
    },
    async getTodos () {
      const todos = await db.collection('Todo').get()
      this.Todos = todos.docs.map(doc => doc.data())
    }
  }
}
</script>
