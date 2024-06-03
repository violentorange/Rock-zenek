<script setup>
import { ref } from 'vue';

const userName = ref("")
const email = ref("")
const password = ref("")
const error = ref("")
const buttonDisabled = ref(false)

const ell = () => {
  console.log("ok");
  if (password.value.length >= 8) {
    buttonDisabled.value = false
  }
}

const ellenor = () => {
 if (password.value.length < 8) {
  error.value = "A jelszó legalább 8 karakter hosszú legyen!"
  buttonDisabled.value = true
 }

}

</script>

<template>
  <div class="container-fluid bg-dark">

    <div class="container p-5 text-white">
    <form class="row g-3" @submit.prevent="onSubmit">

      <div class="col-md-12">
        <label for="inputUsername4" class="form-label">Username</label>
        <input v-model="userName" required type="text" class="form-control" id="inputUsername4" />
      </div>

      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input v-model="email" required type="email" class="form-control" id="inputEmail4" />
      </div>

      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Password</label>
        <input @keyup="ell" v-model="password" required type="password" class="form-control" id="inputPassword4" />
      </div>

      <div class="col-12">
        <button :disabled="buttonDisabled" @click="ellenor" type="submit" style="background-color: darkred; border-color: darkred;" class="btn btn-danger">Register</button>
      </div>

    </form>
    <div class="">{{ error }}</div>
  </div>

  </div>
</template>
