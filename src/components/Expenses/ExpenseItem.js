// inject the css expenseitem css
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("Clicked ");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button
        // can be in line function like this or a function we have defined elseware
        // onClick={() => {
        //   console.log("clicked");
        // }}
        // not executing here clickHandler()  just pointing to it, no parens.
        onClick={clickHandler}
      >
        Change title
      </button>
    </Card>
  );
};

export default ExpenseItem;
