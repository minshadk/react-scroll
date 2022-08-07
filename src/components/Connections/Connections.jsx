import Avatar from "../Avatar/Avatar";
// import styles from "./Avatar.module.css";

import styles from "./Connections.module.css"

const Connections = ({ userName, userImage }) => {
  return (
    <div className={styles.connections}>
      <Avatar />
      <h6 className={styles.username}>{userName}</h6>
    </div>
  );
};

export default Connections;
