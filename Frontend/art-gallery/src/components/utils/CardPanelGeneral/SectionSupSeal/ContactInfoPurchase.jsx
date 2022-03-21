import React from "react";

function ContactInfoPurchase({fullName, detailData}) {
  return (
    <div className="specific-seal-data">
      <div className="customer-purchase-data">
        <label>Customer:&nbsp;&nbsp;</label>
        <h5>{fullName}</h5>
      </div>
      <div className="customer-purchase-data">
        <label>Telephone:&nbsp;&nbsp;</label>
        <h5>{detailData.telephone}</h5>
      </div>
      <div className="customer-purchase-data">
        <label>Email:&nbsp;&nbsp;</label>
        <h5>{detailData.email}</h5>
      </div>
      <div className="customer-purchase-data">
        <label>City:&nbsp;&nbsp;</label>
        <h5>{detailData.city}</h5>
      </div>
      <div className="customer-purchase-data">
        <label>Street:&nbsp;&nbsp;</label>
        <h5>{detailData.street}</h5>
      </div>
      <div className="customer-purchase-data">
        <label>Street Number:&nbsp;&nbsp;</label>
        <h5>{detailData.streetNumber}</h5>
      </div>
      <div className="customer-purchase-data">
        <label>Floor:&nbsp;&nbsp;</label>
        <h5>{detailData.floor}</h5>
      </div>
    </div>
  );
}

export default ContactInfoPurchase;
