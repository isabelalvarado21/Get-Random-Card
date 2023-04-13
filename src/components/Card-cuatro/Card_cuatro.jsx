import { BsCheckCircle } from "react-icons/bs";
import styles from "./Card_cuatro.module.css";
export const Card_cuatro = () => {
  return (
    <>
      <div className={styles.card}>
        <BsCheckCircle className={styles.card__icon} />
        <h1 className={styles.card__title}>Se ha enviado correctamente!</h1>
        <p className={styles.card__description}>
          La informacion del formulario se ha enviado correctamente, en unos minutos revise la bandeja de entrada de su correo para verificar.
        </p>
        <button className={styles.card__button}>Volver atras</button>
      </div>
    </>
  );
};