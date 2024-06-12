<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";

const artists = ref([]);
const zenek = ref([]);
const urladd = ref();
const cartitems = ref([]);
const AllCartItems = ref([]);

urladd.value = "http://127.0.0.1:8000/storage/";

onMounted(() => {
  // Ez akkor fut le, amikor betöltődik a HomeView komponens

  DataService.getAllArtists()
    .then((resp) => {
      artists.value = resp.data;
      //console.log(artists.value);
    })
    .catch((err) => {
      console.log(err);
    });

  DataService.getAllCartItems()
    .then((resp) => {
      AllCartItems.value = resp.data;
      console.log(AllCartItems.value);

      // for (let i = 0; i < AllCartItems.value.length; i++) {
      //   let j = 0;
      //   while (zenek.value[j].id != AllCartItems.value[i].song_id) {
      //     j++;
      //   }
      //   console.log(zenek.value[j].id);
      //   console.log(AllCartItems.value[i].song_id);
      // }
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

  //   const valaszto = () => {
  //   cartitems.value = zenek.value.filter(
  //     (k) => k.song_id === zenek.value
  //   );
  //   console.log(cartitems.value);

  //   // ha van megfelelő végpont (és kellene, hogy legyen) akkor használjuk azt (:
  // };
  // console.log(AllCartItems.value);
});
</script>

<template>
  <div class="container-fluid">
    <div class="container d-flex align-items-center justify-content-center text-center">
      <div class="container text-center m-4">
        <div class="row">
          <div class="col-md-2 col-sm-5 darkred-border border-danger border">
            <div
              v-for="item in AllCartItems"
              class="card text-black mt-2 mb-2"
              style="width: 10rem;"
            >
              <img :src="urladd+item.imageurl" class="card-img-cart d-flex align-items-center ms-auto me-auto mt-1" alt=" " />
              <div class="card-body">
                <h5 class="card-title text-black">{{ item.songtitle }}</h5>
                <p class="card-text text-black">{{ item.songprice }} Ft</p>
              </div>
            </div>
          </div>
          <div class="col-md-10 col-sm-7 darkred-border border-danger border">
            Column
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
