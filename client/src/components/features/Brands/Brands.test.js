import React from 'react';
import { shallow } from 'enzyme';
import { BrandsComponent } from './Brands';

describe('Component Brands', () => {
  it('should render without crashing', () => {
    const component = shallow(<BrandsComponent />);
    expect(component).toBeTruthy();
  });
});
