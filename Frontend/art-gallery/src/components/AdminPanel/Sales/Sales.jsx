import React from "react";
import NavPanel from "../NavPanel/NavPanel";
import GeneralPanel from "../../GeneralPanel/GeneralPanel";

import "./Sales.css";

function Sales() {
  return (
    <div className="container-sales-admin">
      <NavPanel />
      <GeneralPanel />
    </div>
  );
}

export default Sales;


