import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // create a new const using the avalbible props with the filter method on it
  // filter takes a function and if true returns new array
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // moving this into expenseslist.js
  // // doing the check for content this way helps keep the code in the JSX return below more clean
  // let expensesContent = <p>No Expenses found.</p>;
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* using turnary expresion to check if no data and if so give a message  */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expense found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        {/* {expensesContent} */}
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
