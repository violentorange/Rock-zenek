<template>
 
  <div class="bg-dark text-white">

    <div class="container p-5 border border-5 border-white rounded user_forms text-black" style="--bs-white-rgb: 139, 0, 0;">
    <form class="row g-3 d-flex">

      <div class="col-md-12">
        <label for="inputEmail4" class="form-label" style="text-transform: capitalize;">Email cím</label>
        <input required type="email" class="form-control" id="inputEmail4" />
      </div>

      <div class="col-md-12">
        <label for="inputPassword4" class="form-label">Jelszó</label>
        <input required type="password" class="form-control" id="inputPassword4" />
      </div>

      <div class="col-12 d-flex  justify-content-center">
        <button type="submit" style="background-color: darkred; border-color: darkred;" class="btn btn-danger">Bejelentkezés</button>
      </div>

    </form>
  </div>

  </div>
  </template>