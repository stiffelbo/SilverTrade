import React from 'react';
import { shallow } from 'enzyme';
import { LogoComponent } from './Logo';

describe('Component Logo', () => {
  it('should render without crashing', () => {
    const component = shallow(<LogoComponent />);
    expect(component).toBeTruthy();
  });
});
