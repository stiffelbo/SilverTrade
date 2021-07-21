import React from 'react';
import { shallow } from 'enzyme';
import { RatesComponent } from './Rates';

describe('Component Rates', () => {
  it('should render without crashing', () => {
    const component = shallow(<RatesComponent />);
    expect(component).toBeTruthy();
  });
});
