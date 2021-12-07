import React, { useState } from "react";
import "./ExpenseForm.css";
// pass in props so we can use the pointer function we created in NewExpesne.js
const ExpenseForm = (props) => {
  // state  allows for 2 way binding, listenting and can pass a new value back
  // use the value attribute on the form input div
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  // here in the submitHandler execute to pointer function we passed in as a prop from NewExpense.js
  const submitHandler = (event) => {
    // what should happen when the user clicks submt on the form
    // When submit is clicked the browser also reloads the page by default.  We want to do this ourselfs with JS. So first thing is to prevent the default form submision
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // executing the pointer function from Expenseform.js
    // the value we are getting from the onSaveExpeseData is this function
    // IE we are executing a function from a diffrent component inside this one
    // pass in expenseData
    props.onSaveExpenseData(expenseData);
    // console.log(expenseData);
    // clear out the form // put in the state we started with
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    // listening for on form submit to listen for submit button click. Pass function to be perfomed when button is clicked.
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            name=""
            id=""
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
            name=""
            id=""
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-21"
            name=""
            id=""
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
