import ExpensesOutPut from "../components/Expenses/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutPut
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallBackText="No registered expenses found"
    />
  );
}
export default AllExpenses;
