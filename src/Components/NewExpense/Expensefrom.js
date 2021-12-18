import React from 'react'
import './Expensefrom.css'

export const Expensefrom = () => {
    return (
         <from>
           <div className="new-expense__controls">
             <div className="new-expense__control">
                <label> Title </label>
                <input type="text"> </input>

             </div>
             <div className="new-expense__control">
                <label> Amount </label>
                <input type="number" min="0.01" step="0.01"> </input>
                
             </div>
             <div className="new-expense__control">
                <label> Date </label>
                <input type="date" > </input>
                
             </div>
           </div>
           
           <div className="new-expense__actions"> 
             <button type="submit"> Add expense </button>
           </div>
         </from>
    )
}

export default Expensefrom;
