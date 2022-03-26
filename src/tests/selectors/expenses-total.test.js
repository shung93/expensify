import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should get 1 expense total correctly', () => {
    const total = selectExpensesTotal([expenses[0]]);
    expect(total).toMatchSnapshot(195);
});

test('should get expense total correctly', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toMatchSnapshot(114195);
});
