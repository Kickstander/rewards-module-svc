import React from 'react';
import styled from 'styled-components';
import MiniPledgeForm from './MiniPledgeForm.jsx';

class RewardTier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'default'
    };

    this.handleWidgetClick = this.handleWidgetClick.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  handleWidgetClick() {
    this.setState({
      view: 'clicked'
    });
  }

  renderView() {
    let {view} = this.state;
    if (view === 'clicked') {
      return (
        <StyledMiniPledgeForm>
          <MiniPledgeForm projectId={this.props.reward.id} pledgeAmount={this.props.reward.pledgeAmount}/>
        </StyledMiniPledgeForm>
      );
    }
  }

  render() {
    return (
      <RewardWrapper>
        <TierWrapper id={`${this.props.reward.id}`} className='rewardTier'>
          <TitleWrapper className='pledgeAmount'>Pledge US$ {this.props.reward.pledgeAmount} or more</TitleWrapper>
          <RewardName className='rewardName'>{this.props.reward.name}</RewardName>
          <RewardDesc className='rewardDesc'>{this.props.reward.description}</RewardDesc>
          <div className='rewardItems'>
            <GenericWrapper>INCLUDES:</GenericWrapper>
            <ul>
              <ListWrapper>{this.props.reward.item1}</ListWrapper>
              <ListWrapper>{this.props.reward.item2}</ListWrapper>
              <ListWrapper>{this.props.reward.item3}</ListWrapper>
            </ul>
          </div>
          <div className='estDeliv'>
            <GenericWrapper>ESTIMATED DELIVERY</GenericWrapper>
            <ContentWrapper>{this.props.reward.estDeliv}</ContentWrapper>
          </div>
          <div className='shipsTo'>
            <GenericWrapper>SHIPS TO</GenericWrapper>
            <ContentWrapper>{this.props.reward.shipsTo}</ContentWrapper>
          </div>
          <GenericWrapper className='backers'>{this.props.reward.backers} backers</GenericWrapper>
        </TierWrapper>
        <Overlay onClick={this.handleWidgetClick}>Select this reward</Overlay>
        {this.renderView()}
      </RewardWrapper>
    );
  }
}

// styled components for RewardTier component
const RewardWrapper = styled.div`
  position: relative;
  width: 18%;
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
  font-size: 18px;
  font-family: 'Barlow', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: rgba(0, 158, 116, 0.75);
    color: rgba(255, 255, 255, 1.0);
    cursor: pointer;
  }
`;

const StyledMiniPledgeForm = styled.div`
  margin: 15px;
`;

const TierWrapper = styled.div`
  margin: 15px;
`;

const TitleWrapper = styled.div`
  font-family: 'Barlow', sans-serif;
  font-size: 22px;
`;

const RewardName = styled.div`
  font-family: 'Barlow', sans-serif;
  font-size: 20px;
  margin-top: 15px;
`;

const RewardDesc = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  margin-top: 10px;
`;

const ListWrapper = styled.li`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
`;

const GenericWrapper = styled.div`
  font-family: 'Raleway', sans-serif;
  font-size: 10px;
  margin-top: 10px;
`;

const ContentWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
`;

export default RewardTier;
