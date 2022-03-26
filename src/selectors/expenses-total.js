const selectExpensesTotal = (expenses) => {
    const expenseAmountTotals = 
        expenses.map(expense => expense['amount'])
                .reduce((prevValue, currValue) => prevValue + currValue, 0)

    return expenseAmountTotals;
}

export default selectExpensesTotal;