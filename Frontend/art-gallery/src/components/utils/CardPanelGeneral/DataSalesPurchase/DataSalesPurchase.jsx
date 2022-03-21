import React, { useState } from "react";
import classnames from "classnames";
import { getAllPurchase } from "../../../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import CardArticlesPurchase from "../CardArticlesPurchase/CardArticlesPurchase";
import ContactInfoPurchase from "../SectionSupSeal/ContactInfoPurchase";
import DatesPurchase from "../SectionSupSeal/DatesPurchase";

function DataSalesPurchase({ index, purchase, isAdmin, setUpdateStatus }) {
  const [state, setState] = useState(purchase.state);
  const dispatch = useDispatch();
  const size =
    purchase.paintings.length < 3
      ? "resizeSubcontainer"
      : "resizeLengthSubcontainer";

  function detailedInformation(index) {
    const containerData = document.getElementsByClassName(
      "sales-data-subcontainer"
    );
    const btnArrow = document.getElementsByClassName("btnArrowSale");
    containerData[index].classList.toggle(`${size}`);
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
    toast.success(`Status has been updated to ${state}!`);
  }

  const isComplete =
    purchase.state === "completed"
      ? "completed"
      : purchase.state === "canceled"
      ? "canceled"
      : "status-sales";

  return (
    <div className="sales-data-subcontainer">
      <ToastContainer
        position="bottom-center"
        theme="dark"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="sales-main-data">
        <h5 className="id-sales">{purchase.id}</h5>
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
        <section className="sectionSupSeal">
          <DatesPurchase purchase={purchase}/>
          <ContactInfoPurchase fullName={fullName} detailData={detailData}/>
          <div className="status-detail-data">
            <div className="customer-purchase-data">
              <label>Price:&nbsp;&nbsp;</label>
              <h5>{purchase.totalPrice}</h5>
            </div>
            <OptionsSelect
              state={purchase.state}
              onChangeState={onChangeState}
            />
            {state !== purchase.state && (
              <button className="btnReviewPurchase" onClick={updateState}>
                Update State
              </button>
            )}
          </div>
        </section>

        <section className="sectionDownSeal">
          <h5>Articles</h5>
          <div className="cardsArticlePurchase">
            {purchase.paintings.length > 0
              ? purchase.paintings.map((purch) => (
                  <CardArticlesPurchase
                    key={purch.id}
                    id={purch.id}
                    price={purch.price}
                    title={purch.title}
                    img={purch.photos}
                  />
                ))
              : null}
          </div>
        </section>
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
