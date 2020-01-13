import React from 'react';
import { shallow } from 'enzyme';
import UndefinedRoute from './UndefinedRoute';

describe('UndefinedRoute', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UndefinedRoute />);
  });

  it('should match the UndefinedRoute Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
