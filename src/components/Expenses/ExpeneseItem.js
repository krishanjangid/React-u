import React, {useState} from 'react';
import ExpeneseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const [title,setTitle] = useState(props.title);
    function eventListener(){
        console.log(props.title);
        setTitle('updated');
    }
    return (<Card className="expense-item">
        <ExpeneseDate
        date ={props.date} />
        <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={eventListener}>Change Title</button>
    </Card>
    );
}
export default ExpenseItem;