import React, { useState, useEffect } from "react";
import classnames from "classnames";
import {
  updateStatus,
  getAllPurchase,
} from "../../../../redux/actions/actions";
import { useDispatch } from "react-redux";

function DataSalesPurchase({ index, purchase, isAdmin, setUpdateStatus }) {
  const [state, setState] = useState(purchase.state);
  const dispatch = useDispatch();

  function detailedInformation(index) {
    const containerData = document.getElementsByClassName(
      "sales-data-subcontainer"
    );
    const btnArrow = document.getElementsByClassName("btnArrowSale");
    containerData[index].classList.toggle("resizeSubcontainer");
    btnArrow[index].innerHTML = btnArrow[index].innerHTML === "▲" ? "▼" : "▲";
  }

  const fullName = `${purchase.contactInfo.firstName} ${purchase.contactInfo.lastName}`;
  const detailData = purchase.contactInfo;

  function onChangeState(e) {
    setState(e.target.value);
  }

  function updateState() {
    setUpdateStatus(purchase.id, state)
      .then((succe) => dispatch(getAllPurchase()))
      .catch((err) => console.log(err));
    detailedInformation(index);
  }

  const isComplete =
    purchase.state === "completed"
      ? "completed"
      : purchase.state === "canceled"
      ? "canceled"
      : "status-sales";

  return (
    <div className="sales-data-subcontainer">
      <div className="sales-main-data">
        <h5 className="id-sales">{purchase.id}</h5>
        <img src="" alt="img-sale-main" className="product-sales" />
        <h5 className="purchase-sales">{purchase.createdAt}</h5>
        <h5 className="price-sales">{purchase.totalPrice}</h5>
        {isAdmin === true ? (
          <h5 className="customer-sales">{fullName}</h5>
        ) : null}
        <h5 className={classnames(`status-sales ${isComplete}`)}>
          {purchase.state}
        </h5>
        {isAdmin === false && purchase.state === "completed" ? (
          <button className="btnReviewPurchase">Add Review</button>
        ) : null}
      </div>
      {isAdmin === true ? (
        <div className="arrow-sales" onClick={() => detailedInformation(index)}>
          <button className="btnArrowSale">▼</button>
        </div>
      ) : null}

      <div className="detail-seal-data">
        <div className="img-data-seal-id">
          <h5>Id:&nbsp;&nbsp;{purchase.id}</h5>
          <img src="" alt="img-sale" className="img-sale-detail" />
        </div>
        <div className="specific-seal-data">
          <div className="customer-purchase-data">
            <label>Date Purchase:&nbsp;&nbsp;</label>
            <h5>{purchase.createdAt}</h5>
          </div>
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
        <div className="status-detail-data">
          <OptionsSelect state={purchase.state} onChangeState={onChangeState} />
          {state !== purchase.state && (
            <button className="btnReviewPurchase" onClick={updateState}>
              Update State
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DataSalesPurchase;

/* "processing" | "pending" | "canceled" | "dispatched" | "completed" */
function OptionsSelect({ state, onChangeState }) {
  switch (state) {
    case "processing":
      return (
        <select name="state" onChange={onChangeState}>
          <option value="pending">Pending</option>;
        </select>
      );

      break;
    case "pending":
      return (
        <select name="state" onChange={onChangeState}>
          <option value="pending">Pending</option>;
          <option value="dispatched">Dispatched</option>;
          <option value="canceled">Canceled</option>;
        </select>
      );
      break;
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
