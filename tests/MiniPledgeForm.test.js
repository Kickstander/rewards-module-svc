/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import MiniPledgeForm from '../client/components/MiniPledgeForm.jsx';

let wrapper;

describe('<MiniPledgeForm />', () => {
  beforeEach(() => {
    const mockProps = {
      reward: {
        projectId: 1,
        pledgeAmount: 500,
        name: 'name test',
        description: 'this is a test',
        item1: 'this is a test',
        item2: 'this is a test',
        item3: 'this is a test',
        isLimited: false,
        limitCount: null,
        estDeliv: 'May 2019',
        shipsTo: 'Anywhere',
        backers: 20,
      },
      projectCurrency: 'US$',
    };
    wrapper = shallow(<MiniPledgeForm {...mockProps} />);
  });

  it('should render correct projectCurrency', () => {
    expect(wrapper.find('.currencyWrapper').text()).toEqual('US$');
  });

  it('should contain a Continue button', () => {
    expect(wrapper.find('.continueButton').length).toEqual(1);
  });
});
