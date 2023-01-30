import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../Utils/Card";
import "./ExpensesList.css";
import Filter from "../../Input/Filter/Filter";
import { useState } from "react";

function ExpensesList(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <Filter
          onFilterChange={filterChangeHandler}
          selectedYear={filteredYear}
        />
        {props.items.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              description={expense.description}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default ExpensesList;
