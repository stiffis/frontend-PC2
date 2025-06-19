//api/axiosInstance.ts
import axios from "axios";
import { getApiKey } from "../utils/storage";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api", // Cambiar
});

axiosInstance.interceptors.request.use((config) => {
  const apiKey = getApiKey();
  if (apiKey) {
    config.headers["apikey"] = apiKey; // Cambiar "apikey" por el nombre de tu header si es necesario
  }
  return config;
});

export default axiosInstance;
