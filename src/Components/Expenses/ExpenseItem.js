import React, {useState} from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'


const ExpenseItem = (props) => {
   
    return (

        <div className="expense-item">
            
            {/* <ExpenseDate date={props.month} /> */}
            <div> <h1> {props.date} </h1></div>
            <div className="expense-item__descripation">
               <h2>{props.title}</h2>
               <div className="expense-item__price"> $ {props.amount}</div>
            </div>
           
        </div>
    )
}

export default ExpenseItem;
