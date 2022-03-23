import React from "react";
import DivPurchaseData from "../../../DivPurchaseData/DivPurchaseData";

function DatesPurchase({ purchase, isAdmin, isComplete }) {
  const condicionalComplete = purchase.state === "completed";
  const conditionalDispatched = purchase.state === "dispatched";
  const conditionalCanceled = purchase.state === "canceled";
  const conditionalBoth = condicionalComplete || conditionalDispatched;

  return (
    <div className="img-data-seal-id">
      <DivPurchaseData title="Id" value={purchase.id} />
      <DivPurchaseData title="Date Purchase" value={purchase.createdAt} />

      {isAdmin === true ? (
        <DivPurchaseData title="Date Pending" value={purchase.pendingDate} />
      ) : (
        <DivPurchaseData title="Price" value={purchase.totalPrice} />
      )}

      <DivPurchaseData
        title="Status"
        value={purchase.state}
        isComplete={isComplete}
      />

      {conditionalBoth && isAdmin === true && (
        <DivPurchaseData
          title="Date Dispatched"
          value={purchase.dispatchedDate}
        />
      )}

      {condicionalComplete && isAdmin === true ? (
        <DivPurchaseData title="Date Complete" value={purchase.completedDate} />
      ) : (
        conditionalCanceled &&
        isAdmin === true && (
          <DivPurchaseData title="Date Cancel" value={purchase.canceledDate} />
        )
      )}
    </div>
  );
}

export default DatesPurchase;
