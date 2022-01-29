import axios from "utils/axios";
import { AxiosResponse } from "axios";

interface IWatchLaderParam {
  media_id: number;
  isInWatchlist: boolean;
}

export const addToWatchlist = ({
  media_id,
  isInWatchlist,
}: IWatchLaderParam): Promise<AxiosResponse<any>> =>
  axios.post(
    `account/${localStorage.getItem("account_id")}/watchlist`,
    {
      media_type: "movie",
      media_id,
      watchlist: isInWatchlist,
    },
    {
      params: {
        api_key: process.env.REACT_APP_THEMOVIEDB_API_KEY,
        session_id: localStorage.getItem("session_id"),
      },
    }
  );
