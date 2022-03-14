import React from "react";
import NavPanel from "../NavPanel/NavPanel";
import "./Sales.css";

function Sales() {
  return (
    <div className="container-sales-admin">
      <NavPanel />
      <div className="sales-container">
        <div className="admin-sales-header">
          <h3 className="admin-profile-titles">Ventas</h3>
          <ul className="filter-admin-seals">
            <li className="subtitle-filters">
              <h5 className="name-filter">Pendiente</h5>
              <input type="checkbox" name="pendiente" />
            </li>
            <li className="subtitle-filters">
              <h5 className="name-filter">Enviado</h5>
              <input type="checkbox" name="enviado" />
            </li>
            <li className="subtitle-filters">
              <h5 className="name-filter">Finalizado</h5>
              <input type="checkbox" name="finalizado" />
            </li>
            <li className="subtitle-filters">
              <h5 className="name-filter">Cancelado</h5>
              <input type="checkbox" name="cancelado" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sales;
