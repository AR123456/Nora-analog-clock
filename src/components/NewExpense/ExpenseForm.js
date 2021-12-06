import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // anohter way to do this is one state insead of 3 by passing in an object which is a group of the three states, managed as one thing
  // this is less common "in the wild"
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  //when doing it this way updates to state are done to all 3 vs one independently of the others
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    // when passing in a state object if only updating one piece of state still need to pass in the other things in state so that they are not lost.  Do this using the spread operator
    // setEnteredTitle(event.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };
  const amountChangeHandler = (event) => {
    // when passing in a state object if only updating one piece of state still need to pass in the other things in state so that they are not lost.  Do this using the spread operator
    // setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };
  const dateChangeHandler = (event) => {
    // when passing in a state object if only updating one piece of state still need to pass in the other things in state so that they are not lost.  Do this using the spread operator
    // setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} name="" id="" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
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
