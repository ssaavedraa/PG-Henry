import { useNavigate } from "react-router-dom";
import styles from './Detail.module.css'


export const DetailOfArt = () => {

const navigate = useNavigate()

const handleReturn = () => {
 navigate(-1)
}
    return (
        <div className={styles.containerDetail} >




            <section className={styles.principalSection}>
                <header className={styles.principalSectionTitle}>Roy Lichtenstein</header>
                <div className={styles.principalSectionInterno}>
                    <div className={styles.internoimg}>
                        <img src='https://www.artic.edu/iiif/2/249173c2-0013-4624-211c-3e8fcf335048/full/843,/0/default.jpg' alt='img' />
                    </div>
                    <div className={styles.internodescription}>
                        <h3>Brushstroke with Spatter</h3>
                        <p>
                            <span>Height: 31.1</span>
                            <span>Width: 39.4</span>
                            <span>Technique: "Oleo"</span>

                            <span>orientation: "horizontal"</span>
                            <span>Price: 1800</span>
                        </p>
                        <div className={styles.btnCard}>
                            <div className={styles.cardImage}>+</div>
                            <div className={styles.cardText}>AGREGAR CARRITO</div>
                        </div>
                        <div className={styles.btnReturn}>
                            <div className={styles.cardImageReturn}><div></div></div>
                            <div onClick={handleReturn} className={styles.cardImageReturn}>VOLVER A LA BUSQUEDA</div>
                        </div>
                    </div>
                    <div className={styles.btnCars}>
                    </div>
                </div>

                <div className={styles.principalSectionObras}>
                    <div className={styles.obrasDetailDecrement}></div>
                    <div className={styles.obrasDetail}>

                        <div className={styles.obrasSimilares}>
                            <img src="https://www.artic.edu/iiif/2/93a86517-a89f-1b8a-c910-119e3417cc4e/full/843,/0/default.jpg" alt='cards' />
                        </div>
                        <div className={styles.obrasSimilares}>
                            <img src="https://www.artic.edu/iiif/2/0cb68b62-a531-9b60-4536-c5d35c6ab335/full/843,/0/default.jpg" alt='cards' />
                        </div>
                        <div className={styles.obrasSimilares}>
                            <img src="https://www.artic.edu/iiif/2/0cb68b62-a531-9b60-4536-c5d35c6ab335/full/843,/0/default.jpg" alt='cards' />
                        </div>
                        <div className={styles.obrasSimilares}>
                            <img src="https://www.artic.edu/iiif/2/a610c6c1-ed95-2a17-a697-8342c2a72b73/full/843,/0/default.jpg" alt='cards' />
                        </div>
                    </div>
                    <div className={styles.obrasDetailIncrement}></div>
                </div>
            </section>






        </div>
    )
}
