import { ICast } from '@/types/episode';
import Image from 'next/image';
import styles from './ShowDetails.module.scss';
import { getSecureImageUrl } from '../../utils/helpers';

const CastList = ({ castMember }: { castMember: ICast }) => {
  const { person, character } = castMember;
  const imageUrl = person.image?.medium
    ? getSecureImageUrl(person.image.medium)
    : null;

  return (
    <div className={styles.show__infoContainer}>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={person.name}
          className={styles.show__profileImage}
          width={40}
          height={40}
          style={{ objectFit: 'cover', borderRadius: '50%' }}
        />
      ) : (
        <div className={styles.show__profileImagePlaceholder}>
          <Image
            src='/icons/user.svg'
            alt={person.name}
            width={24}
            height={24}
          />
        </div>
      )}
      <div className={styles.show__castInfo}>
        <p className={styles.show__personName}>{person.name}</p>
        <p className={styles.show__characterName}>as {character.name}</p>
      </div>
    </div>
  );
};

export default CastList;
