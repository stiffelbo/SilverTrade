import React from 'react';
import { shallow } from 'enzyme';
import { ProductsOptionsComponent } from './ProductsOptions';

describe('Component ProductsOptions', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductsOptionsComponent />);
    expect(component).toBeTruthy();
  });
});
