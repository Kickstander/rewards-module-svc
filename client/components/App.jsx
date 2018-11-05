import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RewardTier from './RewardTier.jsx';
import PledgeWidget from './PledgeWidget.jsx';
import LimitedGone from './LimitedGone.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectRewards: [],
      currentProject: null,
      projectCurrency: '',
    };

    this.fetchRewards = this.fetchRewards.bind(this);
    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.renderLimited = this.renderLimited.bind(this);
  }

  componentDidMount() {
    // initial mount with project 1 for now
    // project 10 shows limited awards
    this.fetchRewards(10);
    this.fetchCurrency(10);
  }

  fetchRewards(projectId) {
    axios.get(`http://localhost:3003/api/${projectId}/rewards`)
      .then((res) => {
        this.setState({
          projectRewards: res.data,
          currentProject: projectId,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  fetchCurrency(projectId) {
    axios.get(`http://localhost:3003/api/${projectId}/currency`)
      .then((res) => {
        this.setState({
          projectCurrency: res.data,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  renderLimited() {
    const { projectRewards } = this.state;
    const { currentProject } = this.state;
    const { projectCurrency } = this.state;
    const limitedRewards = projectRewards.filter(reward => (
      (reward.limitCount !== null) && (reward.limitCount === reward.backers)
    ));

    if (limitedRewards.length) {
      return (
        <div>
          <StyledHeader>
            All gone!
          </StyledHeader>
          {limitedRewards.map(reward => (
            <LimitedGone key={`${currentProject}${reward.id}`} reward={reward} projectCurrency={projectCurrency} />
          ))}
        </div>
      );
    }
    return (
      <div />
    );
  }

  render() {
    let { projectRewards } = this.state;
    const { currentProject } = this.state;
    const { projectCurrency } = this.state;

    projectRewards = projectRewards.filter(reward => (
      (reward.limitCount === null || reward.limitCount !== reward.backers)
    ));

    return (
      <div>
        <StyledHeader>Support</StyledHeader>
        <StyledPledgeWidget className="pledgeWidget">
          <PledgeWidget projectId={currentProject} projectCurrency={projectCurrency} />
        </StyledPledgeWidget>
        <div>
          {projectRewards.map(reward => (
            <RewardTier key={`${currentProject}${reward.id}`} reward={reward} projectCurrency={projectCurrency} />
          ))}
        </div>
        {this.renderLimited()}
      </div>
    );
  }
}

// styled components for App component
const StyledHeader = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: 26px;
  margin-left: 5px;
`;

const StyledPledgeWidget = styled.div`
  margin-bottom: 20px;
  width: 18%;
  border: solid 1px;
  padding: 1%;

  :hover {
    cursor: pointer;
  }
`;

export default App;
