import axios from "axios";

const token = window.localStorage.getItem("token");

const initialAxios = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Authorization: token ? `Bearer ${token}` : " ",
  },
});

export default initialAxios;
