import React from 'react';
import { shallow } from 'enzyme';
import { SidebarComponent } from './Sidebar';

describe('Component Sidebar', () => {
  it('should render without crashing', () => {
    const component = shallow(<SidebarComponent />);
    expect(component).toBeTruthy();
  });
});
