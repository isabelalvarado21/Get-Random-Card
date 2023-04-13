import { BiCoffeeTogo } from "react-icons/bi";
import styles from "./Card_cinco.module.css";
export const Card_cinco = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <h1 className={styles.card__title}>HI, I'M CARD 5!</h1>
        </div>
        <div className={styles.card__body}>
          <BiCoffeeTogo className={styles.card__icon} />
          <p className={styles.card__description}>It's coffee time!</p>
        </div>
      </div>
    </>
  );
};