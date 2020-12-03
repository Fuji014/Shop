import axios from "axios";

const { token } = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : "";

const initialAxios = axios.create({
  baseURL: "http://localhost:2000/api/",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default initialAxios;
