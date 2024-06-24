<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";
import { useLoginStateStore } from "../stores/LoginState_Store";

const loginstate = useLoginStateStore();

const artists = ref([]);
const zenek = ref([]);
const urladd = ref();
const cartitems = ref([]);
const CartItemsOfUser = ref([]);
const activeUserId = ref();

activeUserId.value=loginstate.id;

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

  DataService.getCartItemsOfUser(activeUserId.value)
    .then((resp) => {
      CartItemsOfUser.value = resp.items;
      console.log(CartItemsOfUser.value);

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
          <div class="col-md-2 col-sm-5">
            <div
              v-for="item in CartItemsOfUser"
              class="card text-black mt-2 mb-2"
              style="width: 10rem;"
            >
              <!-- <img :src="urladd+item.imageurl" class="card-img-cart d-flex align-items-center ms-auto me-auto mt-1" alt=" " /> -->
              <div class="card-body">
                <h5 class="card-title text-black">{{ item.songtitle }}</h5>
                <p class="card-text text-black">{{ item.songprice }} Ft</p>
              </div>
            </div>
          </div>
          <div class="col-md-10 col-sm-7 justify-content-center align-elements-center">
            
            <div class="container col-md-8 order-md-1">
              {{ activeUserId }}
          <h4 class="mb-3">Megrendelés</h4>
          <form class="needs-validation" novalidate="">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">Keresztnév</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Vezetéknév</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="email">Email <span class="text-muted">(Nem kötelező)</span></label>
              <input type="email" class="form-control" id="email" placeholder="valaki@xmail.com">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="mb-3">
              <label for="address">Lakcím</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Valamilyen utca" required="">
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="mb-3">
              <label for="address2">Lakcím 2<span class="text-muted">(Nem kötelező)</span></label>
              <input type="text" class="form-control" id="address2" placeholder="Lakás vagy szoba">
            </div>

            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="zip">Ország</label>
                <input type="text" class="form-control" id="country" placeholder="" required="">
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
                <div class="col-md-3 mb-3">
                <label for="zip">Megye</label>
                <input type="text" class="form-control" id="state" placeholder="" required="">
                <div class="invalid-feedback">
                  Zip code required.
                </div>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Irányítószám</label>
                <input type="text" class="form-control" id="state" placeholder="" required="">
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr class="mb-4">

            <h4 class="mb-3">Fizetési mód</h4>

            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">
                <label class="custom-control-label" for="credit">Bank kártya</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">
                <label class="custom-control-label" for="debit">Hitel kártya</label>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-name">Kártyára írt név</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                <small class="text-muted"></small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">Kártyaszám</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Lejárati dátum</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                <div class="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Biztonsági kód</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                <div class="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            <hr class="mb-4">
            <button class="btn darkred text-black btn-lg btn-block" type="submit">Fizetés</button>
          </form>
        </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
