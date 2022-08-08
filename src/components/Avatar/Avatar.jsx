import styles from "./Avatar.module.css";

const Avatar = ({ userImage, message, indicator }) => {
  return (
    <div
      className={[message ? styles.messages : styles.connections]}
      style={{ backgroundImage: `url(${userImage})` }}
    >
      <span className={indicator ? styles.indicator : null}></span>
    </div>
  );
};

export default Avatar;
