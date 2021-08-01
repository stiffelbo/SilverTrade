import React from 'react';
import { shallow } from 'enzyme';
import { ShopComponent } from './Shop';

describe('Component Shop', () => {
  it('should render without crashing', () => {
    const component = shallow(<ShopComponent />);
    expect(component).toBeTruthy();
  });
});
