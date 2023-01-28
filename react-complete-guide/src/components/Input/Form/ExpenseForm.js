import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredDesc, setEnteredDesc] = useState(" ");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState(" ");

  const descChangeHandler = (event) => {
    setEnteredDesc(event.target.value);
  };

  const ammountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      desc: enteredDesc,
      ammount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpense(expenseData);
    setEnteredDate(" ");
    setEnteredAmount(0);
    setEnteredDesc(" ");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense description</label>
          <input type="text" value={enteredDesc} onChange={descChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Expense ammount</label>
          <input
            type="number"
            vaslue={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={ammountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense date</label>
          <input
            type="date"
            value={enteredDate}
            min="2010-01-01"
            max="2050-12-31"
            onChange={dateChangeHandler}
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
