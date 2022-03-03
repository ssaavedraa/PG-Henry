
import styles from '../../styles/Detail.module.css'
import { CarsDetailObra } from '../obrasDetail/CarsDetailObra'
import data from '../../dataJson/artists.json'
import paintings from '../../dataJson/paintings.json'
import { getDetailObra } from '../../selector/getDetailObra'



export const DetailOfArt = () => {

  // const { id } = useParams();
    
  const obra = getDetailObra('1111', paintings)
  console.log(data.artists)
  
    return (
        <div className={styles.containerDetail} >


            <header className={styles.principalHeader}>

            </header>

            <section className={styles.principalSection}>
                <div className={styles.principalSectionInterno}>
                <CarsDetailObra
                title={obra[0].title}
                img={obra[0].image}
                />
                <CarsDetailObra 
                description={obra}
                />
                 <div className={styles.btnCars}>
                <button className={styles.buttonsCars}>Agregar al carrito</button>
                <button className={styles.buttonsCars}>Return</button>
                </div>
               
                </div>

                <div className={styles.principalSectionObras}>
                    <div className={styles.obrasDetailDecrement}></div>
                    <div className={styles.obrasDetail}>

                        <div className={styles.obrasSimilares}></div>
                        <div className={styles.obrasSimilares}></div>
                        <div className={styles.obrasSimilares}></div>
                        <div className={styles.obrasSimilares}></div>
                    </div>
                    <div className={styles.obrasDetailIncrement}></div>
                </div>
            </section>

            <footer className={styles.principalFooter}>

            </footer>




        </div>
    )
}
