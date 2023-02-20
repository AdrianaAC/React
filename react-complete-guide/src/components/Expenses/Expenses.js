import Card from "../Utils/Card/Card";
import "./Expenses.css";
import Filter from "../Input/Filter/Filter";
import { useState } from "react";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("");

  let filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

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
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
