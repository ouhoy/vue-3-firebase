<script setup lang="ts">
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "@/firebase/config";
import {ref} from "vue";

import {signOut} from "firebase/auth"

const currentUser = ref();

onAuthStateChanged(auth, (user) => {
  currentUser.value = user;
});

console.log(currentUser.value)

function handleLogout() {
  signOut(auth)
}

</script>

<template>
  <nav>
    <h1>My Book List</h1>

    <!-- for logged in users -->
    <div>
      <router-link :to="{name: 'home'}">Home</router-link>
      <button @click="handleLogout">Logout</button>
    </div>

    <!-- for logged out users -->
    <div>
      <router-link :to="{name: 'login'}">Login</router-link>
      <router-link :to="{name:'signup'}">Signup</router-link>
    </div>
    <div>
    </div>
  </nav>
</template>

<style>
nav {
  display: flex;
  align-items: center;
}

nav h1 {
  margin-right: auto;
  margin-bottom: 0;
}

nav a {
  margin-left: 16px;
  color: #2c3e50;
}

nav button {
  margin-left: 16px;
}

nav a.router-link-exact-active {
  color: #0ec58e;
}

nav + p {
  margin-top: 0;
  margin-bottom: 30px;
}
</style>