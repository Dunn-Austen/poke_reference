import React from 'react';
import { shallow } from 'enzyme';
import ReceptionPage from './ReceptionPage';

describe('ReceptionPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReceptionPage />);
  });

  it('should match the ReceptionPage Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
