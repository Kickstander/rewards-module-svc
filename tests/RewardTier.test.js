/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import RewardTier from '../client/components/RewardTier.jsx';
import MiniPledgeForm from '../client/components/MiniPledgeForm.jsx';

describe('<RewardTier />', () => {
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
        isLimited: false,
        limitCount: null,
        estDeliv: 'May 2019',
        shipsTo: 'Anywhere',
        backers: 20,
      },
      projectCurrency: 'US$',
    };

    const wrapper = shallow(<RewardTier {...mockProps} />);
    expect(wrapper.find('.rewardName').text()).toEqual('name test');
    expect(wrapper.find('.rewardDesc').text()).toEqual('this is a test 0');
    expect(wrapper.find('.rewardItem1').text()).toEqual('this is a test 1');
    expect(wrapper.find('.rewardItem2').text()).toEqual('this is a test 2');
    expect(wrapper.find('.rewardItem3').text()).toEqual('this is a test 3');
    expect(wrapper.find('.estDeliv').text()).toEqual('ESTIMATED DELIVERYMay 2019');
    expect(wrapper.find('.shipsTo').text()).toEqual('SHIPS TOAnywhere');
    expect(wrapper.find('.backers').text()).toEqual('20 backers');
    expect(wrapper.find('.pledgeAmount').text()).toEqual('Pledge US$ 200 or more');
  });

  it('should change limited state if reward is limited', () => {
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
        backers: 10,
      },
      projectCurrency: 'US$',
    };

    const wrapper = shallow(<RewardTier {...mockProps} />);
    expect(wrapper.state('limited')).toEqual(true);
  });

  it('should NOT render limited text if reward is NOT limited', () => {
    const mockProps = {
      reward: {
        projectId: 1,
        pledgeAmount: 200,
        name: 'name test',
        description: 'this is a test 0',
        item1: 'this is a test 1',
        item2: 'this is a test 2',
        item3: 'this is a test 3',
        isLimited: false,
        limitCount: null,
        estDeliv: 'May 2019',
        shipsTo: 'Anywhere',
        backers: 10,
      },
      projectCurrency: 'US$',
    };

    const wrapper = shallow(<RewardTier {...mockProps} />);
    expect(wrapper.find('.limitedWrapper').length).toEqual(0);
  });

  it('should render limited text if reward is limited', () => {
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
        backers: 10,
      },
      projectCurrency: 'US$',
    };

    const wrapper = shallow(<RewardTier {...mockProps} />);
    expect(wrapper.find('.limitedWrapper').length).toEqual(1);
  });

  it('should change clicked state when click event occurs', () => {
    const mockProps = {
      reward: {
        projectId: 1,
        pledgeAmount: 200,
        name: 'name test',
        description: 'this is a test 0',
        item1: 'this is a test 1',
        item2: 'this is a test 2',
        item3: 'this is a test 3',
        isLimited: false,
        limitCount: null,
        estDeliv: 'May 2019',
        shipsTo: 'Anywhere',
        backers: 20,
      },
      projectCurrency: 'US$',
    };

    const wrapper = shallow(<RewardTier {...mockProps} />);
    expect(wrapper.state('clicked')).toEqual(false);
    wrapper.find('.overlay').simulate('click');
    expect(wrapper.state('clicked')).toEqual(true);
  });

  it('should render MiniPledgeForm if clicked state is true', () => {
    const mockProps = {
      reward: {
        projectId: 1,
        pledgeAmount: 200,
        name: 'name test',
        description: 'this is a test 0',
        item1: 'this is a test 1',
        item2: 'this is a test 2',
        item3: 'this is a test 3',
        isLimited: false,
        limitCount: null,
        estDeliv: 'May 2019',
        shipsTo: 'Anywhere',
        backers: 20,
      },
      projectCurrency: 'US$',
    };

    const wrapper = shallow(<RewardTier {...mockProps} />);
    expect(wrapper.find(MiniPledgeForm).length).toEqual(0);
    wrapper.setState({
      clicked: true,
    });
    expect(wrapper.find(MiniPledgeForm).length).toEqual(1);
  });
});
