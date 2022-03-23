import React, { useState } from "react";
import classnames from "classnames";
import { getAllPurchase } from "../../../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import CardArticlesPurchase from "../CardArticlesPurchase/CardArticlesPurchase";
import DetailPurchase from "./DetailPurchase";

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

  const fullName = `${purchase.contactInfo.firstName} ${purchase.contactInfo.lastName}`;
  const detailData = purchase.contactInfo;

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
      </div>
      <div className="arrow-sales" onClick={() => detailedInformation(index)}>
        <button className="btnArrowSale">▼</button>
      </div>

      <div className="detail-seal-data">
        <DetailPurchase
          purchase={purchase}
          fullName={fullName}
          detailData={detailData}
          onChangeState={onChangeState}
          updateState={updateState}
          state={state}
          isAdmin={isAdmin}
          isComplete={isComplete}
        />
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
                    isAdmin={isAdmin}
                    state={purchase.state}
                    isReviewed={purch.isReviewed}
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
