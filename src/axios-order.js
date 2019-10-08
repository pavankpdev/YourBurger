import axios from "axios";

const instance = axios.create({
  baseURL: "https://yourburger-95b47.firebaseio.com/"
});

export default instance;
