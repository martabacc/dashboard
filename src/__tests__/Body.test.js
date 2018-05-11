import { shallow } from 'enzyme';
import React from 'react';
import Body from '../components/Body';
import '../setupTests';

describe('Body', () => {
    describe('render', () => {
        it('should have main component', function () {
            const widgets = shallow(<Body/>);
            expect(widgets.find('TransactionMain').length).toBe(1);
        });
        it('should have profile component', function () {
            const widgets = shallow(<Body/>);
            expect(widgets.find('Sidebar').length).toBe(1);
        });
    });
});
