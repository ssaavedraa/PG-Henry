import React from "react";

function HeaderPanel() {
    //Aca validamos si el usuario es admin o customer y dependiendo de eso
    //quitamos y mostramos lo que necesitamos
  return (
    <div className="sales-titles-header">
      <h5 className="product-sales">Product</h5>
      <h5 className="purchase-sales">Date of Purchase</h5>
      <h5 className="shipment-sales">Shipment date</h5>
      <h5 className="customer-sales">Customer</h5>
      <h5 className="status-sales">Status</h5>
    </div>
  );
}

export default HeaderPanel;
