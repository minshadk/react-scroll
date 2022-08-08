import Avatar from "../Avatar/Avatar";

import styles from "./Connections.module.css";

const Connections = ({ userName, userImage, indicator }) => {
  return (
    <div className={styles.connections}>
      <Avatar userImage={userImage} indicator={indicator} />
      <h6 className={styles.username}>{userName}</h6>
    </div>
  );
};

export default Connections;
