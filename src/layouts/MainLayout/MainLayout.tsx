import MovieGallery from "domains/Movies/MovieGallery";
import { FC, ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MainLayout.module.scss";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = (props) => {
  const { children } = props;
  const [isSidebalOpen, setisSidebalOpen] = useState(true);

  return (
    <div className={styles.root}>
      <div
        className={`${styles.sidebar} ${
          isSidebalOpen ? styles.opened : styles.closed
        }`}
      >
        <div className={styles.toggleWrapper}>
          <a
            className={`${styles.toggleMenu} ${
              isSidebalOpen ? styles.active : ""
            }`}
            href="#"
            onClick={() => setisSidebalOpen(!isSidebalOpen)}
          >
            <i></i>
            <i></i>
            <i></i>
          </a>
        </div>
        <div className={styles.sidebarLinksWrapper}>
          <Link to="/">home</Link>
          <Link to="/watch-list">watch list</Link>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default MainLayout;
