import React from 'react';
import { shallow } from 'enzyme';
import { ProductsComponent } from './Products';

describe('Component Products', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductsComponent />);
    expect(component).toBeTruthy();
  });
});
