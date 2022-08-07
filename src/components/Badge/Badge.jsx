import styles from "./Badge.module.css";

const Badge = ({ notification, orange }) => {
  return (
    <span className={orange ? styles.orange : styles.message}>
      {notification}
    </span>
  );
};

export default Badge;
