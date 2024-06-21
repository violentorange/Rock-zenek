<script setup>
import { RouterView } from "vue-router";
</script>

<template>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <svg fill="none" viewBox="0 0 32 32" height="64" width="64" xmlns="http://www.w3.org/2000/svg">
<path d="m26.5853 2.05627c.35-.15.75.01.9.36.07.16.07.33.01.48-.04.14-.05.28.01.41l.35.77-.65.28-.34-.78c-.06-.13-.17-.22-.3-.28-.15-.07-.27-.18-.34-.34-.15-.35.01-.75.36-.9zm-.6799 1.07997c-.15-.35-.55-.51-.9-.36s-.51.55-.36.9c.07.16.19.27.34.34.13.06.24.15.3.28l.34.78.65-.28-.34-.78c-.06-.13-.05-.27-.01-.41s.04-.31-.02-.47zm-1.5901.71997c-.15-.35-.55-.51-.9-.36s-.51.55-.36.9c.07.16.19.27.34.34.13.06.24.15.3.28l.34.78.65-.28-.34-.78c-.06-.13-.06-.27-.01-.41.05-.15.05-.31-.02-.47z" fill="#d3d3d3"/>
<path d="m16.5253 23.0763c.12-1.37 1.13-2.5 2.49-2.77.55-.11 1.09-.3 1.61-.56.76-.38 1.07-1.31.69-2.07s-1.31-1.07-2.07-.69c-1.29.65-2.85.4-3.88-.63-1.3-1.3-1.31-3.42-.02-4.73.6-.61.63-1.59.03-2.20001-.6-.61-1.59-.61-2.19-.01-.93.93001-1.52 2.08001-1.76 3.29001-.27 1.36-1.42 2.35-2.79998 2.48-1.66.15-3.27.86-4.53 2.13-2.83 2.86-2.79 7.57.1 10.37 2.85 2.77 7.40998 2.74 10.22998-.08 1.25-1.26 1.96-2.88 2.1-4.53z" fill="red"/>
<path d="m15.3853 18.0463c-.31-.11-.6-.29-.85-.54-.15-.15-.28-.32-.39-.5-.17-.28-.28-.59-.32-.9-.06-.39-.29-.72-.62-.91-.14-.08-.3-.13-.46-.15-.47-.05-.93.17-1.18.58-.31.51-.87.84-1.52.87-1.09003.04-2.13003.45-2.92003 1.25-.01.01-.01.01-.02.02-.99 1.02-.97 2.65.03 3.65l2.25 2.25c.94003.94.22 2.21.21 3.1 0 .16.03.33.09.48.27.7 1.08003 1.03 1.78003.75.75-.3 1.43-.74 2.01-1.33.51-.51.91-1.09 1.21-1.73.28-.62.4-1.29.52-1.97.16-.89.6-1.71 1.32-2.39.54-.59 1.12-.92 1.94-1.11.17-.04.54-.18.69-.28.26-.17.32-.38.25-.56-.21-.6-.72-.42-1.11-.35-.67.13-1.24.06-1.42.04-.05-.01-.09-.01-.14-.02-.25-.04-1.01-.13-1.35-.25z" fill="black"/>
<path d="m9.36532 24.7662-2.41-2.4099c-.1-.1-.26-.1-.36 0l-1.07 1.0499c-.1.1-.1.26 0 .36l2.41 2.41c.1.1.26.1.36 0l1.06-1.0599c.11-.09.11-.2501.01-.3501z" fill="black"/>
<path d="m12.2054 17.9663 1.53 1.53c.24.24.24.62 0 .85s-.62.23-.85 0l-1.53-1.53c-.23-.24-.23-.62 0-.85.24-.23.62-.23.85 0zm-2.01 2.0199 1.53 1.53c.23.23.23.61 0 .85-.24.23-.62.23-.85 0l-1.53005-1.53c-.23-.24-.23-.62 0-.85.24-.23.62-.23.85005 0z" fill="white"/>
<path d="m25.0553 8.53625-.5553-1.53625-1.3247-.34375-9.53 9.53005c-.25.25-.25.65 0 .89l.99.9899c.25.25.65.25.89 0z" fill="#635994"/>
<path d="m26.1953 8.40626 1.08-1.81c.12-.2.36-.29.58-.2.57.22 1.24.1 1.68-.38.54-.58.55-1.49.02-2.07-.52-.57-1.26-.58-1.97-.26l-4.1 1.89c-.45.25-.53.86-.17 1.23l1.7 1.7c.34.33.9.29 1.18-.1z" fill="red"/>
</svg>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <router-link class="nav-link active fs-4" to="/">Zenék</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <router-link class="nav-link fs-4" to="/about">Rólunk</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <router-link class="nav-link fs-4" to="/registration">Regisztráció</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <router-link class="nav-link fs-4" to="/login">Bejelentkezés</router-link>
          </li>
        </ul>

        <div>

          

        </div>

        

        <router-link class="nav-link fs-4" to="/cart">

          <svg class="carticon" style="margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 576 512">
          <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" fill="darkred"/>
        </svg>

        </router-link>
      </div>
    </div>

  </nav>
  <div class="container-fluid redwide"></div>
  <div class="container-fluid redwide"></div>
  <div style="margin-bottom: 50px;" class="container-fluid redwide"></div>

  <router-view/>
  <div class="m-5 container-fluid bg-dark"></div>
  <!-- <div class="container-fluid bg-dark fullpage"></div> -->

  <nav style="background-color: darkred; text-transform: uppercase; font-weight: bold;" class="navbar bg fixed-bottom text-black">
  <div class="container-fluid d-flex">
    <div class="navbar-brand">
      Power Chord Vinyls
    </div>

    <div style="font-size: 28px;">
      2024
    </div>
  </div>
</nav>
</template>

<style scoped>

</style>
