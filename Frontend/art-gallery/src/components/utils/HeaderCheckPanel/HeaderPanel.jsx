import React from "react";
import "./HeaderPanel.css";

function HeaderCheckPanel({ title, setState, state }) {
  function onChangeFilter(e) {
    const check1 = document.getElementsByName("pending");
    const check2 = document.getElementsByName("dispatched");
    const check3 = document.getElementsByName("completed");
    const check4 = document.getElementsByName("canceled");

    if(!check1[0].checked && !check2[0].checked && !check3[0].checked && !check4[0].checked){
      setState({ state: "" });
    }else{
      if(state.state.includes("pending") && e.target.name === "pending" ){
        setState({state: state.state.replace(`${e.target.name},`, "")});
      }
      else if(state.state.includes(e.target.name)){
        setState({state: state.state.replace(`,${e.target.name}`, "")});
      }
      else if(state.state !== ""){
        setState({ state: state.state.concat(`,${e.target.name}`) });
      }else{
        setState({ state: e.target.name });
      }
    }
    
  }

  return (
    <div className="admin-sales-header">
      <h3 className="admin-profile-titles">{title}</h3>
      <ul className="filter-admin-seals" onChange={onChangeFilter}>
        <li className="subtitle-filters">
          <h5 className="name-filter">Pending </h5>
          <input type="checkbox" name="pending" />
        </li>
        <li className="subtitle-filters">
          <h5 className="name-filter">Dispatched</h5>
          <input type="checkbox" name="dispatched" />
        </li>
        <li className="subtitle-filters">
          <h5 className="name-filter">Completed</h5>
          <input type="checkbox" name="completed" />
        </li>
        <li className="subtitle-filters">
          <h5 className="name-filter">Canceled</h5>
          <input type="checkbox" name="canceled" />
        </li>
      </ul>
    </div>
  );
}

export default HeaderCheckPanel;
