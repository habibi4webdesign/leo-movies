import Button from "components/Button";
import { FC, useState } from "react";
import styles from "./LoadMoreMovie.module.scss";

interface ILoadMoreMovieProps {
  changePage: (page: number) => void;
}

const LoadMoreMovie: FC<ILoadMoreMovieProps> = (props) => {
  const { changePage } = props;
  const [page, setpage] = useState(1);

  const onPageChangeHandler = (page: number) => {
    setpage((prePage) => {
      const nextPage = prePage + 1;
      changePage(nextPage);
      return nextPage;
    });
  };

  return (
    <div className={styles.root}>
      <Button type="btnSecondary" onClick={() => onPageChangeHandler(page)}>
        Load More
      </Button>
    </div>
  );
};

export default LoadMoreMovie;
