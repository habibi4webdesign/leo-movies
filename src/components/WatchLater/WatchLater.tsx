import React, { FC } from "react";
import styles from "./WatchLater.module.scss";
import { ReactComponent as WatchLatereSelectedIcon } from "assets/icons/watchLaterIconSelected.svg";
import { ReactComponent as WatchLatereUnSelectedIcon } from "assets/icons/watchLaterIconUnselected.svg";

interface IWatchLaterProps {
  isInWatchlist: boolean | undefined;
  onClick: () => void;
}

const WatchLater: FC<IWatchLaterProps> = (props) => {
  const { isInWatchlist = false, onClick } = props;
  return (
    <div onClick={onClick} className={styles.root}>
      {isInWatchlist ? <WatchLatereSelectedIcon /> : <WatchLatereUnSelectedIcon />}
    </div>
  );
};

export default WatchLater;
