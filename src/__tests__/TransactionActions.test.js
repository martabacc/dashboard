import { mount } from 'enzyme';
import React from 'react';
import '../setupTests';
import TableActions from '../components/TransactionActions';

describe('Transaction Actions', () => {
    let callWhenAdd, callWhenFilter, tableActions;
    beforeEach(() => {
        callWhenAdd = jest.fn();
        callWhenFilter = jest.fn();
        tableActions = mount(<TableActions callWhenAdd={callWhenAdd} callWhenFilter={callWhenFilter}/>);
    });
    describe('Render components correctly', () => {
        it('should have AddTransactionForm component', function () {
            expect(tableActions.find('AddTransactionForm').length).toBe(1);
        });

        it('should have FilterTransactionForm component', function () {
            expect(tableActions.find('FilterTransactionForm').length).toBe(1);
        });
    });

    describe('callWhenAdd', () => {
        it('should triggered callWhenAdd when the AddFormTransaction is submitted', () => {
            const addForm = tableActions.find('AddTransactionForm');
            const addFormButton = addForm.find('button#js-form-add__submit');
            addFormButton.simulate('click');
            expect(callWhenAdd).toHaveBeenCalledTimes(1);
        });

        it('should be called with exact parameters from addTransaction', () => {
            const addForm = tableActions.find('AddTransactionForm');

            const addFormInputDate = addForm.find('#js-form-add__date');
            addFormInputDate.simulate('change',
                { target: { value: '28/12/2015' } },
            );
            const addFormInputDescription = addForm.find('#js-form-add__description');
            addFormInputDescription.simulate('change',
                { target: { value: 'Treats myself 20 birthday cakes' } },
            );
            const addFormInputAmount = addForm.find('#js-form-add__amount');
            addFormInputAmount.simulate('change',
                { target: { value: 2000000 } },
            );

            const expectedParams = {
                date: '28/12/2015',
                description: 'Treats myself 20 birthday cakes',
                amount: 2000000
            };

            const addFormButton = addForm.find('#js-form-add__submit');
            addFormButton.simulate('click');
            expect(callWhenAdd).toBeCalledWith(expectedParams);
        });
    });

    describe('callWhenFilter', () => {
        it('should triggered callWhenAdd when the AddFormTransaction is submitted', () => {
            const filterForm = tableActions.find('FilterTransactionForm');
            const filterFormButton = filterForm.find('button#js-form-filter__submit');
            filterFormButton.simulate('click');
            expect(callWhenFilter).toHaveBeenCalledTimes(1);
        });

        it('should be called with exact parameters from filterTransaction', function () {
            const filterForm = tableActions.find('FilterTransactionForm');

            const inputDescription = filterForm.find('#js-form-filter__description');
            inputDescription.simulate('change',
                { target: { value: 'birthday' } },
            );

            const inputLowerThan = filterForm.find('#js-form-filter__lower-than');
            inputLowerThan.simulate('change',
                { target: { value: 2000000 } },
            );

            const inputGreaterThan = filterForm.find('#js-form-filter__greater-than');
            inputGreaterThan.simulate('change',
                { target: { value: 10000 } },
            );

            const button = filterForm.find('#js-form-filter__submit');
            button.simulate('click');

            const expectedParams = {
                description: 'birthday',
                amountLowerThan: 2000000,
                amountGreaterThan: 10000
            };

            const filterFormButton = filterForm.find('button#js-form-filter__submit');
            filterFormButton.simulate('click');
            expect(callWhenFilter).toBeCalledWith(expectedParams);
        });
    });
});
