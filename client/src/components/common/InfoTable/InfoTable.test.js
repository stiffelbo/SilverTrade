import React from 'react';
import { shallow } from 'enzyme';
import { InfoTableComponent } from './InfoTable';

describe('Component InfoTable', () => {
  it('should render without crashing', () => {
    const component = shallow(<InfoTableComponent />);
    expect(component).toBeTruthy();
  });
});
