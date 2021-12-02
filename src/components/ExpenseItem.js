// inject the css expenseitem css
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Expenses from "./Expenses";
import "./Expenses.css";

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
        <Expenses title={props.title}></Expenses>
        <Expenses amount={props.amount} />
      </div>
    </div>
  );
}

export default ExpenseItem;
