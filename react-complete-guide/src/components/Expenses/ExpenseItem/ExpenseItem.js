import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../Utils/Card";
import "./ExpenseItem.css";
import { useState } from "react";

function ExpenseItem(props) {
  const [date, setDate] = useState(props.date);
  const [desc, setDesc] = useState(props.description);
  const [amount, setAmount] = useState(props.amount);

  const handleClick = () => {
    setAmount(0);
    setDate(new Date(2000, 0, 1));
    setDesc("ups, something went wrong");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{desc}</h2>
        <div className="expense-item__price">{amount}€</div>
      </div>
      <button onClick={handleClick}>Edit</button>
    </Card>
  );
}

export default ExpenseItem;
