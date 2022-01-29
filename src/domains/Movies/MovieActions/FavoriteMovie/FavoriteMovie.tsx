import Favorit from "components/Favorit/Favorit";
import Loading from "components/Loading";
import Message from "components/Message";
import { FC, useState } from "react";
import styles from "./FavoriteMovie.module.scss";
import { makeItFavorite } from "./favoriteMovieAPI";
import useLazyFavoriteMovie from "./hooks/useLazyFavoriteMovie";

interface IFavoriteMovieProps {
  id: number;
}

const FavoriteMovie: FC<IFavoriteMovieProps> = (props) => {
  const { id } = props;
  const [addToFavorite, { data, loading, error }] = useLazyFavoriteMovie();

  const favoriteHandler = (media_id: number) => {
    addToFavorite(media_id, !data);
  };

  if (error) {
    return <Message isInCenter text={error} />;
  }

  return (
    <div className={styles.root}>
      <Favorit onClick={() => favoriteHandler(id)} isFavorite={data} />
      {loading && <Loading />}
    </div>
  );
};

export default FavoriteMovie;
