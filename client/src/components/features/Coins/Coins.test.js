import React from 'react';
import { shallow } from 'enzyme';
import { CoinsComponent } from './Coins';

describe('Component Coins', () => {
  it('should render without crashing', () => {
    const component = shallow(<CoinsComponent />);
    expect(component).toBeTruthy();
  });
});
