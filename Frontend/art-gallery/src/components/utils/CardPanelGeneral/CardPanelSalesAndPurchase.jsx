import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus, getAllPurchase } from "../../../redux/actions/actions";
import DataSalesPurchase from "./DataSalesPurchase/DataSalesPurchase";
import "./CardPanelGeneral.css";

function CardPanelSalesAndPurchase({ isAdmin, filter }) {
  //Aca hacemos el mapeo de la data
  const purchase = useSelector((state) => state.purchase);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPurchase(filter));
  }, [dispatch, filter]);

  async function setUpdateStatus(id, status) {
    try {
      return await axios.put(`/purchase/set/${status}/${id}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  return (
    <div className="sales-data-container">
      {purchase.length
        ? purchase.map((item, index) => (
            <DataSalesPurchase
              key={item.id}
              index={index}
              purchase={item}
              isAdmin={isAdmin}
              setUpdateStatus={setUpdateStatus}
            />
          ))
        : null}
    </div>
  );
}

export default CardPanelSalesAndPurchase;
