import React from "react";
import "./CartCards.css";
import { Link } from "react-router-dom";
import useCart from "../../../customHooks/useCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartCards = ({ cartPainting }) => {
  const { remove } = useCart();
  
  //sirve para el toastify
  const removeItemCart = () => {
    toast.success("Item removed from the cart!");
  }
  
  return (
    <div>
      <ToastContainer
        position="bottom-center"
        theme="dark"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {cartPainting && cartPainting.length > 0 ? (
        <div className="containerCardsCart">
          {cartPainting.map((painting) => (
            <div key={painting.id} className="cardsCart">
              <div className="divImgDetails">
                <img src={painting.photos[0].url} alt="No img" />
                <div className="containerDetails">
                  <h5><Link to={`/detailpainting/${painting.id}`}>{painting.title}</Link></h5>
                  <p>{painting.artist.name}</p>
                  <p>
                    Size: {painting.height} x {painting.width}
                  </p>
                  <button onClick={() => {remove(painting.id)}}>
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
