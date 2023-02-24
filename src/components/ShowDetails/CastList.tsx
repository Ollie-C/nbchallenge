import { ICast } from "@/types/episode";
import Image from "next/image";
import styles from "./ShowDetails.module.scss";

const CastList = ({ castMember }: { castMember: ICast }) => {
  const { person, character } = castMember;

  const background = person.image?.medium ? (
    <div
      className={styles.show__profileImage}
      style={{ backgroundImage: `url(${person.image.medium})` }}
    ></div>
  ) : (
    <Image
      src={"/icons/user.svg"}
      alt={person.name}
      className={styles.show__profileImage}
      width={14}
      height={14}
    />
  );

  return (
    <div className={styles.show__infoContainer}>
      {background}
      <p>
        {person.name} as {character.name}
      </p>
    </div>
  );
};

export default CastList;
