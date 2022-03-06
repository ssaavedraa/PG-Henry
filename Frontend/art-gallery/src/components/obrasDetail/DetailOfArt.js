import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getObraDetail, getObrasRandon } from "../../redux/actions/actions";
import styles from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";

export const DetailOfArt = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getObraDetail(id));
    dispatch(getObrasRandon(id));
  }, []);

  const { detailObra, obraRandon } = useSelector((state) => state);
  /////////////////////////////////
  const [page, setPage] = useState(1);
  const maximo = 4;

  const handleIncrement = () => {
    setPage((prev) => Math.min(prev + 1, 3));
  };
  const handleDecrement = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };
  ////////////////////////////////
  const handleReturn = () => {
    navigate(-1);
  };
  const handleDetail = (id) => {
    dispatch(getObraDetail(id));
  };

  if (!detailObra || !obraRandon) {
    return <h1>Loading</h1>;
  }
  return (
    <div className={styles.containerDetail}>
      <section className={styles.principalSection}>
        <header className={styles.principalSectionTitle}>
          <h1>{detailObra.artist.name}</h1>
        </header>
        <div className={styles.principalSectionInterno}>
          <div className={styles.internoimg}>
            <img src={detailObra.photos[0].url} alt="img" />
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
            <button className={styles.btnCard}>
              <div className={styles.cardImage}>+</div>

              <div className={styles.cardText}>ADD TO CART</div>
            </button>

            <div className={styles.btnReturn}>
              <div className={styles.cardImageReturn}>
                <div></div>
              </div>
              <div onClick={handleReturn} className={styles.cardImageReturn}>
                RETURN TO SEARCH
              </div>
            </div>
          </div>
          <div className={styles.btnCars}></div>
        </div>

        <div className={styles.principalSectionObras}>
          <div
            onClick={handleDecrement}
            className={styles.obrasDetailDecrement}
          ></div>
          <div className={styles.obrasDetail}>
            {obraRandon
              ? obraRandon
                  .slice((page - 1) * maximo, (page - 1) * maximo + maximo)
                  .map((obra) => (
                    <div
                      onClick={() => handleDetail(obra.id)}
                      key={obra.id}
                      className={styles.obrasSimilares}
                    >
                      <img src={obra.image} alt="cards" />
                    </div>
                  ))
              : ""}
          </div>
          <div
            onClick={handleIncrement}
            className={styles.obrasDetailIncrement}
          ></div>
        </div>
      </section>
    </div>
  );
};
