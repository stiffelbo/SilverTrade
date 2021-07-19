import React from 'react';
import { shallow } from 'enzyme';
import { CoinCardComponent } from './CoinCard';

describe('Component CoinCard', () => {
  it('should render without crashing', () => {
    const component = shallow(<CoinCardComponent />);
    expect(component).toBeTruthy();
  });
});
