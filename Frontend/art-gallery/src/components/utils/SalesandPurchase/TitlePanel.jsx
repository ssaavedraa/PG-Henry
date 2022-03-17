import React from "react";
import "./TitlePanel.css";

function TitlePanel({title}) {
  return (
    <div className="admin-sales-header">
      <h3 className="admin-profile-titles">{title}</h3>
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
  );
}

export default TitlePanel;
