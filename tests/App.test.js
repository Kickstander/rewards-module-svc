import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App.jsx';
import PledgeWidget from '../client/components/PledgeWidget.jsx';

describe('<App />', () => {
  it('should have a PledgeWidget component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(PledgeWidget).length).toEqual(1);
  });

  it('should have an equal number of RewardTier components as there are rewards in the current state', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      projectRewards: [
        {
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
        {
          projectId: 1,
          pledgeAmount: 300,
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
        {
          projectId: 1,
          pledgeAmount: 25,
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
      ],
    });
    expect(wrapper.find(RewardTier).length).toEqual(3);
  });

  it('should render sold out rewards in a separate LimitedGone component', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      projectRewards: [{
        projectId: 1,
        pledgeAmount: 500,
        name: 'name test',
        description: 'this is a test',
        item1: 'this is a test',
        item2: 'this is a test',
        item3: 'this is a test',
        isLimited: true,
        limitCount: 20,
        estDeliv: 'May 2019',
        shipsTo: 'Anywhere',
        backers: 20,
      }],
    });
    expect(wrapper.find(LimitedGone).length).toEqual(1);
  });

  it('should not render normal rewards and sold out rewards in the same component', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      projectRewards: [
        {
          projectId: 1,
          pledgeAmount: 500,
          name: 'name test',
          description: 'this is a test',
          item1: 'this is a test',
          item2: 'this is a test',
          item3: 'this is a test',
          isLimited: true,
          limitCount: 20,
          estDeliv: 'May 2019',
          shipsTo: 'Anywhere',
          backers: 20,
        },
        {
          projectId: 1,
          pledgeAmount: 200,
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
      ],
    });
    expect(wrapper.find(RewardTier).length).toEqual(1);
    expect(wrapper.find(LimitedGone).length).toEqual(1);
  });
});
