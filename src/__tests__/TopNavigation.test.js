import { shallow } from 'enzyme';
import React from 'react';
import '../setupTests';
import TopNavigation from '../components/TopNavigation';

describe('TopNavigation', () => {
    describe('render', () => {
        it('should have a nav', function () {
            const widgets = shallow(<TopNavigation/>);
            expect(widgets.find('nav').length).toBe(1);
        });
        it('should have a navbar-brand', function () {
            const widgets = shallow(<TopNavigation/>);
            expect(widgets.find('.navbar-brand').length).toBe(1);
        });
        it('should have a Notification Button With #notif-count', function () {
            const widgets = shallow(<TopNavigation/>);
            expect(widgets.find('span#notif-count').length).toBe(1);
            expect(widgets.find('#notificationButton').length).toBe(1);
        });
        it('should have a Sign Out', function () {
            const widgets = shallow(<TopNavigation/>);
            expect(widgets.find('#signOutButton').length).toBe(1);
        });
    });
});
