import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus, getAllPurchase } from "../../../redux/actions/actions";
import DataSalesPurchase from "./DataSalesPurchase/DataSalesPurchase";
import useAuth from "../../../customHooks/useAuth";
import "./CardPanelGeneral.css";

function CardPanelSalesAndPurchase({filter }) {
  //Aca hacemos el mapeo de la data
  const purchase = useSelector((state) => state.purchase);
  const dispatch = useDispatch();

  const { user } = useAuth();
  const isAdmin = user.role === "admin" ? true : false;

  const purchaseArray = isAdmin === true ? purchase : purchase.filter(item => item.userId === user.id);

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
      {purchaseArray.length
        ? purchaseArray.map((item, index) => (
            <DataSalesPurchase
              key={item.id}
              index={index}
              purchase={item}
              isAdmin={isAdmin}
              setUpdateStatus={setUpdateStatus}
            />
          ))
        : <h1 className="noPurchases">No purchases are made!</h1>}
    </div>
  );
}

export default CardPanelSalesAndPurchase;
