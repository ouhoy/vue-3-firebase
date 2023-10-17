<script setup lang="ts">

import CreateBookForm from "@/components/CreateBookForm.vue";
import getCollections from "@/composables/getCollections";
import {db} from "@/firebase/config";
import {doc, deleteDoc, updateDoc} from "firebase/firestore";


type Book = {
  id: string;
  title: string;
  author: string;
  isFav: boolean
};

const {documents: books} = getCollections<Book>("books");


async function handleDelete(book: Book) {
  const docRef = doc(db, "books", book.id);

  await deleteDoc(docRef)

}

function handleIsFav(book: Book){
    const docRef = doc(db, "books", book.id);
    updateDoc(docRef, {
      isFav: !book.isFav
    })
}

</script>

<template>
  <div class="home">
    <div v-if="books === undefined">
      <p>loading books...</p>
    </div>
    <div v-else-if="books?.length === 0">
      <p>No books available.</p>
    </div>
    <div v-else>
      <ul>
        <li v-for="book in books" :key="book.id">
          <div class="details">
            <h3 @click="handleDelete(book)">{{ book.title }}</h3>
            <p>By {{ book.author }}</p>
          </div>
          <div @click="handleIsFav(book)" class="icon">
            <span :class="{'fav-book-icon': book.isFav}"  class="material-icons">favorite</span>
          </div>
        </li>
      </ul>
    </div>

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

.fav-book-icon {
  color: crimson;
}
</style>