import React, { useEffect, useState } from "react";
import "./ConfirmPurchase.css";
import axios from "axios";
import useCart from "../../../customHooks/useCart";
import { useSelector } from "react-redux";

const ConfirmPurchase = () => {
  //Me traje esto de payment
  const { cart, removeAll } = useCart();
  const contactInfo = useSelector((state) => state.contactInfo);
  const [paintings, setPaintings] = useState([]);

  const getPaintings = async () => {
    const paintings = [];
    for (let i = 0; i < cart.length; i++) {
      const dbPaiting = await axios.get(`/painting/get/${cart[i]}`);
      paintings.push(dbPaiting.data);
    }
    return paintings;
  };

  useEffect(() => {
    getPaintings()
      .then((res) => {
        setPaintings(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        removeAll();
      });
  }, []);

  useEffect(() => {
    const script = document.createElement("script");

    const attr_data_preference = document.createAttribute("data-preference-id");
    attr_data_preference.value = localStorage.getItem("preferenceId");

    script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.setAttributeNode(attr_data_preference);

    // Elemento en el que renderizo, div, boton
    document.getElementById("button1").appendChild(script);
    return () => {
      document.getElementById("button1").removeChild(script);
    };
  }, []);

  return (
    <div className="divContainerConfirmPurchase-1">
      <h1>Confirm purchase</h1>
      <div className="divContainerDetailsPurchase-1">
        <div className="divContainerInputsDetailPurchase-1">
          <h3>Billings details</h3>

          {contactInfo ? (
            <div className="divContainerInputsDetailPurchase-1-div">
              <div>Name:</div>
              <div>Email:</div>
              <div>Telephone:</div>
              <div>Post Code:</div>
              <div>City:</div>
              <div>Street:</div>
              <div>Number:</div>
              <div>Floor:</div>
              <div>Unit:</div>

              {/* ///////////////// */}
              <div className="divContainerInputsDetailPurchase-2-div">
                <div>{contactInfo.firstName + contactInfo.lastName}</div>
                <div>{contactInfo.email}</div>
                <div>{contactInfo.telephone}</div>
                <div>{contactInfo.postCode}</div>
                <div>{contactInfo.city}</div>
                <div>{contactInfo.street}</div>
                <div>{contactInfo.streetNumber}</div>
                <div>{contactInfo.floor}</div>
                <div>{contactInfo.unit}</div>
              </div>
            </div>
          ) : (
            <div>A</div>
          )}
        </div>
        <div className="divContainerItemsPurchase-1">
          <h3>Your order</h3>
          {paintings.length > 1
            ? paintings.map((painting, i) => (
                <div key={i} className="divContainerProductCart-100">
                  <img src={painting.photos[0].url} alt={painting.title} />
                  <div>
                    <p>{painting.title}</p>
                    <p>USD$ {painting.price}</p>
                  </div>
                </div>
              ))
            : paintings.map((painting, i) => (
                <div key={i} className="divContainerProductCart-1">
                  <p>{painting.title}</p>
                  <img
                    className="content-img"
                    src={painting.photos[0].url}
                    alt={painting.title}
                  />
                  <p>USD$ {painting.price}</p>
                </div>
              ))}
          {/* <div className="divContainerButtonMercadoPago"> */}
          <button id="button1"></button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ConfirmPurchase;
