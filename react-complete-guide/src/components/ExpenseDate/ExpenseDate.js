import "./ExpenseDate.css";

function ExpenseDate(props) {
  const dateMonth = props.date.toLocaleString("en-US", { month: "long" });
  const dateYear = props.date.getFullYear();
  const dateDay = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{dateMonth}</div>
      <div className="expense-date__year">{dateYear}</div>
      <div className="expense-date__day">{dateDay}</div>
    </div>
  );
}

export default ExpenseDate;
