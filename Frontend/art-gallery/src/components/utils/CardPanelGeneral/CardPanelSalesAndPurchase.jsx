import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPurchase } from "../../../redux/actions/actions";
import DataSalesPurchase from "./DataSalesPurchase/DataSalesPurchase";
import "./CardPanelGeneral.css";

function CardPanelSalesAndPurchase({ isAdmin, filter }) {
  //Aca hacemos el mapeo de la data
  const purchase = useSelector((state) => state.purchase);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPurchase());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllPurchase(filter));
  }, [dispatch, filter]);

  return (
    <div className="sales-data-container">
      {purchase.length
        ? purchase.map((item, index) => (
            <DataSalesPurchase
              index={index}
              purchase={item}
              isAdmin={isAdmin}
            />
          ))
        : null}
    </div>
  );
}

export default CardPanelSalesAndPurchase;
