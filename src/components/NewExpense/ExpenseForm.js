import React, { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = () => {
    const [entertitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterdate, setEnterdate] = useState('');

    // const [userInput, SetUserInput]= useState({
    //     entertitle: '',
    //     enterAmount: '',
    //     enterdate : '',

    // })
    const titleCangeHandler = (event) => {
        setEnterTitle(event.target.value);
        //    SetUserInput({
        //     ...userInput,
        //     entertitle:event.target.value,
        //    })
        console.log(event.target.value)
    };
    const AmountCangeHandler = (event) => {
        setEnterAmount(event.target.value);
        // SetUserInput({
        //     ...userInput,
        //     enterAmount:event.target.value,
        //    })
        console.log(event.target.value)
    };
    const dateCangeHandler = (event) => {
        setEnterdate(event.target.value);//work separeatly
        // SetUserInput({
        //     ...userInput,
        //     enterdate:event.target.value,
        //    })// work but itsnt a good way
        //     SetUserInput=((prevState) >={
        //             return :{ ...prevState , enterdate:event.target.value},
        //  } ) ;

        console.log(event.target.value)
    };

    const submitHandler = (event) => {
           event.preventDeafault();//ignore the deafault sendtoservr
           const expenseData = {
            title:entertitle,
            Amount: enterAmount,
            date : new Date(enterdate),//change tocdata from string
           }
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>
                        Title
                    </label>
                    <input type={'text'} onChange={titleCangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>
                        Amount
                    </label>
                    <input type='number' min="0.01" step={"0.01"} onChange={AmountCangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>
                        date
                    </label>
                    <input type={'date'} min="2019-01-01" max="2023-03-28" onChange={dateCangeHandler
                    } />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expanse</button>
            </div>
        </form>

    );
};

export default ExpenseForm;