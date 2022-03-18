import React from "react";
import "./HeaderPanel.css";

function HeaderCheckPanel({title}) {
  return (
    <div className="admin-sales-header">
      <h3 className="admin-profile-titles">{title}</h3>
      <ul className="filter-admin-seals">
        <li className="subtitle-filters">
          <h5 className="name-filter">Pending </h5>
          <input type="checkbox" name="pending" />
        </li>
        <li className="subtitle-filters">
          <h5 className="name-filter">Sent</h5>
          <input type="checkbox" name="sent" />
        </li>
        <li className="subtitle-filters">
          <h5 className="name-filter">Completed</h5>
          <input type="checkbox" name="completed" />
        </li>
        <li className="subtitle-filters">
          <h5 className="name-filter">Cancelled</h5>
          <input type="checkbox" name="cancelled" />
        </li>
      </ul>
    </div>
  );
}

export default HeaderCheckPanel;