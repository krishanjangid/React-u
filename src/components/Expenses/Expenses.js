import React,{useState} from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpeneseItem";
import './Expenses.css'
  function Expenses(props)
  {
    const [filteredYear,setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear =>{
      console.log('Expenses.js');
      setFilteredYear(selectedYear);

    }
    const filteredExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString()=== filteredYear;
      });
  

    return(
    <div>
    <Card className="expenses">
    <ExpensesFilter 
      selected = {filteredYear} 
      onChangeFilter = {filterChangeHandler}
    />
{filteredExpense.map(expense => (
         <ExpenseItem 
         key = {expense.id}
         title = {expense.title}
         amount = {expense.amount}
         date = {expense.date}
       />
      ))}

    {/* {props.items.map(expense => (
    <ExpenseItem 
      key = {expense.id}
      title = {expense.title}
      amount = {expense.amount}
      date = {expense.date}
    />))} */}
  </Card>
  </div>
  )
  }

  export default Expenses;