import React from 'react'
import TitlePanel from "../utils/SalesandPurchase/TitlePanel";
import HeaderPanel from '../utils/HeaderCheckPanel/HeaderPanel';
import CardPanelGeneral from '../utils/CardPanelGeneral/CardPanelGeneral';
import "./GeneralPanel.css";

function GeneralPanel() {
  //Aca validamos si es admin o customer y el resultado lo enviamos como props
  return (
    <div className="sales-container">
        <TitlePanel title="Ventas" />
        <HeaderPanel />
        <CardPanelGeneral />
      </div>
  )
}

export default GeneralPanel