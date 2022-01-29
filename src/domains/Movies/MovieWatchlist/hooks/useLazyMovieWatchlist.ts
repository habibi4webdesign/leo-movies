import { useCallback, useState } from "react";
import { getMovieWatchlist } from "../movieWatchlistAPI";

const useLazyMovieWatchlist = (): [
  (page: number) => Promise<void>,
  { data: IMovieGalleryDto[] | undefined; loading: boolean; error: string }
] => {
  const [data, setdata] = useState<IMovieGalleryDto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const getWatchListMovies = useCallback(async (page: number) => {
    setLoading(true);
    const res = await getMovieWatchlist({ page }).catch((err: any) => {
      setError(err?.message || err?.status_message);
      setLoading(false);
    });
    if (res) {
      setError("")
      setdata(preData => [...preData, ...res?.data?.results]);
      setLoading(false);
    }
  }, []);

  return [getWatchListMovies, { loading, data, error }];
};
export default useLazyMovieWatchlist;
