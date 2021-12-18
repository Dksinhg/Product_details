import React, { useState } from 'react'
import './About.css'

const About = (props) => {

    const [entertitle, setEntertitle] = useState(" ");
    const [enteramount, setEnterAmount] = useState(" ");
    const [enterdate, setEnterDate] = useState(" ")


    const titleChangeHandler = (event) => {
        setEntertitle(event.target.value)
    };

    const changehandleamount = (event) => {
        setEnterAmount(event.target.value)
    };

    const changehandledate = (event) => {
        setEnterDate(event.target.value)
    };

 const submithandlerdata = (event) => {

        event.preventDefault( );


        const ExpenseData ={
            title: entertitle,
            amount: enteramount,
            date: enterdate
        }

        props.onSaveExpenseData(ExpenseData);

        console.log(ExpenseData);


        setEntertitle(' ');
        setEnterAmount(' ');
        setEnterDate(' ')
 }



    return (

        <from>
         <div className="new-expense">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Title </label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label> Amount </label>
                    <input type="number" min="0.01" step="0.01" onChange={changehandleamount} />
                </div>

                <div className="new-expense__control">
                    <label> Date </label>
                    <input type="date" onChange={changehandledate} />
                </div>
            </div>

            <div className="new-expense__action">
                <button type="submit" onClick={submithandlerdata}> add item </button>
            </div>
           </div>

        </from>

    )
}

export default About;