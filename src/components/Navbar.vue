<script setup lang="ts">
import {auth} from "@/firebase/config";

import {signOut} from "firebase/auth"
import getUser from "@/composables/getUser";
import {useRouter} from "vue-router";
import {watch, watchEffect} from "vue";


const {user} = getUser();
const router = useRouter()


async function handleLogout() {
  await signOut(auth)
  if (!user.value) {
    router.push('/login')
    console.log("Ok!")
  }

}

</script>

<template>
  <nav>
    <h1>My Book List</h1>

    <!-- for logged in users -->
    <div v-if="user">
      <router-link :to="{name: 'home'}">Home</router-link>
      <button @click="handleLogout">Logout</button>
    </div>

    <!-- for logged out users -->
    <div v-if="!user">
      <router-link :to="{name: 'login'}">Login</router-link>
      <router-link :to="{name:'signup'}">Signup</router-link>
    </div>
    <div>
    </div>
  </nav>
  <div v-if="user">{{ user.email }}</div>
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