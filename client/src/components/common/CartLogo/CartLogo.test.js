import React from 'react';
import { shallow } from 'enzyme';
import { CartLogoComponent } from './CartLogo';

describe('Component CartLogo', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartLogoComponent />);
    expect(component).toBeTruthy();
  });
});
