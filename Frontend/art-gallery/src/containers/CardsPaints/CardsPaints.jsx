import React from "react";
import CardPaint from "../../components/CardPaint/CardPaint";
import {NavLink} from 'react-router-dom';
import "./CardsPaints.css";

function CardsPaints({ paintings }) {
  return (
    <div className="containerCards">
      {paintings &&
        paintings.map((paint) => (
          <NavLink to="/gallery" className="links">
            <CardPaint
              key={paint.id}
              image={paint}
              title={paint.title}
              artist={paint.artist}
              height={paint.height}
              width={paint.width}
              techniques={paint.techniques}
              price={paint.price}
            />
          </NavLink>
        ))}
    </div>
  );
}

export default CardsPaints;
