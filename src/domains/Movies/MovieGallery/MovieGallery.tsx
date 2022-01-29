import { FC, useState } from "react";
import LoadMoreMovie from "../LoadMoreMovie";
import MovieList from "../MovieList";
import SearchMovie from "../SearchMovie";
import useLazySearchMovie from "./hooks/useLazySearchMovie";

const MovieGallery = () => {
  const [searchMovie, { data, loading, error }] = useLazySearchMovie();
  const [query, setquery] = useState("");

  const searchMovieOnchangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e?.target?.value;
    setquery(value);
    searchMovie(value, 1);
  };

  const onChangePageHanlder = (page: number) => {
    searchMovie(query, page, true);
  };

  return (
    <div data-testid="MovieGallery">
      <SearchMovie onChangeSearch={searchMovieOnchangeHandler} />
      <MovieList loading={loading} error={error} movies={data} />
      <LoadMoreMovie changePage={onChangePageHanlder} />
    </div>
  );
};

export default MovieGallery;
