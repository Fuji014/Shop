import axios from "axios";

const initialAxios = axios.create({
  baseURL: "http://localhost:2000/api/",
  // headers: {
  //   'Content-Type': 'applicat'
  // }
});

export default initialAxios;
