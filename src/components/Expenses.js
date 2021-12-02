import React from "react";

function Expenses(props) {
  const title = props.title;
  const amount = props.amount;
  return (
    <div className="expenses">
      <div className="expenses-title">{title}</div>
      <div className="expense-amount">{amount}</div>
    </div>
  );
}

export default Expenses;
