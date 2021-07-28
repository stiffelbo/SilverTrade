import React from 'react';
import { shallow } from 'enzyme';
import { CommentFormComponent } from './CommentForm';

describe('Component CommentForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<CommentFormComponent />);
    expect(component).toBeTruthy();
  });
});
