/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import PledgeWidget from '../client/components/PledgeWidget.jsx';

describe('<PledgeWidget />', () => {
  it('should change state when clicked', () => {
    const wrapper = shallow(<PledgeWidget projectId='1' projectCurrency='US$' />);
    expect(wrapper.state('clicked')).toBe(false);
    wrapper.find('.pledgeWidget').simulate('click');
    expect(wrapper.state('clicked')).toBe(true);
  });

  it('should display Continue button when clicked state is true', () => {
    const wrapper = shallow(<PledgeWidget projectId='1' projectCurrency='US$' />);
    expect(wrapper.contains('Continue')).toEqual(false);
    wrapper.setState({
      clicked: true,
    });
    expect(wrapper.contains('Continue')).toEqual(true);
  });
});
