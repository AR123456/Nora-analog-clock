import React, { useState } from "react";

// inject the css expenseitem css
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // useState needs a default action and updating funciton - this is an array
  // can use array destructuring for this
  const [title, setTitle] = useState(props.title);
  // State can be updated in many ways!
  //  Http requests that complete (where we then want to update the state based on the Http response we got back) but you could also be updating state because a timer (set with setTimeout()) expired for example.

  const clickHandler = () => {
    // call the state updating function
    setTitle("Updated");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
