import axios from "utils/axios";
import { AxiosResponse } from "axios";

export const lognIn = (): Promise<AxiosResponse<any>> => {
  return axios.get(
    `authentication/token/new?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}`
  );
};

export const createSession = (
  request_token: string
): Promise<AxiosResponse<any>> => {
  return axios.post(
    `/authentication/session/new?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}`,
    {
      request_token,
    }
  );
};

export const getUserInfo = (
  session_id: string
): Promise<AxiosResponse<any>> => {
  return axios.get(
    `/account?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}&session_id=${session_id}`
  );
};
