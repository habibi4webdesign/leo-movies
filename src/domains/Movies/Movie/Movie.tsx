import NameValue from "components/NameValue";
import { FC } from "react";
import FavoriteMovie from "../MovieActions/FavoriteMovie";
import WatchLaterMovie from "../MovieActions/WatchLaterMovie";
import styles from "./Movie.module.scss";

export interface IMovieProps {
  id: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  voteCount: number;
  voteAverage: number;
}

const Movie: FC<IMovieProps> = (props) => {
  const { id, title, posterPath, releaseDate, voteAverage, voteCount } = props;
  return (
    <div key={id} className={styles.movieCard}>
      <div className={styles.actionIconsWrapper}>
        <FavoriteMovie id={id} />
        <WatchLaterMovie id={id} />
      </div>
      <img
        alt={title}
        src={`${process.env.REACT_APP_IMAGES_BASE_URL}/${posterPath}`}
      />
      <NameValue name="title" value={title} />
      <NameValue name="release date" value={releaseDate} />
      <NameValue name="vote average" value={voteAverage} />
      <NameValue name="vote count" value={voteCount} />
    </div>
  );
};

export default Movie;
