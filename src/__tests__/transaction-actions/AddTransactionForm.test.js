import { shallow } from 'enzyme';
import React from 'react';
import '../../setupTests';
import AddTransactionForm from '../../components/transaction-actions/AddTransactionForm';

const blankFunction = () => {};
describe('Add Transaction Form', () => {
    describe('Amount Input Change', () => {
        it('should detect amount change to 1000 in the state ', function () {
            const addForm = shallow(<AddTransactionForm callWhenClicked={blankFunction}/>);
            const inputAmount = addForm.find('#js-form-add__amount');
            inputAmount.simulate('change',
                { target: { value: 1000 } },
            );

            expect(addForm.state('amount')).toBe(1000);
        });

        it('should detect amount change to 20000 in the state ', function () {
            const addForm = shallow(<AddTransactionForm callWhenClicked={blankFunction}/>);
            const inputAmount = addForm.find('#js-form-add__amount');
            inputAmount.simulate('change',
                { target: { value: 20000 } },
            );

            expect(addForm.state('amount')).toBe(20000);
        });
    });

    describe('Description input Change', () => {
        it('should detect description change to Tampan in the state ', function () {
            const addForm = shallow(<AddTransactionForm callWhenClicked={blankFunction}/>);
            const inputDescription = addForm.find('#js-form-add__description');
            inputDescription.simulate('change',
                { target: { value: 'Tampan' } },
            );

            expect(addForm.state('description')).toBe('Tampan');
        });

        it('should detect description change to Tampan in the state ', function () {
            const addForm = shallow(<AddTransactionForm callWhenClicked={blankFunction}/>);
            const inputDescription = addForm.find('#js-form-add__description');
            inputDescription.simulate('change',
                { target: { value: 'Bought some groceries' } },
            );

            expect(addForm.state('description')).toBe('Bought some groceries');
        });
    });

    describe('Date Input Change', () => {
        it('should detect date is changed to 28/12/1995', () => {
            const spy = jest.fn();
            const addForm = shallow(<AddTransactionForm callWhenClicked={spy}/>);
            const inputDate = addForm.find('#js-form-add__date');
            inputDate.simulate('change',
                { target: { value: '28/12/1995' } },
            );
            expect(addForm.state('date')).toBe('28/12/1995');
        });

        it('should detect date is changed to 28/12/2018', () => {
            const spy = jest.fn();
            const addForm = shallow(<AddTransactionForm callWhenClicked={spy}/>);
            const inputDate = addForm.find('#js-form-add__date');
            inputDate.simulate('change',
                { target: { value: '28/12/2018' } },
            );
            expect(addForm.state('date')).toBe('28/12/2018');
        });
    });

    describe('Button Click', () => {
        it('should call the given callback when the button is fired', () => {
            const spy = jest.fn();
            const addForm = shallow(<AddTransactionForm callWhenClicked={spy}/>);
            const button = addForm.find('#js-form-add__submit');
            button.simulate('click');
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('should not call the given callback when the button is fired', () => {
            const spy = jest.fn();
            shallow(<AddTransactionForm callWhenClicked={spy}/>);
            expect(spy).not.toHaveBeenCalled();
        });
    });

    describe('Sending state to parent', () => {
        it('should send its state to parent when submitted (direct change state)', () => {
            const spy = jest.fn();
            const addForm = shallow(<AddTransactionForm callWhenClicked={spy}/>);
            const state =
        {
            description: 'Treats myself a birthday cake',
            amount: 1000,
            date: '28/12/1995'
        };
            addForm.setState(state);
            const button = addForm.find('#js-form-add__submit');
            button.simulate('click');

            expect(spy).toBeCalledWith(state);
        });

        it('should send its state to parent when submitted, by changing inputs inputs', () => {
            const spy = jest.fn();
            const addForm = shallow(<AddTransactionForm callWhenClicked={spy}/>);

            const inputDate = addForm.find('#js-form-add__date');
            inputDate.simulate('change',
                { target: { value: '28/12/2015' } },
            );
            const inputDescription = addForm.find('#js-form-add__description');
            inputDescription.simulate('change',
                { target: { value: 'Treats myself 20 birthday cakes' } },
            );
            const inputAmount = addForm.find('#js-form-add__amount');
            inputAmount.simulate('change',
                { target: { value: 2000000 } },
            );

            const button = addForm.find('#js-form-add__submit');
            button.simulate('click');

            const expectedParams = {
                date: '28/12/2015',
                description: 'Treats myself 20 birthday cakes',
                amount: 2000000
            };

            expect(spy).toBeCalledWith(expectedParams);
        });
    });

    describe('reset inputs', () => {
        it('should state when submit is clicked', () => {
            const addForm = shallow(<AddTransactionForm callWhenClicked={blankFunction}/>);
            const inputAmount = addForm.find('#js-form-add__amount');
            inputAmount.simulate('change',
                { target: { value: 1000 } },
            );
            const button = addForm.find('#js-form-add__submit');
            button.simulate('click');
            const expectedState = {
                description: '',
                amount: -10000,
                date: ''
            };
            expect(addForm.state()).toEqual(expectedState);
        });
    });
});
