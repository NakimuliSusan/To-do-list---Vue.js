import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAQqc49xpLy8CBWZ1i9tkdzzcuRyR2umsE',
  authDomain: 'suzie-todo-list.firebaseapp.com',
  projectId: 'suzie-todo-list',
  storageBucket: 'suzie-todo-list.appspot.com',
  messagingSenderId: '591086623419',
  appId: '1:591086623419:web:68e11e38a6f491fb80279e'
}

export const app = firebase.initializeApp(firebaseConfig)

export const db = app.firestore()
// Your web app's Firebase configuration
