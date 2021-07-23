import React from 'react';
import { shallow } from 'enzyme';
import { CheckoutComponent } from './Checkout';

describe('Component Checkout', () => {
  it('should render without crashing', () => {
    const component = shallow(<CheckoutComponent />);
    expect(component).toBeTruthy();
  });
});
