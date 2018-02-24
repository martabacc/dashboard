import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';
import '../setupTests';

describe('App', () => {
    describe('render', () => {
        it('should has top navigation component', function () {
            const widgets = shallow(<App/>);
            expect(widgets.find('Body').length).toBe(1);
        });
        it('should has top navigation component', function () {
            const widgets = shallow(<App/>);
            expect(widgets.find('TopNavigation').length).toBe(1);
        });
    });
});
