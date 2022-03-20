import React, { useState } from "react";
import HeaderCheckPanel from "../utils/HeaderCheckPanel/HeaderPanel";
import SubtitlePanel from "../utils/SubtitlePanel/SubtitlePanel";
import CardPanelSalesAndPurchase from "../utils/CardPanelGeneral/CardPanelSalesAndPurchase";
import useAuth from "../../customHooks/useAuth";
import "./GeneralPanel.css";
function GeneralPanel() {
  const [state, setState] = useState({state: ""});


  const { user } = useAuth();
  const isAdmin = user.role === "admin" ? true : false;
  const title = user.role === "admin" ? "Sales" : "Purchase";

  return (
    <div className="sales-container">
      <HeaderCheckPanel title={title} setState={setState} />
      <SubtitlePanel isAdmin={isAdmin} />
      <CardPanelSalesAndPurchase isAdmin={isAdmin} filter={state}/>
    </div>
  );
}

export default GeneralPanel;
