import React from 'react';
import { shallow } from 'enzyme';
import { StackerComponent } from './Stacker';

describe('Component Stacker', () => {
  it('should render without crashing', () => {
    const component = shallow(<StackerComponent />);
    expect(component).toBeTruthy();
  });
});
