import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterExpensesByYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeYear={filterExpensesByYear}
        />
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
}

export default Expenses;
