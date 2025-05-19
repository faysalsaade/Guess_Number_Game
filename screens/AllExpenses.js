import ExpensesOutPut from "../components/Expenses/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses() {
  useContext(ExpensesContext);
  return <ExpensesOutput expenses={expensesCtx} expensesPeriod="Total" />;
}
export default AllExpenses;
