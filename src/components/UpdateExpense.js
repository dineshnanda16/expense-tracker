import React, { useState } from "react";
import axios from "axios";
import "./UpdateExpense.css";

const UpdateExpense = ({ expense, fetchExpenses, setEditExpense }) => {
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/expenses/${expense._id}`, {
        title,
        amount,
        category,
      });
      alert("Expense updated successfully!");
      fetchExpenses(); // Refresh the list of expenses
      setEditExpense(null); // Close the edit form
    } catch (error) {
      console.log(error);
      alert("Error updating expense");
    }
  };

  return (
    <div className="update-expense">
      <h2>Edit Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <button type="submit">Update Expense</button>
        <button type="button" onClick={() => setEditExpense(null)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateExpense;