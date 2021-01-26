import axios from "axios";
import { createRefreshInterceptor } from "utils/refereshInterceptor";

const base = "http://34.107.74.0:1337";
export const getMediaUrl = (path) => (!!path ? `${base}/${path}` : "");
const baseURL = `${base}/api`;
const axiosInstance = axios.create({
  baseURL,
  timeout: 60000,
  headers: {
    Authorization: "JWT " + localStorage.getItem("access_token"),
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  createRefreshInterceptor(axiosInstance, baseURL)
);

export const sendFile = (file) => {
  var formData = new FormData();

  formData.append("title", file.name);
  formData.append("song", file);

  return axiosInstance.post(`/song/`, formData);
};

export const getSongs = () => {
  return axiosInstance
    .get(`/song/`)
    .then(({ data }) =>
      data.map(({ fields, pk }) => ({
        id: pk,
        ...fields,
        songPath: getMediaUrl(fields.song),
        melodyPath: getMediaUrl(fields.melody),
        voicePath: getMediaUrl(fields.voice),
      }))
    )
    .catch(() => ({ data: [] }));
};

export const deleteSong = (id) => {
  return axiosInstance.delete(`/song/${id}/`).catch(() => ({ data: [] }));
};

export const login = async ({ username, password }) => {
  const response = await axiosInstance.post("/token/obtain/", {
    username,
    password,
  });

  axiosInstance.defaults.headers["Authorization"] =
    "JWT " + response.data.access;
  localStorage.setItem("access_token", response.data.access);
  localStorage.setItem("refresh_token", response.data.refresh);
  return response.data;
};

export const logout = () => {
  // TODO
  // const response = await axiosInstance.post('/blacklist/', {
  //     "refresh_token": localStorage.getItem("refresh_token")
  // });

  axiosInstance.defaults.headers["Authorization"] = undefined;
  localStorage.setItem("access_token", "");
  localStorage.setItem("refresh_token", "");
};

export const register = async ({ email, username, password }) => {
  axiosInstance.defaults.headers["Authorization"] = undefined;
  try {
    await axiosInstance.post("user/create/", {
      email,
      username,
      password,
    });
  } catch (err) {
    throw err?.response?.data;
  }

  return login({ username, password });
};

export const checkToken = (setUsername = () => {}) => {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    return false;
  }

  const data = parseJwt(localStorage.getItem("access_token"));
  setUsername(data.username);

  return true;
};

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
