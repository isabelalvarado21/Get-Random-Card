import styles from "./Card_uno.module.css"
import img from "../../assets/airbnb-img.webp"

export const Card_uno = () => {
    return(
        <>
          <div className={styles.card}>
            <img src={img} alt="card_uno" className={styles.card__img} />
            <p className={styles.card__intro}>El Campello, España</p>
            <h1 className={styles.card__title}>158€ noche</h1>
              <p className={styles.card__description}>
              Apartamento nuevo, con magníficas vistas al mar, a la amplia playa de Muchavista y al pueblo de El Campello. Un aparcamiento cubierto están a su disposición si viaja en coche.
              </p>
            <div className={styles.card__footer}>
              <div className={styles.card__footer__item}>
                <h2 className={styles.item__title}>7m</h2>
                <p className={styles.item__subtitle}>READ</p>
              </div>
              <div className={styles.card__footer__item}>
                <h2 className={styles.item__title}>7152</h2>
                <p className={styles.item__subtitle}>VIEWS</p>
              </div>
              <div className={styles.card__footer__item}>
                <h2 className={styles.item__title}>21</h2>
                <p className={styles.item__subtitle}>COMMENTS</p>
              </div>
            </div>
          </div>
        </>
    )
}