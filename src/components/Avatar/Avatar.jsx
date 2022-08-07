import styles from "./Avatar.module.css";

const Avatar = ({userImage}) => {
  return (
    <div>
      <img src={userImage} className={styles.avatar} />
    </div>
  );
};

export default Avatar;
