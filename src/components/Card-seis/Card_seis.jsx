import { AiOutlineStar } from "react-icons/ai";
import img from "../../assets/tequenios-img.jpg";
import styles from "./Card_seis.module.css";

export const Card_seis = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card 6" className={styles.card__img} />
        <h1 className={styles.card__title}>TEQUEÑERÍA TEKE FACTORY</h1>
        <div className={styles.card__item__container}>
          <div className={styles.card__item}>
            <p className={styles.card__item__text}>
              <AiOutlineStar /> 4.7
            </p>
          </div>
          <div className={styles.card__item}>
            <p className={styles.card__item__text}>Comida</p>
          </div>
        </div>
        <p className={styles.card__description}>
        Palitos de queso frito, empanadas y otros tentempiés en un restaurante informal con paredes de ladrillo visto.
        </p>
      </div>
    </>
  );
};