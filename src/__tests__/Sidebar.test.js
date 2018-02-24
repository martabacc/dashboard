import { shallow } from 'enzyme';
import React from 'react';
import '../setupTests';
import Sidebar from '../components/Sidebar';


describe('Sidebar', () => {
    describe('render', () => {
        it('should have profile section', function () {
            const widgets = shallow(<Sidebar/>);
            expect(widgets.find('SidebarProfile').length).toBe(1);
        });
        it('should have nav element', function () {
            const widgets = shallow(<Sidebar/>);
            expect(widgets.find('nav').length).toBe(1);
        });
    });
});
