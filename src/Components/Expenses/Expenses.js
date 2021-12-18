import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expense(props) {
  return (
    <div className="expenses">
      {
        props.item.map(
          expense => (
            <ExpenseItem
            date="12 March 2021"
            title={expense.title}
            amount={expense.amount} />
          )
        )
      }


{/*       
      <ExpenseItem
        date="12 March 2021"
        title={props.item[0].title}
        amount={props.item[0].amount} />



      <ExpenseItem
        date="12 March 2021"
        title={props.item[1].title}
        amount={props.item[1].amount} />


      <ExpenseItem
        date="12 March 2021"
        title={props.item[2].title}
        amount={props.item[2].amount} />


      <ExpenseItem
        date="12 March 2021"
        title={props.item[3].title}
        amount={props.item[3].amount} >
      </ExpenseItem> */}
    
    </div>
  );

}

export default Expense;