import React from 'react';
import { shallow } from 'enzyme';
import { ProductItemComponent } from './ProductItem';

describe('Component ProductItem', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductItemComponent />);
    expect(component).toBeTruthy();
  });
});
