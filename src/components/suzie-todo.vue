<template>
  <div class="pt-3">
    <h1>Suzie's Todo-List</h1>
    <input
      class="input"
      type="text"
      v-model="newitem"
      @keyup.enter.prevent="addItem"
      placeholder="Enter Todo"
    />
    <button class="button" large color="prmary" @click.enter="addItem">
      Add Item
    </button>
    <v-card
      class="max-auto pa-3 ma-2 text-center"
      max-width="400"
      v-for="Todo in Todos"
      :key="Todo.id"
    >
    <div class="d-flex justify-content-between">
      <v-list-item-title class="list">{{Todo.name}}</v-list-item-title>
      <button color="red" @click="deleteTodo(Todo.id)">delete</button>
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
        await db.collection('Todos').add({ name: this.newitem, done: false })
        this.newitem = ''
      }
    },
    deleteTodo (id) {
      db.collection('Todo').doc(id).delete()
    },
    firestore: {
      Todos: db.collection('Todos')
    }
    // async getTodos () {
    //   const todos = await db.collection('Todo').get()
    //   this.Todos = todos.docs.map(doc => doc.data())
    // }
  }
}
</script>
