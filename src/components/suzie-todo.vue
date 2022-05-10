<template>
<div class="pt-3">
  <h1>Suzie's Todo-List</h1>
  <v-col cols="6">
  <v-row class="d-flex justify-center" >
    <v-text-field label="new" outlined v-model="newitem" @keyup.enter="addItem"></v-text-field>
    <v-btn large color="prmary" @click="addItem">Add Item</v-btn>
  </v-row>
  </v-col>
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
