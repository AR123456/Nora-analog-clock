// inject the css expenseitem css
import "./ExpenseItem.css";
// a component is just a JS function !!
function ExpenseItem(props) {
  //  the JS goes here !

  // the attributes/ props get passed in using props, dot
  // props have all the attributes and even though it is called props here it can be called anything we want
  // key value pairs
  /////
  // this is going into App JS so what it can be used as a prop to make the expense data dynamic
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Some Insurance";
  // const expenseAmount = 700.0;
  // console.log(expenseDate);
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
