import ExpeneseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    
    return (<Card className="expense-item">
        <ExpeneseDate
        date ={props.date} />
        <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={() => {console.log('Clickd!!!')}}>Change Title</button>
    </Card>
    );
}
export default ExpenseItem;