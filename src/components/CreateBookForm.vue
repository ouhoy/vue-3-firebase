<script setup lang="ts">
import {ref} from "vue";
import {addDoc,  collection} from "firebase/firestore";
import {db} from "@/firebase/config";


type Book = {
  title: string,
  author: string,
  isFav: boolean,
  id: string
}

const title = ref('')
const author = ref('')
const collectionRef = collection(db, "books");



const handleSubmit = async () => {

  await addDoc(collectionRef, {
    title: title.value,
    author: author.value,
    isFav: false,

  })

  title.value = "";
  author.value = "";

}



</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h3>Add a New Book</h3>

    <label for="title">Book title:</label>
    <input type="text" name="title" v-model="title" required>

    <label for="author">Book author:</label>
    <input type="text" name="author" v-model="author" required>

    <button>Add Book</button>
  </form>
</template>

<style>
form {
  padding: 10px;
  margin-top: 10px;
  border: 1px dashed #c3c8ce;
}
</style>