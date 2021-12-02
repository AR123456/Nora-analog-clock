import React from "react";

function Expenses(props) {
  const title = props.expenses.title;
  const amount = props.expenses.amount;
  const date = props.expenses.date;
  return (
    <div className="expenses">
      <div className="expense-title">{title}</div>
      <div className="expense-amount">{amount}</div>
      <div className="expnese-date">{date}</div>
    </div>
  );
}

export default Expenses;
