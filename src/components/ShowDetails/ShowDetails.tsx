import styles from './ShowDetails.module.scss';
import Cast from './CastList';
import { ICast, IShow } from '@/types/episode';
import { processSummary, getSecureImageUrl } from '../../utils/helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ShowInfo = ({ info }) => {
  const noDetails = '-';
  return (
    <div className={styles.show__infoContainer}>
      <p>{info[0]}</p>
      <b>{info[1] ? info[1] : noDetails}</b>
    </div>
  );
};

const ShowDetails = ({ show, cast }: { show: IShow; cast: ICast[] }) => {
  const router = useRouter();
  const {
    genres,
    network,
    schedule,
    status,
    image,
    name: showName,
    summary,
    rating,
  } = show;
  const showInfo = [
    ['Streamed on:', network?.name],
    ['Schedule:', schedule.days.join(', ')],
    ['Status:', status],
    ['Genres:', genres.join(', ')],
  ];

  //Get only first 5 cast members
  const filteredCast = cast.slice(0, 5);
  const imageUrl = image ? getSecureImageUrl(image.original) : null;

  return (
    <section className={styles.show}>
      <div className={styles.show__summary}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={showName}
            width={500}
            height={600}
            className={styles.show__image}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            loading='eager'
            sizes='(max-width: 768px) 100vw, 500px'
          />
        ) : (
          <div
            className={styles.show__image}
            style={{ backgroundImage: `url(/icons/tv.svg)` }}></div>
        )}

        <div className={styles.show__description}>
          <div className={styles.show__rating}>
            <Image
              src='/icons/star.svg'
              alt='rating star'
              width={24}
              height={24}
            />
            <p>{rating.average ? rating.average : '-'}/10</p>
          </div>
          <h2>{showName}</h2>
          <p>{summary ? processSummary(summary, 30) : 'No show details'}</p>
        </div>
        <Image
          src={'/icons/back.svg'}
          alt={'back button'}
          width={30}
          height={30}
          onClick={() => router.back()}
          className={styles.back}
        />
      </div>

      <div className={styles.show__details}>
        <div className={styles.show__info}>
          <h3>Show Info</h3>
          {showInfo &&
            showInfo.map((info, i) => <ShowInfo key={i} info={info} />)}
        </div>

        <div className={styles.show__info}>
          <h3>Starring</h3>
          {filteredCast.length < 1 && (
            <p className={styles.show__info}>No cast details.</p>
          )}
          {filteredCast.map((member: any) => (
            <Cast castMember={member} key={member.person.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowDetails;
