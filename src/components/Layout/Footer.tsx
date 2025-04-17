import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <h3 className={styles.footer__title}>
          Built in Next.js by Ollie Cross
        </h3>
        <p className={styles.footer__copyright}>
          © {currentYear} TV Bland. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
