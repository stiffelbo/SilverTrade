import React from 'react';
import { shallow } from 'enzyme';
import { FeaturedProductsComponent } from './FeaturedProducts';

describe('Component FeaturedProducts', () => {
  it('should render without crashing', () => {
    const component = shallow(<FeaturedProductsComponent />);
    expect(component).toBeTruthy();
  });
});
