import React from "react";
import "./CardPanelGeneral.css";

function CardPanelCustomer({ data }) {
  //Aca hacemos el mapeo de la data
  return (
    <div className="sales-data-container">
      <DataSalesCustomer />
      <DataSalesCustomer  />
      <DataSalesCustomer />
    </div>
  );
}

export default CardPanelCustomer;

function DataSalesCustomer() {
  return (
    <div className="sales-data-subcontainer">
      <div className="sales-main-data">
        <img src="" alt="img-sale" className="product-sales" />
        <h5 className="purchase-sales">Date of Purchase</h5>
        <h5 className="shipment-sales">Shipment date</h5>
        <h5 className="status-sales">Status</h5>
        <button className="btnReviewPurchase">Add Review</button>
      </div>
    </div>
  );
}
