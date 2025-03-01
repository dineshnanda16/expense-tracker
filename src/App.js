import React, { useState } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const fetchExpenses = () => {
    setRefresh(!refresh); // Toggle refresh to re-fetch expenses
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <AddExpense fetchExpenses={fetchExpenses} />
      <ExpenseList />
    </div>
  );
};

export default App;