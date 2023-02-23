import styles from "./ShowDetails.module.scss";

const CastList = ({ castMember }) => {
  const { person, character } = castMember;

  const background = person.image?.medium ? `${person.image.medium}` : "none";

  return (
    <div className={styles.show__infoContainer}>
      <div
        className={styles.show__profileImage}
        style={{ backgroundImage: background }}
      ></div>
      <p>
        {person.name} as {character.name}
      </p>
    </div>
  );
};

export default CastList;
