import styles from "./Header.module.scss";
import { useContext } from "react";
// import { ShowsContext } from "@/contexts/ShowsContext";

const Header = () => {
  // const { currentShow, randomShow } = useContext(ShowsContext);

  return (
    <header className={styles.header}>
      <h1>TV BLAND</h1>
      {/* {currentShow && currentShow.image && (
        <>
          <div
            className={styles.header__background}
            style={{ backgroundImage: `url(${currentShow.image.original})` }}
          ></div>
        </>
      )} */}
    </header>
  );
};

export default Header;
