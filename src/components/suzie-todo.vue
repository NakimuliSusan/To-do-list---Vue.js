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
      <input type="checkbox" name="check-box" id="check">
      <v-list-item-title class="list">{{Todo.name}}</v-list-item-title>
      <button class="button-2" @click.prevent="editTodo(Todo-id)">Edit</button>
      <button  class="button-1"  color="red" @click="deleteTodo(Todo.id)">delete</button>
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
  // Learn about vue lifecycle callbacks.
  created () {
    // When the view is created, fetch the todo items.
    this.getTodos()
  },
  methods: {
    async addItem () {
      if (this.newitem) {
        await db.collection('Todos').add({ name: this.newitem, done: false })
        this.newitem = ''
      }
    },
    editTodo (id) {
      db.collection('Todos').doc(id).Edit()
    },
    deleteTodo (id) {
      db.collection('Todos').doc(id).delete()
    },
    edit: function () {
      this.isEditing = !this.isEditing
    },
    firestore: {
      Todos: db.collection('Todos')
    },
    updateTodoItem (id, done) {
      db.collection('Todos').doc(id).update({ done: done })
    },
    getTodos () {
      // Read about firebase realtime data fetching: https://firebase.google.com/docs/firestore/query-data/listen#web-version-8
      db.collection('Todos').onSnapshot(snapshot => {
        this.Todos = snapshot.docs.map((doc) => { return { id: doc.id, ...doc.data() } })
      })
      // Read about the Dot operator used to access the data. https://oprearocks.medium.com/what-do-the-three-dots-mean-in-javascript-bc5749439c9a
      // The code above is the same as:
      // Getting items using for loop
      // Learn about the `map()` function for javascript arrays
      // for (let i = 0; i < todos.docs.length; i++) {
      //   this.Todos.push(todos.docs[i].data())
      // }
    }
  }
}
</script>
<style>
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
.d-flex{
  border:solid 1px black;
  justify-content: space-between;
  margin-top:1%;
  width:50%;
  margin-left:20%;
  padding:10px;
  border-radius:10px;
  text-align: center;
}
.button-1{
  width:20%;
  padding:15px;
  background-color:red;
  border-style:none;
  border-radius:20px;
  color:white;
  margin-left:15%;
  align-content:right;
}
.button-2{
  width:20%;
  padding:15px;
  background-color:rgb(36, 202, 194);
  border-style:none;
  border-radius:20px;
  color:white;
  margin-left:10%;
}

</style>
