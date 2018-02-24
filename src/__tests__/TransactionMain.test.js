import { mount, shallow } from 'enzyme';
import React from 'react';
import '../setupTests';
import Main from '../components/TransactionMain';

describe('TransactionMain Component', () => {
    describe('render', () => {
        it('should contains TransactionWidget Component', function () {
            const main = shallow(<Main/>);
            expect(main.find('TransactionWidget').length).toBe(1);
        });

        it('should contains TableAction Component', function () {
            const main = shallow(<Main/>);
            expect(main.find('TransactionActions').length).toBe(1);
        });
        it('should contains Transaction Component', function () {
            const main = shallow(<Main/>);
            expect(main.find('Transaction').length).toBe(1);
        });
    });

    describe('transaction manipulation', () => {
        let main, addInputDate, addButton, addInputDescription, addInputAmount,
            inputFilterGreaterThan, filterButton, inputFilterDescription, inputGreaterLowerThan;

        beforeEach(() => {
            main = mount(<Main/>);
            addInputDate = main.find('#js-form-add__date');
            addInputDescription = main.find('#js-form-add__description');
            addInputAmount = main.find('#js-form-add__amount');
            addButton = main.find('#js-form-add__submit');
            inputFilterDescription = main.find('#js-form-filter__description');
            inputGreaterLowerThan = main.find('#js-form-filter__lower-than');
            inputFilterGreaterThan = main.find('#js-form-filter__greater-than');
            filterButton = main.find('#js-form-filter__submit');
        });

        const addTransactionToMain = (transactionDetails) => {
            addInputDate.simulate('change',
                { target: { value: transactionDetails.date } });
            addInputDescription.simulate('change',
                { target: { value: transactionDetails.description } });
            addInputAmount.simulate('change',
                { target: { value: transactionDetails.amount } });
            addButton.simulate('click');
        };

        const setFilterQuery = (filterQuery) => {
            inputFilterDescription.simulate('change',
                { target: { value: filterQuery.description } });
            inputGreaterLowerThan.simulate('change',
                { target: { value: filterQuery.amountLowerThan } });
            inputFilterGreaterThan.simulate('change',
                { target: { value: filterQuery.amountGreaterThan } });
            filterButton.simulate('click');
        };

        describe('addTransaction', () => {
            it('should receive exact submission from addForm', () => {
                const transaction = {
                    date: '12/28/2015',
                    description: 'Treats myself 20 birthday cakes',
                    amount: 2000000
                };
                addTransactionToMain(transaction);
                expect(main.state('transactions')).toContainEqual(transaction);
            });
            it('should receive all submissions from addForm (2 datas)', () => {
                const transaction = {
                    date: '12/28/2015',
                    description: 'Treats myself 20 birthday cakes',
                    amount: 2000000
                };
                addTransactionToMain(transaction);
                const anotherTransaction = {
                    date: '12/28/2019',
                    description: 'Treats Freys some Wine',
                    amount: -2000000
                };
                addTransactionToMain(anotherTransaction);

                const expectedState = [transaction, anotherTransaction];
                expect(main.state('transactions')).toMatchObject(expectedState);
            });
        });
        describe('filterTransaction', () => {
            it('should receive exact submission from filterForm', () => {
                const filterQuery = {
                    description: 'cakes',
                    amountLowerThan: 30000,
                    amountGreaterThan: 1000
                };
                setFilterQuery(filterQuery);
                expect(main.state('filterQuery')).toEqual(filterQuery);
            });

            it('should change filter state when filter form submitted twice', () => {
                const filterQuery = {
                    description: 'cakes',
                    amountLowerThan: 30000,
                    amountGreaterThan: 1000
                };
                setFilterQuery(filterQuery);
                const anotherFilterQuery = {
                    description: 'game of thrones',
                    amountLowerThan: 3000000,
                    amountGreaterThan: 10000
                };
                setFilterQuery(anotherFilterQuery);
                expect(main.state('filterQuery')).toEqual(anotherFilterQuery);
            });
        });

        describe('Sorting Functionality', () => {
            beforeEach(() => {
                const transaction = {
                    date: '12/28/2015',
                    description: 'Treats myself 20 birthday cakes',
                    amount: 400000
                };
                addTransactionToMain(transaction);
                const anotherTransaction = {
                    date: '12/28/2019',
                    description: 'Treats Freys some Wine',
                    amount: 30000
                };
                addTransactionToMain(anotherTransaction);
            });

            describe('sortByAmount', () => {
                it('should sort by amount ascendingly when clicked once', function () {
                    const sortButtonByAmount = main.find('#js-table-sort__amount');
                    sortButtonByAmount.simulate('click');
                    const expectedTransactionState = [
                        {
                            date: '12/28/2019',
                            description: 'Treats Freys some Wine',
                            amount: 30000
                        },
                        {
                            date: '12/28/2015',
                            description: 'Treats myself 20 birthday cakes',
                            amount: 400000
                        }
                    ];
                    expect(main.state('transactions')).toEqual(expectedTransactionState);
                });
                it('should sort by amount descending when clicked once', function () {
                    const sortButtonByAmount = main.find('#js-table-sort__amount');
                    sortButtonByAmount.simulate('click');
                    sortButtonByAmount.simulate('click');
                    const expectedTransactionState = [
                        {
                            date: '12/28/2015',
                            description: 'Treats myself 20 birthday cakes',
                            amount: 400000
                        },
                        {
                            date: '12/28/2019',
                            description: 'Treats Freys some Wine',
                            amount: 30000
                        }
                    ];
                    expect(main.state('transactions')).toEqual(expectedTransactionState);
                });
            });

            describe('sortByDate', () => {
                it('should sort by date ascendingly when clicked once', function () {
                    const sortButtonByAmount = main.find('#js-table-sort__date');
                    sortButtonByAmount.simulate('click');
                    const expectedTransactionState = [
                        {
                            date: '12/28/2015',
                            description: 'Treats myself 20 birthday cakes',
                            amount: 400000
                        },
                        {
                            date: '12/28/2019',
                            description: 'Treats Freys some Wine',
                            amount: 30000
                        }
                    ];
                    expect(main.state('transactions')).toEqual(expectedTransactionState);
                });
                it('should sort by amount descending when clicked once', function () {
                    const sortButtonByAmount = main.find('#js-table-sort__date');
                    sortButtonByAmount.simulate('click');
                    sortButtonByAmount.simulate('click');
                    const expectedTransactionState = [
                        {
                            date: '12/28/2019',
                            description: 'Treats Freys some Wine',
                            amount: 30000
                        }, {
                            date: '12/28/2015',
                            description: 'Treats myself 20 birthday cakes',
                            amount: 400000
                        }
                    ];
                    expect(main.state('transactions')).toEqual(expectedTransactionState);
                });
            });
        });
    });
});
