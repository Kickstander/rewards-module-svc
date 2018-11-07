import React from 'react';
import styled from 'styled-components';

class PledgeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true,
    });
  }

  renderView() {
    const { clicked } = this.state;
    if (clicked === true) {
      return (
        <div>
          <Continue>Continue</Continue>
        </div>
      );
    }
    return (
      <div />
    );
  }

  render() {
    const { projectId } = this.props;
    const { projectCurrency } = this.props;

    return (
      <div className="pledgeWidget" onClick={this.handleClick}>
        <DivWrapper>Make a pledge without a reward</DivWrapper>
        <form>
          <DivWrapper>
            <CurrencyWrapper htmlFor={`${projectId}pledgeWidget`}>{projectCurrency}</CurrencyWrapper>
            <InputWrapper type="text" id={`${projectId}pledgeWidget`} defaultValue="10" />
          </DivWrapper>
          {this.renderView()}
        </form>
      </div>
    );
  }
}


// styled components for PledgeWidget component
const CurrencyWrapper = styled.label`
  font-size: 14px;
  border: solid 1px;
  border-color: rgb(192, 192, 192);
  display: flex inline-block;
  align-items: center;
  justify-content: center;
  padding-top: 1.8%;
  padding-bottom: 2.1%;
  padding-right: 3%;
  padding-left: 3%;
`;

const InputWrapper = styled.input`
  box-sizing: border-box;
  padding: 1.5%;
  width: 80%;
`;

const DivWrapper = styled.div`
  margin: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
`;

const Continue = styled.button`
  display: flex;
  justify-content: center;
  background-color: rgb(0, 158, 116);
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  width: 95%;
  height: 40px;
  margin-top: 10px;
  color: rgb(255, 255, 255);

  :hover {
    background-color: rgb(3, 115, 98);
    cursor: pointer;
  }
`;

export default PledgeWidget;
