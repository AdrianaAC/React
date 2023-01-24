import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense description</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Expense ammount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Expense date</label>
          <input type="date" min="2010-01-01" max="2050-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
