import Avatar from "../Avatar/Avatar";
import styles from "./Messages.module.css";

const Messages = ({ userName, message, time,userImage }) => {
  return (
    <div className={styles.messageWrapper}>
      <Avatar userImage={userImage} />
      <div className={styles.col}>
        <div className={styles.row}>
          <h2>{userName}</h2>
          <h6>{time}3:32pm</h6>
        </div>
        <div className={styles.row}>
          <p>let alsdlasd fasd fladlsf af</p>
          <h6>6</h6>
        </div>
      </div>
    </div>
  );
};

export default Messages;
