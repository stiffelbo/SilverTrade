import React from 'react';
import { shallow } from 'enzyme';
import { NavbarComponent } from './Navbar';

describe('Component Navbar', () => {
  it('should render without crashing', () => {
    const component = shallow(<NavbarComponent />);
    expect(component).toBeTruthy();
  });
});
