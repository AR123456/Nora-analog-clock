// inject the css expenseitem css
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Expenses from "./components/Expenses";

function ExpenseItem(props) {
  // can put some JS here - destructureing a bit to make the components more clear
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();
  console.log(props);
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <Expenses></Expenses>
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
