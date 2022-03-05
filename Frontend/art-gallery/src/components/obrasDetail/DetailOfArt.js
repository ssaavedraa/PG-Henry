import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getObraDetail } from "../../redux/actions/actions";
import styles from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";

export const DetailOfArt = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams()

  useEffect(() => {
    dispatch(getObraDetail(id))
  }, [])

  const {detailObra} = useSelector(state => state);

console.log(detailObra)


  const handleReturn = () => {
    navigate(-1);
  };

  if (!detailObra) {
    return <h1>Loading</h1>
  }
  return (
    <div className={styles.containerDetail}>
      <section className={styles.principalSection}>
        <header className={styles.principalSectionTitle}>
          <h1>{detailObra.artist.name}</h1>
        </header>
        <div className={styles.principalSectionInterno}>
          <div className={styles.internoimg}>
            <img
              src={detailObra.photos[0].url}
              alt="img"
            />
          </div>
          <div className={styles.internodescription}>
            <h3>{detailObra.title}</h3>
            <p>
              <span>Height: {detailObra.height}</span>
              <span>Width: {detailObra.width}</span>
              <span>Technique: {detailObra.techniques[0].name}</span>

              <span>orientation: {detailObra.orientation}</span>
              <span>Price: {detailObra.price}</span>
            </p>
            <div className={styles.btnCard}>
              <div className={styles.cardImage}>+</div>
              <div className={styles.cardText}>AGREGAR CARRITO</div>
            </div>
            <div className={styles.btnReturn}>
              <div className={styles.cardImageReturn}>
                <div></div>
              </div>
              <div onClick={handleReturn} className={styles.cardImageReturn}>
                VOLVER A LA BUSQUEDA
              </div>
            </div>
          </div>
          <div className={styles.btnCars}></div>
        </div>

        <div className={styles.principalSectionObras}>
          <div className={styles.obrasDetailDecrement}></div>
          <div className={styles.obrasDetail}>
            <div className={styles.obrasSimilares}>
              <img
                src="https://www.artic.edu/iiif/2/93a86517-a89f-1b8a-c910-119e3417cc4e/full/843,/0/default.jpg"
                alt="cards"
              />
            </div>
            <div className={styles.obrasSimilares}>
              <img
                src="https://www.artic.edu/iiif/2/0cb68b62-a531-9b60-4536-c5d35c6ab335/full/843,/0/default.jpg"
                alt="cards"
              />
            </div>
            <div className={styles.obrasSimilares}>
              <img
                src="https://www.artic.edu/iiif/2/0cb68b62-a531-9b60-4536-c5d35c6ab335/full/843,/0/default.jpg"
                alt="cards"
              />
            </div>
            <div className={styles.obrasSimilares}>
              <img
                src="https://www.artic.edu/iiif/2/a610c6c1-ed95-2a17-a697-8342c2a72b73/full/843,/0/default.jpg"
                alt="cards"
              />
            </div>
          </div>
          <div className={styles.obrasDetailIncrement}></div>
        </div>
      </section>
    </div>
  );
};
