import React from 'react';
import { shallow } from 'enzyme';
import { SliderComponent } from './Slider';

describe('Component Slider', () => {
  it('should render without crashing', () => {
    const component = shallow(<SliderComponent />);
    expect(component).toBeTruthy();
  });
});
