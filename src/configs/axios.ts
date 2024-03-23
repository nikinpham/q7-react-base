import axios, { AxiosError, AxiosResponse } from "axios";
const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

// Interceptors
axiosClient.interceptors.request.use(
  (config) => {
    // const { getUserInformation: userInformation } = store.getters;
    // const { accessToken = "" } = userInformation || {};
    // config.headers.Authorization = "Bearer " + accessToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response.data);
    return response.data;
  },
  async (error: AxiosError) => {
    return error.response && Promise.reject(error.response.data);
  }
);

export default axiosClient;
