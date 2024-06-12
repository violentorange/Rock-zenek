<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";

const artists = ref([]);
const zenek = ref([]);
const valasztottKategoriaId = ref();
const kiválasztottZenek = ref([]);
const urladd = ref();
const NewDisc = ref({});
const Adatbázisba = ref({});

urladd.value = "http://127.0.0.1:8000/storage/";

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

  const AddToCart = (id) => {
    NewDisc.value = kiválasztottZenek.value.find((k) => k.id === id);
    Adatbázisba.value.song_id = NewDisc.value.id;
    Adatbázisba.value.songprice = NewDisc.value.PRICE;
    Adatbázisba.value.imageurl = NewDisc.value.IMAGEURL;
    Adatbázisba.value.songtitle = NewDisc.value.TITLE;
    Adatbázisba.value.user_id = 1;
    DataService.PostToCart(Adatbázisba.value)
    console.log(NewDisc.value);
}


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
    <div v-for="zene in kiválasztottZenek" class="col-lg-4 col-md-6 col-sm-12">
      <div class="card bg-dark border border-white border-5 m-4" style="width: 18rem; --bs-white-rgb: 192, 192, 192;">
  <img :src="urladd+zene.IMAGEURL" src="" class="card-img-top img-fluid " alt="Couldn't load image.">
  <div class="card-body">
    <h5 class="card-title">Cím: {{ zene.TITLE }}</h5>
    <p class="card-text">Műfaj: {{ zene.GENRE }} </p>
    <p class="card-text">Hossz: {{ zene.TIME }} </p>
    <p class="card-text">Kiadás Éve: {{ zene.YEAR }} </p>
    <p class="card-text">Ez egy helyettesítő szöveg.</p>
    <!-- <a :href="`/cart/`${zene.id}" @click="AddToCart" style="background-color: red;" class="btn btn-danger">Kosárba</a> -->
    <router-link to="#" @click="AddToCart(zene.id)" style="background-color: red;" class="nav-link fs-4 btn btn-danger">Kosárba</router-link>
  </div>
    </div>
  </div>
</div>

</div>

</div>

</div>
</template>
