import React from 'react';
import { shallow } from 'enzyme';
import { HomeComponent } from './Home';

describe('Component Home', () => {
  it('should render without crashing', () => {
    const component = shallow(<HomeComponent />);
    expect(component).toBeTruthy();
  });
});
