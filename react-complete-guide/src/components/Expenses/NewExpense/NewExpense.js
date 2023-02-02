import ExpenseForm from "../../Input/Form/ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [isNewExpense, setIsNewExpense] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsNewExpense(false);
  };

  const handleAddExpense = () => {
    setIsNewExpense(true);
  };

  const handleCancel = () => {
    setIsNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!isNewExpense ? (
        <button onClick={handleAddExpense}>Add new expense</button>
      ) : (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default NewExpense;
