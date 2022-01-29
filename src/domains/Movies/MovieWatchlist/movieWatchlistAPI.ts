import axios from "utils/axios";
import { AxiosResponse } from "axios";

interface IWatchlistParam {
  page: number;
}

export const getMovieWatchlist = ({
  page,
}: IWatchlistParam): Promise<AxiosResponse<ISearchMovieResultDto>> =>
  axios.get(`account/${localStorage.getItem("account_id")}/watchlist/movies`, {
    params: {
      api_key: process.env.REACT_APP_THEMOVIEDB_API_KEY,
      language: "en_US",
      include_adult: false,
      page,
      session_id: localStorage.getItem("session_id"),
      sort_by: "created_at.asc",
    },
  });
