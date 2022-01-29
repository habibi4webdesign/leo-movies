import { useCallback, useState } from "react";
import { addToWatchlist } from "../watchLaterMovieAPI";

const useLazyWatchLaterMovie = (): [
  (media_id: number, isInWatchlist: boolean) => Promise<void>,
  { data: boolean; loading: boolean; error: string }
] => {
  const [data, setdata] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const watchItLader = useCallback(
    async (media_id: number, isInWatchlist: boolean) => {
      setLoading(true);
      const res = await addToWatchlist({ media_id, isInWatchlist }).catch(
        (err: any) => {
          setError(err?.message || err?.status_message);
          setLoading(false);
        }
      );
      if (res) {
        setError("");
        setdata(isInWatchlist);
        setLoading(false);
      }
    },
    []
  );

  return [watchItLader, { loading, data, error }];
};
export default useLazyWatchLaterMovie;
