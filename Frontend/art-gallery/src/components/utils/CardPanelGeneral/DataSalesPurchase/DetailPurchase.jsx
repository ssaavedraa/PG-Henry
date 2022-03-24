import React from "react";
import DatesPurchase from "./SectionSupSeal/DatesPurchase";
import ContactInfoPurchase from "./SectionSupSeal/ContactInfoPurchase";
import DivPurchaseData from "../../DivPurchaseData/DivPurchaseData";

function DetailPurchase({
  purchase,
  fullName,
  detailData,
  onChangeState,
  updateState,
  state,
  isAdmin,
  isComplete
}) {
  return (
    <section className="sectionSupSeal">
      <DatesPurchase purchase={purchase} isAdmin={isAdmin} isComplete={isComplete}/>
      <ContactInfoPurchase
        fullName={fullName}
        detailData={detailData}
        isAdmin={isAdmin}
      />
      
      <div className="status-detail-data">
        {isAdmin === true ? (
          <DivPurchaseData title="Price" value={purchase.totalPrice}/>
        ) : (
          <DivPurchaseData title="Street" value={detailData.street}/>
        )}
        {isAdmin === false && (
          <DivPurchaseData title="Street Number" value={detailData.streetNumber}/>
        )}
        {isAdmin === false && (
          <DivPurchaseData title="Floor" value={detailData.floor}/>
        )}

        {isAdmin === true && (
          <OptionsSelect state={purchase.state} onChangeState={onChangeState} />
        )}
        {state !== purchase.state && isAdmin === true && (
          <button className="btnReviewPurchase" onClick={updateState}>
            Update State
          </button>
        )}
      </div>
    </section>
  );
}

export default DetailPurchase;

/* "processing" | "pending" | "canceled" | "dispatched" | "completed" */
function OptionsSelect({ state, onChangeState }) {
  switch (state) {
    case "processing":
      return (
        <select name="state" onChange={onChangeState}>
          <option value="pending">Pending</option>;
        </select>
      );
    case "pending":
      return (
        <select name="state" onChange={onChangeState}>
          <option value="pending">Pending</option>;
          <option value="dispatched">Dispatched</option>;
          <option value="canceled">Canceled</option>;
        </select>
      );
    case "dispatched":
      return (
        <select name="state" onChange={onChangeState}>
          <option value="dispatched">Dispatched</option>;
          <option value="completed">Completed</option>;
          <option value="canceled">Canceled</option>;
        </select>
      );
    case "canceled":
      return (
        <div className="customer-purchase-data">
          <label>State:&nbsp;&nbsp;</label>
          <h5 className="canceled">Canceled</h5>
        </div>
      );
    default:
    case "completed":
      return (
        <div className="customer-purchase-data">
          <label>State:&nbsp;&nbsp;</label>
          <h5 className="completed">Completed</h5>
        </div>
      );
  }
}
