import React from 'react';

const RewardTier = (props) => (
  <div className='rewardTier'>
    <div className='pledgeAmount'>Pledge US$ {props.reward.pledgeAmount} or more</div>
    <div className='rewardName'>{props.reward.name}</div>
    <div className='rewardDesc'>{props.reward.description}</div>
    <div className='rewardItems'>
      INCLUDES:
      <ul>
        <li>{props.reward.item1}</li>
        <li>{props.reward.item2}</li>
        <li>{props.reward.item3}</li>
      </ul>
    </div>
    <div className='estDeliv'>ESTIMATED DELIVERY {props.reward.estDeliv}</div>
    <div className='shipsTo'>SHIPS TO {props.reward.shipsTo}</div>
    <div className='backers'>{props.reward.backers} backers</div>
  </div>
);

export default RewardTier;
