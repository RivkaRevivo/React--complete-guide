import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props)=>{
const saveExpenseDareHandler = (enterdEpectData) =>{
    const expenseData={
        id: Math.random().toString(),
        ...enterdEpectData,
        
    };
   console.log(expenseData)
   props.onAddExpense(expenseData)
};
return(
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDareHandler}/> 
    </div>
)
};

export default NewExpense;