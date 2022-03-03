import React from "react";
import styles from "./DetailArtist.module.css";

const artistas = require("../../assets/artistas.json");

//Componente que renderiza el detalle de un artista
const DetailArtist = () => {
  return (
    <div className={styles.divContainer}>
      <h1>Kate Louise Powell</h1>
      <div className={styles.divContainerimg}>
        <img
          src={require("./base.jpg")}
          alt="photo artist"
          className={styles.imgArtist}
        />
        <div className={styles.divBio}>
          <h3>Biography</h3>
          <p>
            Kate Louise Powell is an illustrator and animal rights activist from
            Halifax, West Yorkshire, currently based in Glasgow. After drawing
            recreationally all her life, Kate began to take her art career more
            seriously in 2012, producing a series of popular illustrations
            featuring the recurring motifs of flowers and butterflies. Since
            then he has experimented with photography, mixed media and painting,
            but continues to work primarily with colored pencil/pencil and black
            ink.
          </p>
        </div>
      </div>
      <div className={styles.divButton}>
        <button>Ver obras</button>
      </div>
      <div>
        <h3>Reviews artworks artist</h3>
        <div className={styles.divReviews}>
          <img src={require("./pauline-fin.jpeg")} alt="arteworks" className={styles.imgArtwork}/>
          <div>
            <h4>Andrea Mendoza</h4>
            <div className={styles.divText}>
              <p>Necesario en mi coleccion</p>
              <p>iconos estrellitas </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailArtist;

// {platforms.map( platform => {
//     return(
//         <option value={platform.name} key={platform.id}>{platform.name}</option>
//     );
// })};
