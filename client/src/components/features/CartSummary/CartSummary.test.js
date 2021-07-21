import React from 'react';
import { shallow } from 'enzyme';
import { CartSummaryComponent } from './CartSummary';

describe('Component CartSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartSummaryComponent />);
    expect(component).toBeTruthy();
  });
});
