import React from "react";
import "./CartCards.css";
import useCart from "../../../customHooks/useCart";

const CartCards = ({ cartPainting }) => {
  const { remove } = useCart();

  return (
    <div>
      {cartPainting && cartPainting.length > 0 ? (
        <div className="containerCardsCart">
          {cartPainting.map((painting) => (
            <div key={painting.id} className="cardsCart">
              <div className="divImgDetails">
                <img src={painting.photos[0].url} alt="No img" />
                <div className="containerDetails">
                  <h5>{painting.title}</h5>
                  <p>{painting.artist.name}</p>
                  <p>
                    Size: {painting.height} x {painting.width}
                  </p>
                  <button onClick={() => remove(painting.id)}>
                    Delete item
                  </button>
                </div>
              </div>
              <h4>USD$ {painting.price}</h4>
            </div>
          ))}
        </div>
      ) : (
        <div className="divNothing">There is nothing in cart!</div>
      )}
    </div>
  );
};

export default CartCards;
