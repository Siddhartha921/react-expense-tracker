import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>

      <p>Total expenses: {expenses.length}</p>

      {expenses.length === 0 ? (
        <p className="empty-state">No expenses found.</p>
      ) : (
        expenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            expense={expense}
            index={index}
            onDeleteExpense={onDeleteExpense}
          />
        ))
      )}
    </div>
  );
}

export default ExpenseList;