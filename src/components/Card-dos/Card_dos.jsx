import styles from "./Card_dos.module.css";
import img from "../../assets/card-uno.avif";

export const Card_dos = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__top__container}>
          <div className={styles.card__img__container}>
            <img src={img} alt="card 2" className={styles.card__img} />
          </div>
        </div>
        <div className={styles.card__bottom__container}>
          <h2 className={styles.card__title}>Sillón 2 Cuerpos Chenille Antidesgarros</h2>
          <p className={styles.card__description}>
            Sillones eco 120 x 70 x 80 altura; chenille. Preguntar colores disponibles.
          </p>
          <button className={styles.card__button}>Ver detalle</button>
        </div>
      </div>
    </>
  );
};