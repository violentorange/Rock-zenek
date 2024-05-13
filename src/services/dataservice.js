import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:8000";

export default {
  getAllArtists() {
    return Axios.get("/api/artists")
      .then((resp) => {
        console.log(resp.data);
        return resp.data;
      })
      .catch((err) => {
        //console.log(err);
        return Promise.reject(err);
      });
  },
  getAllZenek() {
    return Axios.get("/api/songs")
      .then((resp) => {
        //console.log(resp.data);
        return resp.data;
      })
      .catch((err) => {
        //console.log(err);
        return Promise.reject(err);
      });
   },
  // getValamiById(id) {
  //   return Axios.get(`/valamik/${id}`)
  //     .then((resp) => {
  //       //console.log(resp.data);
  //       return resp.data;
  //     })
  //     .catch((err) => {
  //       //console.log(err);
  //       return Promise.reject(err);
  //     });
  // },
  // saveUser(újobjektum) {
  //   return Axios.post("/valamik", újobjektum).then(() => {});
  // },
  // updateUser(módosítottObjektum, id) {
  //   return Axios.put(`/valamik/${id}`, módosítottObjektum).then(() => {});
  // },
};
