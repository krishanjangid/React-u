import React,{useState} from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css'
import ExpenseList from "./ExpensesList";
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
    <li>
      <Card className="expenses">
        <ExpensesFilter 
          selected = {filteredYear} 
          onChangeFilter = {filterChangeHandler}
        />
        <ExpenseList items = {filteredExpense} />
      </Card>
    </li>
  );
  }

  export default Expenses;