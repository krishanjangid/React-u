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

    return(
    <div>
    <Card className="expenses">
    <ExpensesFilter 
      selected = {filteredYear} 
      onChangeFilter = {filterChangeHandler}
    />
    {props.items.map(expense => (
    <ExpenseItem 
      key = {expense.id}
      title = {expense.title}
      amount = {expense.amount}
      date = {expense.date}
    />))}
  </Card>
  </div>
  )
  }

  export default Expenses;