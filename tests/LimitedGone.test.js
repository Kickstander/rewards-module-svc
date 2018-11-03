/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import LimitedGone from '../client/components/LimitedGone.jsx';

describe('<LimitedGone />', () => {
  it('should render all reward properties inside component', () => {
    const mockProps = {
      reward: {
        projectId: 1,
        pledgeAmount: 200,
        name: 'name test',
        description: 'this is a test 0',
        item1: 'this is a test 1',
        item2: 'this is a test 2',
        item3: 'this is a test 3',
        isLimited: true,
        limitCount: 20,
        estDeliv: 'May 2019',
        shipsTo: 'Anywhere',
        backers: 20,
      },
      projectCurrency: 'US$',
    };

    const wrapper = shallow(<LimitedGone {...mockProps} />);
    expect(wrapper.find('.rewardName').text()).toEqual('name test');
    expect(wrapper.find('.rewardDesc').text()).toEqual('this is a test 0');
    expect(wrapper.find('.rewardItem1').text()).toEqual('this is a test 1');
    expect(wrapper.find('.rewardItem2').text()).toEqual('this is a test 2');
    expect(wrapper.find('.rewardItem3').text()).toEqual('this is a test 3');
    expect(wrapper.find('.estDeliv').text()).toEqual('ESTIMATED DELIVERYMay 2019');
    expect(wrapper.find('.shipsTo').text()).toEqual('SHIPS TOAnywhere');
    expect(wrapper.find('.backers').text()).toEqual('20 backers');
    expect(wrapper.find('.pledgeAmount').text()).toEqual('Pledge US$ 200 or more');
    expect(wrapper.find('.rewardAvail').text()).toEqual('Reward no longer available');
  });
});
