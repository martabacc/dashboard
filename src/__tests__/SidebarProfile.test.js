import { shallow } from 'enzyme';
import React from 'react';
import '../setupTests';
import Profile from '../components/SidebarProfile';

describe('SidebarProfile', () => {
    describe('render', () => {
        it('should have div element ', function () {
            const widgets = shallow(<Profile/>);
            expect(widgets.find('div').length).toBe(1);
        });
        it('should have profile picture', function () {
            const widgets = shallow(<Profile/>);
            expect(widgets.find('img').length).toBe(1);
        });

        it('should have span name', function () {
            const widgets = shallow(<Profile/>);
            expect(widgets.find('span#profile-name').length).toBe(1);
        });

        it('should render name correctly', function () {
            const widgets = shallow(<Profile name={'Tampan'}/>);
            expect(widgets.find('span#profile-name').text()).toBe('Tampan');
        });
    });
});
