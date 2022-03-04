import styles from "../../styles/CarsDetail.module.css";

export const CarsDetailObra = ({ title, img, description }) => {
  return (
    <div className={styles.containerCarsDetail}>
      <div className={styles.contain}>
        {!description ? (
          <div className={styles.containCenter}>
            <h2 className={styles.containTitle}>{title}</h2>

            <div className={styles.containImg}>
              <img src={img[0]} />
            </div>
          </div>
        ) : (
          <div className={styles.containCenter}>
            <h2 className={styles.containTitle}>{description[0].artist}</h2>
            <p className={styles.containDescription}>
              {description[0].description}
            </p>
            <div className={styles.descriptionDetail}>
              <h6>Height: {description[0].dimensions.height}</h6>
              <h6>Width: {description[0].dimensions.width}</h6>
              <h6>Technique: {description[0].technique}</h6>
              <h6>Price: {description[0].price}</h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
