import React from 'react';
import styled from 'styled-components';
import MiniPledgeForm from './MiniPledgeForm.jsx';

class RewardTier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      limited: false,
    };

    this.handleWidgetClick = this.handleWidgetClick.bind(this);
    this.checkLimited = this.checkLimited.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  componentDidMount() {
    this.checkLimited();
  }

  handleWidgetClick() {
    this.setState({
      clicked: true,
    });
  }

  checkLimited() {
    const { reward } = this.props;
    if (reward.isLimited) {
      this.setState({
        limited: true,
      });
    }
  }

  renderLimited() {
    const { limited } = this.state;
    const { reward } = this.props;

    if (limited === true) {
      const leftover = reward.limitCount - reward.backers;

      return (
        <DivWrapper>
          {`Limited (${leftover} left of ${reward.limitCount})`}
        </DivWrapper>
      );
    }
  }

  renderView() {
    const { clicked } = this.state;
    const { reward } = this.props;

    if (clicked === false) {
      return (
        <Overlay onClick={this.handleWidgetClick}>Select this reward</Overlay>
      );
    }
    if (clicked === true) {
      return (
        <DivWrapper>
          <MiniPledgeForm reward={reward} />
        </DivWrapper>
      );
    }
  }

  render() {
    const { reward } = this.props;

    return (
      <RewardWrapper>
        <DivWrapper id={`${reward.id}`} className="rewardTier">
          <TitleWrapper className="pledgeAmount">
            {`Pledge US$ ${reward.pledgeAmount} or more`}
          </TitleWrapper>
          <RewardName className="rewardName">{reward.name}</RewardName>
          <RewardDesc className="rewardDesc">{reward.description}</RewardDesc>
          <div className="rewardItems">
            <GenericWrapper>INCLUDES:</GenericWrapper>
            <ul>
              <ListWrapper>{reward.item1}</ListWrapper>
              <ListWrapper>{reward.item2}</ListWrapper>
              <ListWrapper>{reward.item3}</ListWrapper>
            </ul>
          </div>
          <EstDelivWrapper className="estDeliv">
            <GenericWrapper>ESTIMATED DELIVERY</GenericWrapper>
            <ContentWrapper>{reward.estDeliv}</ContentWrapper>
          </EstDelivWrapper>
          <ShipsWrapper className="shipsTo">
            <GenericWrapper>SHIPS TO</GenericWrapper>
            <ContentWrapper>{reward.shipsTo}</ContentWrapper>
          </ShipsWrapper>
          {this.renderLimited()}
          <GenericWrapper className="backers">
            {`${reward.backers} backers`}
          </GenericWrapper>
        </DivWrapper>
        {this.renderView()}
      </RewardWrapper>
    );
  }
}

// styled components for RewardTier component
const RewardWrapper = styled.div`
  position: relative;
  width: 22%;
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

const DivWrapper = styled.div`
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

const EstDelivWrapper = styled.div`
  display: inline-block;
`;

const ShipsWrapper = styled.div`
  margin-left: 15%;
  display: inline-block;
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
