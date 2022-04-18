import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// connecting a component to the redux store makes it REACTIVE 
// as store changes > your components will be re-rendered  
export const ExpenseList = (props) => (
    // the props is referring to the EXPENSES in 'connectedexpenselist' 
    <div className="content-container">
        <div className='list-header'>
            <div className='show-for-mobile'>Expenses</div> 
            <div className='show-for-desktop'>Expense</div>
            <div className='show-for-desktop'>Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className='list-item list-item--message'>
                        <span>No Expenses</span>
                    </div>
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
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList); 