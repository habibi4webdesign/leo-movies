import { FC, useEffect } from "react";
import LoadMoreMovie from "../LoadMoreMovie";
import MovieList from "../MovieList";
import useLazyMovieWatchlist from "./hooks/useLazyMovieWatchlist";

const MovieWatchlist = () => {
  const [getWatchListMovies, { data, loading, error }] = useLazyMovieWatchlist();

  useEffect(() => {
    getWatchListMovies(1);
  }, [getWatchListMovies]);

  const onChangePageHanlder = (page: number) => {
    getWatchListMovies(page);
  };

  return (
    <div>
      <MovieList loading={loading} error={error} movies={data} />
      <LoadMoreMovie changePage={onChangePageHanlder} />
    </div>
  );
};

export default MovieWatchlist;
