import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../Utils/Card/Card";
import "./ExpenseItem.css";
import { useState } from "react";

function ExpenseItem(props) {
  const [date, setDate] = useState(props.date);
  const [desc, setDesc] = useState(props.description);
  const [amount, setAmount] = useState(props.amount);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.description}</h2>
          <div className="expense-item__price">{props.amount}€</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
