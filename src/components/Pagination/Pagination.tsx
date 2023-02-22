import styles from "./Pagination.module.scss";

const Navigation = ({ currentPage, totalPages, changePage }) => {
  if (!totalPages) {
    return;
  }

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <ul className={styles.navigation}>
      {currentPage <= totalPages && currentPage > 1 && (
        <li
          className={styles.navigation__link}
          onClick={() => changePage("back")}
        >
          &lt;
        </li>
      )}
      {pages.map((page) => (
        <li
          key={page}
          className={styles.navigation__link}
          onClick={() => changePage(page)}
        >
          {page}
        </li>
      ))}
      {currentPage < totalPages && (
        <li
          className={styles.navigation__link}
          onClick={() => changePage("forward")}
        >
          &gt;
        </li>
      )}
    </ul>
  );
};

export default Navigation;
