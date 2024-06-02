<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";

const artists = ref([]);
const zenek = ref([]);
const valasztottKategoriaId = ref();
const kiválasztottZenek = ref([]);

onMounted(() => {
  // Ez akkor fut le, amikor betöltődik a HomeView komponens
}),
  DataService.getAllArtists()
    .then((resp) => {
      artists.value = resp.data;
      //console.log(artists.value);
    })
    .catch((err) => {
      console.log(err);
    });

DataService.getAllZenek()
  .then((resp) => {
    zenek.value = resp.data;
    //console.log(zenek.value);
  })
  .catch((err) => {
    console.log(err);
  });

const valaszto = () => {
  kiválasztottZenek.value = zenek.value.filter(
    (k) => k.ARTIST_ID === valasztottKategoriaId.value
  );
  console.log(kiválasztottZenek.value);

  // ha van megfelelő végpont (és kellene, hogy legyen) akkor használjuk azt (:
};
</script>

<template>
<div class="container-fluid bg-dark text-white">

<div class="">

<div style="" class="d-flex align-items-center justify-content-center">

  <select v-model="valasztottKategoriaId" @change="valaszto">
    <option v-for="muvesz in artists" :value="muvesz.id" >{{ muvesz.artist }}</option>
  </select>
  <!-- <ul class="m-4">
    <li v-for="zene in kiválasztottZenek">{{ zene.TITLE }} <img :src="zene.IMAGEURL" src="{{('')}}" alt="Image"/></li>
  </ul> -->


</div>

</div>

<div style="margin-top: 30px;" class="container d-flex justify-content-center">


  
  <div   class="container text-center">
  <div class="row">
    <div v-for="zene in kiválasztottZenek" class="col-3">
      <div class="card bg-dark m-4" style="width: 18rem;">
  <img :src="zene.IMAGEURL" src="" class="card-img-top img-fluid img-thumbnail" alt="Couldn't load image.">
  <div class="card-body">
    <h5 class="card-title">{{ zene.TITLE }}</h5>
    <p class="card-text">Műfaj: {{ zene.GENRE }} </p>
    <p class="card-text">Megjelenés éve: {{ zene.YEAR }} </p>
    <p class="card-text">Hossz: {{ zene.TIME }} </p>
    <p class="card-text">Ez egy helyettesítő szöveg.</p>
    <a href="#" style="background-color: red;" class="btn btn-danger">Vásárlás</a>
  </div>
    </div>
  </div>
</div>

</div>

</div>

</div>
</template>
