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
      artists.value = resp;
      //console.log(kategoriak.value);
    })
    .catch((err) => {
      console.log(err);
    });

DataService.getAllZenek()
  .then((resp) => {
    zenek.value = resp;
    //console.log(valamik.value);
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
  <select v-model="valasztottKategoriaId" @change="valaszto">
    <option v-for="muvesz in artists" :value="muvesz._id">{{ muvesz.artist }}</option>
  </select>
{{valasztottKategoriaId}}

  <ul class="m-4">
    <li v-for="zene in kiválasztottZenek">{{ zene.TITLE }} {{ zene._id }}</li>
  </ul>
</template>
