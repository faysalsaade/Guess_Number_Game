import ExpensesOutPut from "../components/Expenses/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
  });

  return <ExpensesOutPut expensesPeriod="Last 7 Days" />;
}
export default RecentExpenses;
