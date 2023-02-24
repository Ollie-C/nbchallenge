import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        TV BLAND
      </Link>
    </header>
  );
};

export default Header;
