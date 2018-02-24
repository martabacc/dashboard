import { mount, shallow } from 'enzyme';
import React from 'react';
import '../setupTests';
import Table from '../components/Transaction';

const emptyFilter = {};
describe('Transaction', () => {
    it('should have correct row counts when datas.length()=1', function () {
        const datas = [
            {
                date: '22-02-2017',
                amount: 10000,
                description: 'Monthly Salary'
            }
        ];
        const tbody = shallow(<Table datas={datas} filters={emptyFilter}/>).find('tbody');
        expect(tbody.length).toEqual(1);
    });

    it('should have correct row counts when datas.length()=2', function () {
        const datas = [
            {
                date: '22-02-2017',
                amount: 10000,
                description: 'Monthly Salary'
            },
            {
                date: '23-02-2017',
                amount: -10000,
                description: 'Treating friends!'
            }
        ];
        const table = shallow(<Table datas={datas} filters={emptyFilter}/>);
        const rows = table.find('tbody');
        expect(rows.children().length).toBe(2);
    });

    describe('Data checking', () => {
        it('should render all data correctly', function () {
            const datas = [
                {
                    date: '02/22/2017',
                    amount: 10000,
                    description: 'Monthly Salary'
                },
                {
                    date: '02/22/2017',
                    amount: -10000,
                    description: 'Treating friends!'
                }
            ];
            const table = mount(<Table datas={datas} filters={emptyFilter}/>);
            const first = table.find('tbody').children().first();
            const expectedFirstAmount = '10,000';
            const firstAmountValue = first.find('.js-table-transaction__data-amount span.amount');
            expect(firstAmountValue.text()).toEqual(expectedFirstAmount);
            const firstDescriptionValue = first.find('.js-table-transaction__data-description');
            expect(firstDescriptionValue.text()).toEqual(datas[0].description);

            const expectedSecondAmount = '-10,000';
            const second = table.find('tbody').children().at(1);
            const secondAmountValue = second.find('.js-table-transaction__data-amount span.amount');
            expect(secondAmountValue.text()).toEqual(expectedSecondAmount);
            const secondDescriptionValue = second.find('.js-table-transaction__data-description');
            expect(secondDescriptionValue.text()).toEqual(datas[1].description);
        });

        it('should render all data correctly', function () {
            const datas = [
                {
                    date: '02/20/2017',
                    amount: 1000,
                    description: 'Lannister pay his debts'
                },
                {
                    date: '02/24/2017',
                    amount: -900,
                    description: 'Arya Stark treats Freys some wine'
                }
            ];
            const table = mount(<Table datas={datas} filters={emptyFilter}/>);
            const firstRow = table.find('tbody').children().first();
            const expectedFirstRowAmount = '1,000';
            const firstRowAmountValue = firstRow.find('.js-table-transaction__data-amount span.amount');
            expect(firstRowAmountValue.text()).toEqual(expectedFirstRowAmount);
            const firstRowDescriptionValue = firstRow.find('.js-table-transaction__data-description');
            expect(firstRowDescriptionValue.text()).toEqual(datas[0].description);

            const expectedSecondRowAmount = String(datas[1].amount);
            const secondRow = table.find('tbody').children().at(1);
            const secondRowAmountValue = secondRow.find('.js-table-transaction__data-amount span.amount');
            expect(secondRowAmountValue.text()).toEqual(expectedSecondRowAmount);
            const secondRowDescriptionValue = secondRow.find('.js-table-transaction__data-description');
            expect(secondRowDescriptionValue.text()).toEqual(datas[1].description);
        });
    });

    describe('getFilteredArray', () => {
        it('should only show transactions[1] when filter amount > 45000', () => {
            const transaction = {
                date: '28/12/2015',
                description: 'Treats myself 20 birthday cakes',
                amount: 40000
            };
            const anotherTransaction = {
                date: '28/12/2019',
                description: 'Treats Freys some Wine',
                amount: 2000000
            };

            const dataToInject = [transaction, anotherTransaction];
            const filterQuery = {
                amountLowerThan: 45000
            };

            const table = shallow(<Table datas={dataToInject} filters={filterQuery}/>);
            const expectedRenderedTrx = [transaction];
            expect(table.instance().getFilteredArray()).toEqual(expectedRenderedTrx);
        });

        it('should only show transactions[1] when filter amount > 45000', () => {
            const transaction = {
                date: '28/12/2015',
                description: 'Treats myself 20 birthday cakes',
                amount: 40000
            };
            const anotherTransaction = {
                date: '28/12/2019',
                description: 'Treats Freys some Wine',
                amount: 2000000
            };

            const dataToInject = [transaction, anotherTransaction];
            const filterQuery = {
                amountGreaterThan: 45000
            };

            const table = shallow(<Table datas={dataToInject} filters={filterQuery}/>);
            const expectedRenderedTrx = [anotherTransaction];
            expect(table.instance().getFilteredArray()).toEqual(expectedRenderedTrx);
        });

        it('should return 2 row when filter amount string like cake', () => {
            const transaction = {
                date: '28/12/2015',
                description: 'Treats myself 20 birthday cakes',
                amount: 2000000
            };
            const anotherTransaction = {
                date: '28/12/2019',
                description: 'Treat Freys some wine',
                amount: 2000000
            };
            const anyTransaction = {
                date: '28/12/2019',
                description: 'Pay Cersei some wine',
                amount: 2000000
            };

            const dataToInject = [transaction, anotherTransaction, anyTransaction];
            const filterQuery = {
                description: 'wInE'
            };
            const expectedRenderedTrx = [anotherTransaction, anyTransaction];
            const table = shallow(<Table datas={dataToInject} filters={filterQuery}/>);
            expect(table.instance().getFilteredArray()).toEqual(expectedRenderedTrx);
        });
    });

    let datas;
    describe('Sorting functionality', () => {
        beforeEach(() => {
            datas = [
                {
                    date: '20-02-2017',
                    amount: 1000,
                    description: 'Lannister pay his debts'
                },
                {
                    date: '24-02-2017',
                    amount: -900,
                    description: 'Arya Stark treats Freys some wine'
                }
            ];
        });

        describe('Date Sorting Callback', () => {
            it('should call the spy callback when sort date is clicked', function () {
                const spy = jest.fn();
                const table = shallow(<Table filters={emptyFilter} datas={datas} sortByDate={spy}/>);
                const sortByDateButton = table.find('#js-table-sort__date');
                sortByDateButton.simulate('click');

                expect(spy).toHaveBeenCalledTimes(1);
            });
        });

        describe('Amount Sorting Callback', () => {
            it('should call the spy callback when sort date is clicked', function () {
                const spy = jest.fn();
                const table = shallow(<Table filters={emptyFilter} datas={datas} sortByAmount={spy}/>);
                const sortByAmountButton = table.find('#js-table-sort__amount');
                sortByAmountButton.simulate('click');

                expect(spy).toHaveBeenCalledTimes(1);
            });
        });
    });
});
