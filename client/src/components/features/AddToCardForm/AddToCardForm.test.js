import React from 'react';
import { shallow } from 'enzyme';
import { AddToCardFormComponent } from './AddToCardForm';

describe('Component AddToCardForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<AddToCardFormComponent />);
    expect(component).toBeTruthy();
  });
});
