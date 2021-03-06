import React, { useEffect } from "react";
import CardPaint from "../../components/CardPaint/CardPaint";
import { useSelector } from "react-redux";
import { getFavs } from "../../redux/actions/actions.js";
import { useDispatch } from "react-redux";
import "./CardsPaints.css";
import useAuth from "../../customHooks/useAuth";

//IsAdmin es una prop pasada para validar si es admin o usuario o guest
function CardsPaints({ paintings }) {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const favs = useSelector((state) => state.favs);

  useEffect(() => {
    if (user.role !== "guest") dispatch(getFavs());
  }, [dispatch, user.role]);

  return (
    <div className="containerCards">
      {paintings.length ? (
        paintings.map((paint) => (
          <CardPaint
            key={paint.id}
            id={paint.id}
            fav={favs.map(({ id }) => id).includes(paint.id)}
            image={paint.image}
            title={paint.title}
            artist={paint.artist}
            height={paint.height}
            width={paint.width}
            techniques={paint.techniques}
            price={paint.price}
          />
        ))
      ) : (
        <h1 className="errorCardPaint">Not Results!</h1>
      )}
    </div>
  );
}
export default CardsPaints;
