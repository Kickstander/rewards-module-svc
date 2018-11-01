import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RewardTier from './RewardTier.jsx';
import PledgeWidget from './PledgeWidget.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectRewards: [],
      currentProject: null
    };

    this.fetchRewards = this.fetchRewards.bind(this);
  }

  fetchRewards(projectId) {
    axios.get(`/api/${projectId}/rewards`)
      .then((res) => {
        this.setState({
          projectRewards: res.data,
          currentProject: projectId
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    //initial mount with project 1 for now
    this.fetchRewards(1);
  }

  render() {
    return (
      <div>
        <StyledHeader>Support</StyledHeader>
        <StyledPledgeWidget className='pledgeWidget'>
          <PledgeWidget projectId={this.state.projectId} />
        </StyledPledgeWidget>
        <div>
          {this.state.projectRewards.map((reward) => (
            <RewardTier key={`${this.state.projectId}${reward.id}`} reward={reward} />
          ))}
        </div>
      </div>
    );
  }

}

const StyledHeader = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: 26px;
`;

const StyledPledgeWidget = styled.div`
  margin-bottom: 20px;
  width: 20%;
  border: solid 1px;
  padding: 1%;

  :hover {
    cursor: pointer;
  }
`;

export default App;
