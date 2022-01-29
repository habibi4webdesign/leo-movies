import { useCallback, useState } from "react";
import { makeItFavorite } from "../favoriteMovieAPI";

const useLazyFavoriteMovie = (): [
  (media_id: number, isFavorite: boolean) => Promise<void>,
  { data: boolean; loading: boolean; error: string }
] => {
  const [data, setdata] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const addToFavorite = useCallback(
    async (media_id: number, isFavorite: boolean) => {
      setLoading(true);
      const res = await makeItFavorite({ media_id, isFavorite }).catch(
        (err: any) => {
          setError(err?.message || err?.status_message);
          setLoading(false);
        }
      );
      if (res) {
        setError("");
        setdata(isFavorite);
        setLoading(false);
      }
    },
    []
  );

  return [addToFavorite, { loading, data, error }];
};
export default useLazyFavoriteMovie;
