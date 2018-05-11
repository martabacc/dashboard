import { shallow } from 'enzyme';
import React from 'react';
import '../setupTests';
import TransactionWidget from '../components/TransactionWidget';

const emptyFunction = {};
describe('TransactionWidget', () => {
    describe('render', () => {
        it('should have current balance widget', function () {
            const widgets = shallow(<TransactionWidget statements={emptyFunction}/>);
            expect(widgets).toBeTruthy();
        });
    });
});
