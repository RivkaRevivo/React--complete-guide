import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear)
  };

  const filterexpenses = (props.items).filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  return (
    <div>
      <Card className="expenses">

        <ExpensesFilter selectedYear={filterYear} onChangefilter={filterChangeHandler}  />
        {filterexpenses.length ===0 && <p>There are no book for this year</p>}
        {filterexpenses.length >0 && filterexpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;