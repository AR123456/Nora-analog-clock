import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
// passing in props so we can get at the pointer function
const NewExpense = (props) => {
  // creating the pointer function that will be passed up the next component, on way to app.js
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // using ... to get copy of the new expense data
      ...enteredExpenseData,
      // add an id to it
      //just using to get semi unique id, IRL needs to be unique
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    // call the function passed in as props pass expenseData to it
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {/* onSaveExpenseData is a prop we created and can be named whatever, we are passing the onSave function(pointer) to it */}
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
      {/* now go to expense form and call the pointer function  */}
    </div>
  );
};

export default NewExpense;
