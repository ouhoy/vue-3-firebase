<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
import useLogin from "@/composables/useLogin";



const email = ref('')
const password = ref('')

const {error, isPending, login} = useLogin()
const router = useRouter()
const handleSubmit = async () => {

  await login(email.value, password.value)

  if(!error.value) {
      await router.push('/')
    console.log("done!")
  }

}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h2>Login</h2>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="password">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Login</button>
    <div v-if="isPending">Loading...</div>
    <div v-if="error" class="error">
      {{error}}</div>
  </form>
</template>

<style scoped>

</style>