import React from "react";
import DivPurchaseData from "../../../DivPurchaseData/DivPurchaseData";

function ContactInfoPurchase({ fullName, detailData, isAdmin }) {
  return (
    <div className="specific-seal-data">
      <DivPurchaseData title="Customer" value={fullName} />
      <DivPurchaseData title="Telephone" value={detailData.telephone} />
      <DivPurchaseData title="Email" value={detailData.email} />
      <DivPurchaseData title="City" value={detailData.city} />
      {isAdmin === true && (
        <DivPurchaseData title="Street" value={detailData.street} />
      )}
      {isAdmin === true && (
        <DivPurchaseData
          title="Street Number"
          value={detailData.streetNumber}
        />
      )}
      {isAdmin === true && (
        <DivPurchaseData title="Floor" value={detailData.floor} />
      )}
    </div>
  );
}

export default ContactInfoPurchase;
