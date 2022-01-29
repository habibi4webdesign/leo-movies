import Loading from "components/Loading";
import Message from "components/Message";
import WatchLater from "components/WatchLater";
import { FC } from "react";
import useLazyWatchLaterMovie from "./hooks/useLazyWatchLaterMovie";
import styles from "./WatchLaterMovie.module.scss";

interface IWatchLaterMovieProps {
  id: number;
}

const WatchLaterMovie: FC<IWatchLaterMovieProps> = (props) => {
  const { id } = props;
  const [watchItLader, { data, loading, error }] = useLazyWatchLaterMovie();

  const addToWatchlistHandler = (media_id: number) => {
    watchItLader(media_id, !data);
  };

  if (error) {
    return <Message isInCenter text={error} />;
  }

  return (
    <div className={styles.root}>
      <WatchLater
        onClick={() => addToWatchlistHandler(id)}
        isInWatchlist={data}
      />
      {loading && <Loading />}
    </div>
  );
};

export default WatchLaterMovie;
