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
    <br>
    <ul
      class="list-container max-auto pa-3 ma-2 text-center"
      max-width="400"
      v-for="Todo in Todos"
      :key="Todo.id">
    <div class="list-item-flex">
      <div class="list-item leading">
        <input type="checkbox" name="check-box" id="check">
        <div class="list-title">{{Todo.name}}</div>
      </div>
      <div class="list-item trailing">
         <button class="button button-2" @click="editTodo(Todo.id)" v-show="isEditable">Edit</button>
         <button  class="button button-1"  color="red" @click="deleteTodo(Todo.id)">Delete</button>
      </div>
    </div>

   </ul>
  </div>
</template>

<script>
import { db } from '../firebase/db'
export default {
  data () {
    return {
      Todos: [],
      newitem: '',
      isEditable: true
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
        await db.collection('Todos').add({ name: this.newitem, done: 'completed' })
        this.newitem = ''
      }
    },
    editTodo (id) {
      db.collection('Todos').doc(id).editTodo(id)
    },
    deleteTodo (id) {
      db.collection('Todos').doc(id).delete()
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
 padding:8px;
 width:25%;
 font-size: 16px;
 border-radius:16px;
}
.input::placeholder{
  text-align: center;
  font-size:16px;
}

.button:hover{
  background-color:palevioletred;
}

/* List */
.list-item-flex{
  flex-direction: column;
  border:solid 1px black;
  display: flex;
  margin-top:1%;
  width:50%;
  margin-left:20%;
  padding:10px;
  border-radius:10px;
  text-align: center;
  justify-content: space-between;
}

.list-item{
  display: flex;
  direction: row;
  object-fit: wrap;
}

.list-title {
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: bold;
  text-align: start;
}
.trailing {
  align-self: flex-end;
}

.button {
  margin: 2px;
  width: 70px;
  padding:8px;
  background-color:gray;
  border-style:none;
  border-radius:16px;
  color:white;
  align-content:right;
}

.button-submit {
    background-color:green;

}
.button-1 {
  background-color:red;
}
.button-2{
  background-color:rgb(36, 202, 194);
}

</style>
