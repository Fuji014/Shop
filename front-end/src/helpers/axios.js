import axios from "axios";

const initialAxios = axios.create({
  baseURL: "http://localhost:2000/api/",
});

export default initialAxios;
