import React from "react";
import HeaderCheckPanel from "../utils/HeaderCheckPanel/HeaderPanel";
import SubtitlePanel from "../utils/SubtitlePanel/SubtitlePanel";
import CardPanelCustomer from "../utils/CardPanelGeneral/CardPanelCustomer";
import CardPanelAdmin from "../utils/CardPanelGeneral/CardPanelAdmin";
import useAuth from "../../customHooks/useAuth";
import "./GeneralPanel.css";
function GeneralPanel() {
  //Aca validamos si es admin o customer y el resultado lo enviamos como props
  const { user } = useAuth();
  const isAdmin = user.role === "admin" ? true : false;
  const title = user.role === "admin" ? "Sales" : "Purchase";
  return (
    <div className="sales-container">
      <HeaderCheckPanel title={title} />
      <SubtitlePanel isAdmin={isAdmin} />
      {isAdmin === true ? <CardPanelAdmin /> : <CardPanelCustomer />}
    </div>
  );
}

export default GeneralPanel;
