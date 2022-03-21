import React from "react";

function SubtitlePanel({isAdmin}) {
  //Aca validamos si el usuario es admin o customer y dependiendo de eso
  //quitamos y mostramos lo que necesitamos
  return (
    <div className="sales-titles-header">
      <h5 className="id-sales">ID</h5>
      <h5 className="purchase-sales">Date of Purchase</h5>
      <h5 className="price-sales">Price</h5>
      {isAdmin === true ? <h5 className="customer-sales">Customer</h5> : null}
      <h5 className="status-sales">Status</h5>
    </div>
  );
}

export default SubtitlePanel;
