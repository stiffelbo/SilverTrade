import React from 'react';
import { shallow } from 'enzyme';
import { BackdropComponent } from './Backdrop';

describe('Component Backdrop', () => {
  it('should render without crashing', () => {
    const component = shallow(<BackdropComponent />);
    expect(component).toBeTruthy();
  });
});
