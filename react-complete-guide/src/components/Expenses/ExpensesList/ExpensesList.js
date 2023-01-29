import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../Utils/Card";
import "./ExpensesList.css";
import Filter from "../../Input/Filter/Filter";
import { useState } from "react";

function ExpensesList(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };
  console.log("after FN:", filteredYear);
  return (
    <div>
      <Card className="expenses">
        <Filter
          onFilterChange={filterChangeHandler}
          selectedYear={filteredYear}
        />
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
    </div>
  );
}

export default ExpensesList;
