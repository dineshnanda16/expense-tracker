import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdateExpense from "./UpdateExpense";
import "./ExpenseList.css";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/expenses");
      setExpenses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${id}`);
      alert("Expense deleted successfully!");
      fetchExpenses(); // Refresh the list of expenses
    } catch (error) {
      console.log(error);
      alert("Error deleting expense");
    }
  };

  const handleEdit = (expense) => {
    setEditExpense(expense);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      {editExpense ? (
        <UpdateExpense expense={editExpense} fetchExpenses={fetchExpenses} setEditExpense={setEditExpense} />
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense._id}>
              <div>
                <strong>{expense.title}</strong> - ${expense.amount} ({expense.category})
              </div>
              <div>
                <button onClick={() => handleEdit(expense)}>Edit</button>
                <button onClick={() => deleteExpense(expense._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;