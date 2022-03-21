import React from 'react'

function OptionSelect({ state, onChangeState }) {
    switch (state) {
        case "processing":
          return (
            <select name="state" onChange={onChangeState}>
              <option value="pending">Pending</option>;
            </select>
          );
        case "pending":
          return (
            <select name="state" onChange={onChangeState}>
              <option value="pending">Pending</option>;
              <option value="dispatched">Dispatched</option>;
              <option value="canceled">Canceled</option>;
            </select>
          );
        case "dispatched":
          return (
            <select name="state" onChange={onChangeState}>
              <option value="dispatched">Dispatched</option>;
              <option value="completed">Completed</option>;
              <option value="canceled">Canceled</option>;
            </select>
          );
        case "canceled":
          return (
            <div className="customer-purchase-data">
              <label>State:&nbsp;&nbsp;</label>
              <h5 className="canceled">Canceled</h5>
            </div>
          );
        default:
        case "completed":
          return (
            <div className="customer-purchase-data">
              <label>State:&nbsp;&nbsp;</label>
              <h5 className="completed">Completed</h5>
            </div>
          );
      }
}

export default OptionSelect