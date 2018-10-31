import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  position: relative;
  width: 20%;
  border: solid 1px;
  margin-bottom: 20px;
`;

const Overlay = styled.div`
background-color: rgba(0, 158, 116, 0.0);
color: rgba(255, 255, 255, 0.0);
position: absolute;
top: 0;
width: 100%;
height: 100%;

:hover {
  background-color: rgba(0, 158, 116, 0.75);
  color: rgba(255, 255, 255, 1.0);
}
`;

class RewardTier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'default'
    };

    this.handleWidgetClick = this.handleWidgetClick.bind(this);
  }

  handleWidgetClick(e) {
    //some shit
    console.log(e.target);
  }

  render() {
    return (
      <Wrapper>
        <div id={`${this.props.reward.id}`} className='rewardTier' onClick={this.handleWidgetClick}>
          <div className='pledgeAmount'>Pledge US$ {this.props.reward.pledgeAmount} or more</div>
          <div className='rewardName'>{this.props.reward.name}</div>
          <div className='rewardDesc'>{this.props.reward.description}</div>
          <div className='rewardItems'>
            INCLUDES:
            <ul>
              <li>{this.props.reward.item1}</li>
              <li>{this.props.reward.item2}</li>
              <li>{this.props.reward.item3}</li>
            </ul>
          </div>
          <div className='estDeliv'>ESTIMATED DELIVERY {this.props.reward.estDeliv}</div>
          <div className='shipsTo'>SHIPS TO {this.props.reward.shipsTo}</div>
          <div className='backers'>{this.props.reward.backers} backers</div>
        </div>
        <Overlay>Select this reward</Overlay>
      </Wrapper>
    );
  }
}

export default RewardTier;
