import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../Utils/Card";
import "./ExpensesList.css";

function ExpensesList(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        description={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        description={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        description={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        description={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default ExpensesList;
