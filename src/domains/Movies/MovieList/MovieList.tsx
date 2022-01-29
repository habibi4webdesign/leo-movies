import Loading from "components/Loading";
import Message from "components/Message";
import { FC } from "react";
import Movie from "../Movie";
import styles from "./MovieList.module.scss";

interface IMovieListProps {
  movies: IMovieGalleryDto[] | undefined;
  error: string;
  loading: boolean;
}

const MovieList: FC<IMovieListProps> = (props) => {
  const { movies, error, loading = false } = props;


  if (error) {
    return <Message isInCenter text={error} />;
  }

  if (!movies?.length) {
    return <Message isInCenter text="No movies found" />;
  }

  return (
    <div className={styles.moviesWrapper}>
      {movies?.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          voteAverage={movie.vote_average}
          voteCount={movie.vote_count}
          posterPath={movie.poster_path}
        />
      ))}
      {
        loading && <Loading />
      }
    </div>
  );
};

export default MovieList;
