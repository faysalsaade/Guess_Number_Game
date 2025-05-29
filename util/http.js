import axios from "axios";
export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-course-1007c-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
