import { shallow } from 'enzyme';
import React from 'react';
import TransacionSingleWidget from '../../components/widgets/TransactionSingleWidget';
import '../../setupTests';

describe('Transaction Single Widget', () => {
    describe('title', () => {
        it('should render the debit value correctly', function () {
            const debitWidget = shallow(<TransacionSingleWidget title="Debit" style="warning" amount={500}/>);
            const renderedDebitAmount = debitWidget.find('#js-dashboard__widget--title').text();
            expect(renderedDebitAmount).toBe('Debit');
        });
        it('should render the credit value correctly', function () {
            const creditWidget = shallow(<TransacionSingleWidget title="Credit" style="warning" amount={500}/>);
            const renderedDebitAmount = creditWidget.find('#js-dashboard__widget--title').text();
            expect(renderedDebitAmount).toBe('Credit');
        });
    });
    describe('getStyle', () => {
        it('should render the credit widget with bg-warning class', function () {
            const debitWidget = shallow(<TransacionSingleWidget title="Credit" amount={500}/>);
            const renderedWidget = debitWidget.find('#js-dashboard__widget');
            expect(renderedWidget.hasClass('bg-warning')).toBe(true);
        });
        it('should render the debit widget with bg-primary class', function () {
            const debitWidget = shallow(<TransacionSingleWidget title="Debit" amount={500}/>);
            const renderedWidget = debitWidget.find('#js-dashboard__widget');
            expect(renderedWidget.hasClass('bg-primary')).toBe(true);
        });
        it('should render the currentBalance widget with bg-success class', function () {
            const debitWidget = shallow(<TransacionSingleWidget title="Current Balance" amount={500}/>);
            const renderedWidget = debitWidget.find('#js-dashboard__widget');
            expect(renderedWidget.hasClass('bg-success')).toBe(true);
        });
    });
});
