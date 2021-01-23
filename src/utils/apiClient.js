import axios from "axios";

const API_URL = "http://127.0.0.1:8000";
// axios.defaults.withCredentials = true;

export const sendFile = (file) => {
  var formData = new FormData();

  formData.append("title", file.name);
  formData.append("song", file);

  return axios.post(`${API_URL}/song/`, formData);
};

export const getSongs = () => {
  return axios.get(`${API_URL}/song/`);
};
