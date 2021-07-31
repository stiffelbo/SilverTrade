import React from 'react';
import { shallow } from 'enzyme';
import { PaginationComponent } from './Pagination';

describe('Component Pagination', () => {
  it('should render without crashing', () => {
    const component = shallow(<PaginationComponent />);
    expect(component).toBeTruthy();
  });
});
