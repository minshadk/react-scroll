import Avatar from "../Avatar/Avatar";
import Badge from "../Badge/Badge";
import styles from "./Messages.module.css";

const Messages = ({ userName, message, time, userImage, notification }) => {
  return (
    <div className={styles.messageWrapper}>
      <Avatar userImage={userImage} message={true} />
      <div className={styles.col}>
        <div className={styles.row}>
          <h2>{userName}</h2>
          <h6>{time}</h6>
        </div>
        <div className={styles.row}>
          <p>let alsdlasd</p>
          {/* <h6>6</h6> */}
          {notification ? <Badge notification={notification} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Messages;
