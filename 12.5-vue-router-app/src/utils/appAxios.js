import axios from "axios";

// sürekli olarak localhost u yazmamak için bir axios instance üzerinden harket edildi.
export const appAxios = axios.create({
  baseURL: "http://localhost:3000",
  
  //opsiyonel
  withCredentials: false,
  headers: {
    // bir token başlıkta bulunması gerekiyorsa
    "tokenX": "mytoken",
    // bir mime-type belirtilmek isteniyorsa
    "Content-Type": "application/json"
  }
  // opsiyonel bitti
});