import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove an expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action); // expenses array is passed in to test 
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove an expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: '-1'
    };
    const state = expensesReducer(expenses, action); // expenses array is passed in to test 
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '13',
        description: 'cheese',
        note: '',
        createdAt: 20000,
        amount: 29500
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});

test('should edit an expense', () => {
    const amount = '122000';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        },
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit expense if expense not found', () => {
    const amount = '1000';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-999',
        updates: {
            amount
        },
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses); // state should be equal to the original expenses array 
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});