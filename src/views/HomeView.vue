<script setup lang="ts">

import {ref} from "vue";
import CreateBookForm from "@/components/CreateBookForm.vue";
import {db} from "@/firebase/config";
import {collection, getDocs} from "firebase/firestore"


 type Book = {
  id: string;
  title: string;
  author: string;
};

const books = ref([] as Book[])

const collectionRef = collection(db,"books");


   getDocs(collectionRef)
      .then(snapshot => {
        let docs: Book[] = []
        snapshot.docs.forEach(doc => {
          const data = doc.data() as Book;
          docs.push({...data, id: doc.id })
        })
        books.value = docs
      })

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