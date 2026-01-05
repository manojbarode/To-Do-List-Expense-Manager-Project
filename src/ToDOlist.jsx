import React, { useEffect, useState } from "react";

const ToDOlist = () => {
  // ---------- States ----------
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    type: "",
    name: "",
    friend: "",
    date: "",
    currency: "",
    amount: "",
  });

  // ---------- Save to LocalStorage ----------
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // ---------- Handlers ----------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addExpense = () => {
    if (!form.type || !form.name || !form.amount) return;
    setExpenses([...expenses, form]);
    setForm({ type: "", name: "", friend: "", date: "", currency: "", amount: "" });
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const editExpense = (index) => {
    setForm(expenses[index]);
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  // ---------- UI ----------
  return (
    <div style={styles.container}>
      {/* ---------- Title ---------- */}
      <h2 style={styles.title}>Simple Expense Manager Project</h2>

      {/* ---------- Form Section ---------- */}
      <div style={styles.form}>
        {/* Type */}
        <label>
          Type
          <select name="type" value={form.type} onChange={handleChange} style={styles.input}>
            <option>--choose one--</option>
            <option>Cash</option>
            <option>Card</option>
            <option>UPI</option>
          </select>
        </label>

        {/* Name */}
        <label>
          Name
          <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange}style={styles.input}
          />
        </label>

        {/* Friend */}
        <label>
          Add Friend
          <select name="friend" value={form.friend} onChange={handleChange} style={styles.input}>
            <option>--choose one--</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </label>

        {/* Date */}
        <label>
          Date
          <input type="date" name="date" value={form.date} onChange={handleChange} style={styles.input}/>
        </label>

        {/* Currency */}
        <label>
          Currency
          <select name="currency" value={form.currency} onChange={handleChange} style={styles.input}>
            <option>--choose one--</option>
            <option>INR</option>
            <option>USD</option>
          </select>
        </label>

        {/* Amount */}
        <label>
          Amount
          <input type="number" name="amount" placeholder="Amount" value={form.amount} onChange={handleChange}
            style={styles.input}/>
        </label>
      </div>

      {/* ---------- Button ---------- */}
      <div style={styles.addbtn}>
        <button style={styles.add} onClick={addExpense}>
          Add New Expense
        </button>
      </div>

      {/* ---------- Table Section ---------- */}
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Type</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Friend</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Currency</th>
              <th style={styles.th}>Amount</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp, i) => (
              <tr key={i}>
                <td style={styles.td}>{exp.type}</td>
                <td style={styles.td}>{exp.name}</td>
                <td style={styles.td}>{exp.friend}</td>
                <td style={styles.td}>{exp.date}</td>
                <td style={styles.td}>{exp.currency}</td>
                <td style={styles.td}>{exp.amount}</td>
                <td style={styles.td}>
                  <button style={styles.editBtn} onClick={() => editExpense(i)}>
                    ✏️
                  </button>
                  <button style={styles.deleteBtn} onClick={() => deleteExpense(i)}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ---------- Styles ---------- */
const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "15px",
    marginBottom: "20px",
    color: "white",
    background: "#444",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(33, 30, 50, 0.95)",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "6px",
    fontSize: "15px",
    marginTop: "4px",
  },
  addbtn: {
    textAlign: "center",
    marginBottom: "20px",
  },
  add: {
    width: "20%",
    padding: "10px",
    background: "#444",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(33, 30, 50, 0.95)",
  },
  tableWrapper: {
    overflowX: "auto",
    boxShadow: "0 4px 8px rgba(50, 50, 50, 0.95)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "500px",
  },
  th: {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "center",
    background: "#f5f5f5",
  },
  td: {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "center",
  },
  editBtn: {
    background: "#ffc107",
    border: "none",
    padding: "6px 10px",
    cursor: "pointer",
    marginRight: "5px",
    borderRadius: "4px",
  },
  deleteBtn: {
    background: "#dc3545",
    border: "none",
    padding: "6px 10px",
    cursor: "pointer",
    color: "white",
    borderRadius: "4px",
  },
};

export default ToDOlist;
