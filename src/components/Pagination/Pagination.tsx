import styles from "./Pagination.module.scss";

const Navigation = ({ episodes, page, setPage }) => {
  if (!episodes) return null;

  return (
    <ul className={styles.navigation}>
      {page > 0 && (
        <button
          className={styles.navigation__link}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
      )}

      {episodes.episodes.length > 18 && (
        <button
          className={styles.navigation__link}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      )}
    </ul>
  );
};

export default Navigation;
