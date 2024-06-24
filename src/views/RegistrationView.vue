<script setup>
import { ref } from 'vue';
import DataService from "../services/dataservice";

const userName = ref("")
const email = ref("")
const password = ref("")
const password_confirmation = ref("")
const error = ref("")
const buttonDisabled = ref(false)

const ell = () => {
  // console.log("ok");
  if (password.value.length >= 8) {
    buttonDisabled.value = false
  }
}

const ellenor = () => {
 if (password.value.length < 8) {
  error.value = "A jelszó legalább 8 karakter hosszú legyen!"
  buttonDisabled.value = true
  alert("A jelszó legalább 8 karakter hosszú legyen!");
  return;
 }

if (password.value!= password_confirmation.value) {
  error.value = "A jelszavak nem egyeznek!"
  buttonDisabled.value = true
  alert("A jelszavak nem egyeznek!");
  return;
 }


const newuser = {name:userName.value,email:email.value,password:password.value,password_confirmation:password_confirmation.value};
console.log(userName);
DataService.RegisterUser(newuser);

}



</script>

<template>
  <div class="container-fluid bg-dark">

    <div class="container p-5 text-black border-white rounded user_forms border border-5" style="--bs-white-rgb: 139, 0, 0;">
    <form class="row g-3" @submit.prevent="onSubmit">

      <div class="col-md-12">
        <label for="inputUsername4" class="form-label">Teljes Név</label>
        <input v-model="userName" required type="text" class="form-control" id="inputUsername4" />
      </div>

      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input v-model="email" required type="email" class="form-control" id="inputEmail4" />
      </div>

      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Jelszó</label>
        <input @keyup="ell" v-model="password" required type="password" class="form-control" id="inputPassword4" />
      </div>

      <div class="col-md-6 mx-auto">
        <label for="inputPassword4" class="form-label">Jelszó megerősítés</label>
        <input @keyup="ell" v-model="password_confirmation" required type="password" class="form-control" id="inputPassword4" />
      </div>

      <div class="col-12 d-flex justify-content-center align-items-center">
        <button :disabled="buttonDisabled" @click="ellenor" type="submit" style="background-color: darkred; border-color: darkred;" class="btn btn-danger text-center">Regisztrálás</button>
      </div>

    </form>
    <!-- <div class="">{{ error }}</div> -->
  </div>

  </div>
</template>
