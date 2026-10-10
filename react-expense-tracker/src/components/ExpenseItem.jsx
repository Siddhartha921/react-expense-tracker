function ExpenseItem({ expense, index, onDeleteExpense }) {
  return (
    <div className="expense-item">
      <h3>{expense.title}</h3>
      <p>₹{expense.amount}</p>
      <p>Category: {expense.category}</p>

      <button onClick={() => onDeleteExpense(index)}>
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem;