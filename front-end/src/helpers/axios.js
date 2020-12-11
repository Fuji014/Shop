import axios from "axios";

const initialAxios = axios.create();

initialAxios.interceptors.request.use(function (config) {
  const token = window.localStorage.getItem("token");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});
// Check your Header
// console.warn(">>>>>", initialAxios.defaults.headers);

export default initialAxios;
