// inject the css expenseitem css
import "./ExpenseItem.css";
// a component is just a JS function !!
function ExpenseItem() {
  //  the JS goes here !
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Some Insurance";
  const expenseAmount = 700.0;
  // console.log(expenseDate);
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
