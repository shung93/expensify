import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// connecting a component to the redux store makes it REACTIVE 
// as store changes > your components will be re-rendered  
export const ExpenseList = (props) => (
    // the props is referring to the EXPENSES in 'connectedexpenselist' 
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                props.expenses.map((expense) => (
                    <ExpenseListItem
                        key={expense.id}
                        {...expense}
                    />
                ))
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList); 