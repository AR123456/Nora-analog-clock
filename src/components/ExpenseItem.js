// inject the css expenseitem css
import "./ExpenseItem.css";
// a component is just a JS function !!
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>October 12, 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
