import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link className={styles.logo} href='/'>
          TV BLAND
        </Link>
        <div className={styles.userContainer}>
          <Image
            src='/icons/user.svg'
            alt='User account'
            width={24}
            height={24}
            className={styles.userIcon}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
