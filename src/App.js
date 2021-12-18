import React, { useState } from "react";
import ExpenseItem from "./Components/Expenses/ExpenseItem"
import ExpenseDate from "./Components/Expenses/ExpenseDate";
import Expenses from "./Components/Expenses/Expenses";
import Newexpense from "./Components/Newexpense/Newexpense"
import About from './Components/About'



let DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'School fee',
    amount: 250,
    date: new Date
  },

  {
    id: 'e2',
    title: 'Books fee',
    amount: 500,
    date: new Date
  },

  {
    id: 'e3',
    title: 'House rent',
    amount: 200,
    date: new Date
  },

  {
    id: 'e4',
    title: 'Food',
    amount: 520,
    date: new Date
  }
]


const App = () => {

  const [expense, setexpense] = useState(DUMMY_EXPENSE);

  const saveExpenseDataHandle = (enteredExpenseData) => {
    const updatedExpense = [enteredExpenseData, ...expense]
    setexpense(updatedExpense)

  }

  return (

    <div>
      <About onSaveExpenseData={saveExpenseDataHandle} />
      {/* <Newexpense /> */}
      <Expenses item={expense} />

    </div>
  )
}
export default App;