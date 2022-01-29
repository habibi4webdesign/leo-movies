import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain",
  },
};

export const apiConfig = {
  baseURL: "https://api.themoviedb.org/3",
  https: config,
};

const axiosInstance = axios.create(apiConfig);

const onRequestSuccess = (config: AxiosRequestConfig): AxiosRequestConfig => {
  return config;
};

const onRequestError = (error: AxiosError): AxiosError => {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log("Error", error.message);
  }
  console.log(error.config);

  return error;
};

const axiosResponse = (
  response: AxiosResponse
): AxiosResponse | Promise<AxiosResponse> => {
  // TODO: any action after receive response

  return response;
};

const onResponseError = (error: any) => {
  const status = error?.response ? error?.response?.status : null;
  if (status === 401) {
    window.location.href = "/login";
    localStorage.removeItem("session_id");
  } else if (status.toString().startsWith("4")) {
    return Promise.reject({ status_message: error?.response?.data?.errors[0] });
  } else {
    return Promise.reject({
      status_message: "your connection has a problem. please try again!!!",
    });
  }
};

axiosInstance.interceptors.request.use(onRequestSuccess, onRequestError);
axiosInstance.interceptors.response.use(axiosResponse, onResponseError);

export default axiosInstance;
