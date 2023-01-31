import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../Utils/Card";
import "./ExpensesList.css";
import Filter from "../../Input/Filter/Filter";
import { useState } from "react";

function ExpensesList(props) {
  const [filteredYear, setFilteredYear] = useState("");

  let filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let noExpensesMessage = <p>No expenses</p>;

  return (
    <div>
      <Card className="expenses">
        <Filter
          onFilterChange={filterChangeHandler}
          selectedYear={filteredYear}
        />
        {filteredExpenses.length === 0 && noExpensesMessage}
        {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              description={expense.description}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
        {/* {!filteredYear &&
          props.items.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                description={expense.description}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })} */}
      </Card>
    </div>
  );
}

export default ExpensesList;
