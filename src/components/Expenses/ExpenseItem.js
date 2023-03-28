import React , {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  //let title= props.title//not render the change
  const [title, setTitle]=  useState(props.title)
  const practice = ()=>{console.log("practice")
  setTitle("update")}
//title="new title"};
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={practice } > change title </button> 
    </Card>
  );
}

export default ExpenseItem;