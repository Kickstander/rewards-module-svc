import React from 'react';
import axios from 'axios';
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
        <h1>Support</h1>
        <div className='pledgeWidget'>
          <PledgeWidget />
        </div>
        <div>
          {this.state.projectRewards.map((reward) => (
            <RewardTier key={`${this.state.projectId}${reward.id}`} reward={reward} />
          ))}
        </div>
      </div>
    );
  }

}

export default App;
