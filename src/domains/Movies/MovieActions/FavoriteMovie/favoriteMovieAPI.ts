import axios from "utils/axios";
import { AxiosResponse } from "axios";

interface IFavoriteParam {
  media_id: number,
  isFavorite: boolean
}

export const makeItFavorite = ({
  media_id,
  isFavorite,
}: IFavoriteParam): Promise<AxiosResponse<any>> =>
  axios.post(
    `account/${localStorage.getItem("account_id")}/favorite`,
    {
      media_type: "movie",
      media_id,
      favorite: isFavorite,
    },
    {
      params: {
        api_key: process.env.REACT_APP_THEMOVIEDB_API_KEY,
        session_id: localStorage.getItem("session_id"),
      },
    }
  );