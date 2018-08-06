import axios from "../node_modules/axios";

const instance = axios.create({
  baseURL: "https://reactluckyballs.firebaseio.com/"
});

export default instance;
