import React from "react";

function DivPurchaseData({ title, value, isComplete }) {
  return (
    <div className="customer-purchase-data">
      <label>{title}:&nbsp;&nbsp;</label>
      <h5 className={isComplete && `${isComplete}`}>{value}</h5>
    </div>
  );
}

export default DivPurchaseData;
