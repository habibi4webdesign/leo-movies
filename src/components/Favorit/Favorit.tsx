import { ReactComponent as FavoriteSelectedIcon } from "assets/icons/favoriteIconSelected.svg";
import { ReactComponent as FavoriteUnSelectedIcon } from "assets/icons/favoriteIconUnSelected.svg";
import React, { FC } from "react";
import styles from "./Favorit.module.scss";

interface IFavoritProps {
  isFavorite: boolean;
  onClick: () => void;
}

const Favorit: FC<IFavoritProps> = (props) => {
  const { isFavorite, onClick } = props;
  return (
    <div onClick={onClick} className={styles.root}>
      {isFavorite ? <FavoriteSelectedIcon /> : <FavoriteUnSelectedIcon />}
    </div>
  );
};

export default Favorit;
