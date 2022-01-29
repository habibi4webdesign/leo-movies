import Input from "components/Input";
import { FC } from "react";
import styles from "./SearchMovie.module.scss";

interface ISearchMovieProps {
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchMovie: FC<ISearchMovieProps> = (props) => {
  const { onChangeSearch } = props;
  return (
    <div className={styles.searchInputWrapper}>
      <Input
      data-testid="MovieSearchInput"
      placeholder="Search Movie" onChange={onChangeSearch} />
    </div>
  );
};

export default SearchMovie;
