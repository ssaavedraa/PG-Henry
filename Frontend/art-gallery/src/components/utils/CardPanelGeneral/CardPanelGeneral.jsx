import React from "react";
import "./CardPanelGeneral.css";

function CardPanelGeneral({ data, isAdmin }) {
  //Aca hacemos el mapeo de la data
  return (
    <div className="sales-data-container">
      <DataSales index="0" isAdmin={isAdmin}/>
      <DataSales index="1" isAdmin={isAdmin}/>
      <DataSales index="2" isAdmin={isAdmin}/>
    </div>
  );
}

export default CardPanelGeneral;

function DataSales({ index, isAdmin }) {
  return (
    <div className="sales-data-subcontainer">
      <div className="sales-main-data">
        <img src="" alt="image-sale" className="product-sales" />
        <h5 className="purchase-sales">Date of Purchase</h5>
        <h5 className="shipment-sales">Shipment date</h5>
        {isAdmin === true ? <h5 className="customer-sales">Customer</h5> : null}
        <h5 className="status-sales">Status</h5>
        {isAdmin === false ? (
          <button className="btnReviewPurchase">Add Review</button>
        ) : null}
      </div>
      {isAdmin === true ? (
      <div className="arrow-sales" onClick={() => detailedInformation(index)}>
        <button className="btnArrowSale">▼</button>
      </div>
      ) : null}
        <div className="detail-seal-data">
          <img src="" alt="img-sale" className="img-sale-detail" />
          <div className="specific-seal-data">
            <h5>Fecha Compra: </h5>
            <h5>Comprador: *********</h5>
            <h5>Direccion: *********</h5>
            <h5>Telefono: *********</h5>
          </div>
          <div className="status-detail-data">
            <h5>Fecha Envio DD/MM/AAAA: </h5>
            <select name="" id="">
              <option value="">status</option>
              <option value="">Pendiente</option>
              <option value="">Enviado</option>
              <option value="">Finalizado</option>
              <option value="">Cancelado</option>
            </select>
          </div>
        </div>
    </div>
  );
}

function detailedInformation(index) {
  const containerData = document.getElementsByClassName(
    "sales-data-subcontainer"
  );
  const btnArrow = document.getElementsByClassName("btnArrowSale");
  containerData[index].classList.toggle("resizeSubcontainer");
  btnArrow[index].innerHTML = btnArrow[index].innerHTML === "▲" ? "▼" : "▲";
}
