import { useCallback, useState } from "react";
import { getMovieGallery } from "../movieGalleryAPI";

const useLazySearchMovie = (): [
  (query: string, page: number, isLoadMore?: boolean) => Promise<void>,
  { data: IMovieGalleryDto[] | undefined; loading: boolean; error: string }
] => {
  const [data, setdata] = useState<IMovieGalleryDto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const searchMovie = useCallback(
    async (query: string, page: number, isLoadMore?: boolean) => {
      setLoading(true);
      const res = await getMovieGallery({ query, page }).catch((err: any) => {
        setError(err?.message || err?.status_message);
        setLoading(false);
      });
      if (res) {
        setError("")
        if (isLoadMore) {
          setdata((preData) => [...preData, ...res?.data?.results]);
        } else {
          setdata(res?.data?.results);
        }
        setLoading(false);
      }

      if (!query.length) {
        setdata([]);
      }
    },
    []
  );

  return [searchMovie, { loading, data, error }];
};
export default useLazySearchMovie;
