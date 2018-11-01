import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App.jsx';
import PledgeWidget from '../client/components/PledgeWidget.jsx';

describe('<App />', () => {
  it('', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(PledgeWidget).length).toEqual(1);
  });
});
