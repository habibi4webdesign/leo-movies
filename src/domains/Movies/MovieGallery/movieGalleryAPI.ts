import axios from "utils/axios";
import { AxiosResponse } from "axios";

interface ISearchParam {
  query: string;
  page: number;
}

export const getMovieGallery = ({
  query,
  page,
}: ISearchParam): Promise<AxiosResponse<ISearchMovieResultDto>> =>
  axios.get("/search/movie", {
    params: {
      api_key: process.env.REACT_APP_THEMOVIEDB_API_KEY,
      language: "en_US",
      include_adult: false,
      query,
      page,
    },
  });
