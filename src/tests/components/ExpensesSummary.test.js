import React from 'react';
import {shallow} from 'enzyme';

import {ExpensesSummary} from "../../components/ExpensesSummary";

test('should correctly render ExpensesSumamry with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSumamry with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23512340987}/>);
    expect(wrapper).toMatchSnapshot();
});