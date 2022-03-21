import React from "react";

function DatesPurchase({ purchase }) {
  return (
    <div className="img-data-seal-id">
      <div className="customer-purchase-data">
        <label>Id:&nbsp;&nbsp;</label>
        <h5>{purchase.id}</h5>
      </div>
      <div className="customer-purchase-data">
        <label>Date Purchase:&nbsp;&nbsp;</label>
        <h5>{purchase.createdAt}</h5>
      </div>
      <div className="customer-purchase-data">
        <label>Date Pending:&nbsp;&nbsp;</label>
        <h5>{purchase.pendingDate}</h5>
      </div>
      {purchase.state === "completed" || purchase.state === "dispatched" ? (
        <div className="customer-purchase-data">
          <label>Date Dispatched:&nbsp;&nbsp;</label>
          <h5>{purchase.dispatchedDate}</h5>
        </div>
      ) : null}
      {purchase.state === "completed" ? (
        <div className="customer-purchase-data">
          <label>Date Complete:&nbsp;&nbsp;</label>
          <h5>{purchase.completedDate}</h5>
        </div>
      ) : purchase.state === "canceled" ? (
        <div className="customer-purchase-data">
          <label>Date Cancel:&nbsp;&nbsp;</label>
          <h5>{purchase.canceledDate}</h5>
        </div>
      ) : null}
    </div>
  );
}

export default DatesPurchase;
