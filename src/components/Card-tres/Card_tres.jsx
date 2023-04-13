import styles from "./Card_tres.module.css";

import { BsInstagram } from "react-icons/bs";
export const Card_tres = () => {
  return (
    <>
      <div className={styles.card}>
        <BsInstagram className={styles.card__icon} />
        <h1 className={styles.card__title}>Instagram</h1>
        <p className={styles.card__description}>
          @saschafitness
        </p>
        <button className={styles.card__button}>Follow</button>
      </div>
    </>
  );
};