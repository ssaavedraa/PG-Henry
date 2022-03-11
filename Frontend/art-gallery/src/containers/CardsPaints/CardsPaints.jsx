import React from "react";
import CardPaint from "../../components/CardPaint/CardPaint";

import "./CardsPaints.css";

//IsAdmin es una prop pasada para validar si es admin o usuario o guest
function CardsPaints({ paintings, isAdmin }) {

  //Booleano para evaluar si es admin
  //let isAdmin = true;

  return (
    <div className="containerCards">
      {paintings.length ? (
        paintings.map((paint) => (
                <CardPaint
                  key={paint.id}
                  id={paint.id}
                  image={paint.image}
                  title={paint.title}
                  artist={paint.artist}
                  height={paint.height}
                  width={paint.width}
                  techniques={paint.techniques}
                  price={paint.price}
                  isAdmin={isAdmin}
                />
        ))
      ) : (
        <h1 className="errorCardPaint">Not Results!</h1>
      )}
    </div>
  );
}
export default CardsPaints;
