<script setup lang="ts">
import {ref} from "vue";


const title = ref('')
const author = ref('')

const handleSubmit = async () => {
  console.log(title.value, author.value)
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