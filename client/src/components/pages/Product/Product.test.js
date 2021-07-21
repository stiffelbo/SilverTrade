import React from 'react';
import { shallow } from 'enzyme';
import { ProductComponent } from './Product';

describe('Component Product', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductComponent />);
    expect(component).toBeTruthy();
  });
});
