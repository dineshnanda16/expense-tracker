import React, { useState } from "react";
import axios from "axios";
import "./AddExpense.css";

const AddExpense = ({ fetchExpenses }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/expenses/add", {
        title,
        amount,
        category,
      });
      alert("Expense added successfully!");
      setTitle("");
      setAmount("");
      setCategory("");
      fetchExpenses(); // Refresh the list of expenses
    } catch (error) {
      console.log(error);
      alert("Error adding expense");
    }
  };

  return (
    <div className="add-expense">
      <h2>Add Expense</h2>
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
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;