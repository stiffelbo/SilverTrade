import React from 'react';
import { shallow } from 'enzyme';
import { FlipperComponent } from './Flipper';

describe('Component Flipper', () => {
  it('should render without crashing', () => {
    const component = shallow(<FlipperComponent />);
    expect(component).toBeTruthy();
  });
});
