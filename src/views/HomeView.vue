<script setup lang="ts">

import {ref} from "vue";
import CreateBookForm from "@/components/CreateBookForm.vue";

const books = ref([
  {title: 'name of the wind', author: 'patrick rothfuss', isFav: false, id: '1'},
  {title: 'the way of kings', author: 'brandon sanderson', isfav: false, id: '2'}
])


</script>

<template>
  <div class="home">
    <ul>
      <li v-for="book in books" :key="book.id">
        <div class="details">
          <h3>{{ book.title }}</h3>
          <p>By {{ book.author }}</p>
        </div>
        <div class="icon">
          <span class="material-icons">favorite</span>
        </div>
      </li>
    </ul>
    <CreateBookForm/>
  </div>
</template>
<style>

.home {
  max-width: 640px;
  margin: 32px auto;
}

.home ul {
  padding: 0;
}

.home li {
  list-style-type: none;
  background: #fff;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 12px;
  display: flex;
}

.home li .details {
  margin-right: auto;
}

.home li h3 {
  margin: 0 0 4px;
}

.home li h3:hover {
  cursor: pointer;
  text-decoration: line-through;
}

.home li p {
  margin: 0;
}

.icon {
  color: #bbbbbb;
  cursor: pointer;
}
</style>