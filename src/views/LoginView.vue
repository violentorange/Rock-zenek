<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";
import { useLoginStateStore } from "../stores/LoginState_Store";

const user = ref({});

const loginstate = useLoginStateStore();

const Login = async () => {
  const resp = await DataService.Login(user.value)
  // console.log(resp);
  loginstate.id = resp
  console.log(loginstate);
}



</script>


<template>
 
  <div class="bg-dark text-white">

    <div class="container p-5 border border-5 border-white rounded user_forms text-black" style="--bs-white-rgb: 139, 0, 0;">
    <div class="row g-3 d-flex">

      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">Email cím</label>
        <input required type="email" class="form-control" id="inputEmail4" v-model="user.email" />
      </div>

      <div class="col-md-12">
        <label for="inputPassword4" class="form-label">Jelszó</label>
        <input required type="password" class="form-control" id="inputPassword4" v-model="user.password"/>
      </div>
{{ loginstate.id }}
      <div class="col-12 d-flex  justify-content-center">
        <button @click="Login" style="background-color: darkred; border-color: darkred;" class="btn btn-danger">Bejelentkezés</button>
      </div>

    </div>
  </div>

  </div>
  </template>