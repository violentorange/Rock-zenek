import { defineStore } from "pinia";

export const useLoginStateStore = defineStore({
  id: "loginstate",
  state: () => ({
    isLoggedIn: false,
    // isAdmin: false,
    email: "",
    password: "",
    id: 0,
  }),
});
