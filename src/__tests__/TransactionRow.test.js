import { shallow } from 'enzyme';
import React from 'react';
import '../setupTests';
import moment from 'moment';
import TableRow from '../components/TransactionRow';

describe('TransactionRow', () => {
    describe('render', () => {
        it('should have the correct data amount(5) for each rows ', () => {
            const data = {
                date: '22-02-2017',
                amount: 10000,
                description: 'Monthly Salary'
            };
            const tableRow = shallow(<TableRow data={data}/>);
            const tableDatas = tableRow.find('td');
            expect(tableDatas.length).toEqual(4);
        });

        it('should render the description correctly', () => {
            const data = {
                date: '02/22/2017',
                amount: 10000,
                description: 'Monthly Salary'
            };
            const tableRow = shallow(<TableRow data={data}/>);
            const tableDatas = tableRow.find('td.js-table-transaction__data-description');
            expect(tableDatas.text()).toEqual(data.description);
        });

        it('should render the date correctly', () => {
            const data = {
                date: '02/22/2017',
                amount: 10000,
                description: 'Monthly Salary'
            };
            const tableRow = shallow(<TableRow data={data} index={1}/>);
            const tableDatas = tableRow.find('td.js-table-transaction__data-date');
            const renderedDate = moment(tableDatas.text());
            const expectedDate = moment(Date.parse(data.date));
            expect(renderedDate.isSame(expectedDate)).toBe(true);
        });

        it('should render the amount correctly', () => {
            const data = {
                date: '02/22/2017',
                amount: 10000,
                description: 'Monthly Salary'
            };
            const tableRow = shallow(<TableRow data={data} index={1}/>);
            const tableDatas = tableRow.find('td.js-table-transaction__data-amount');
            const renderedAmount = tableDatas.find('span.amount');
            const expectedAmount = '10,000';
            expect(renderedAmount.text()).toEqual(expectedAmount);
        });
    });
});
