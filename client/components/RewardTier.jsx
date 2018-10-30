import React from 'react';

const RewardTier = () => (
  <div className='rewardTier'>
    <div className='pledgeAmount'>Pledge US$ 25 or more</div>
    <div className='rewardName'>Reward Name</div>
    <div className='rewardDesc'>Description</div>
    <div className='rewardItems'>
      <ul>
        <li>Reward Item 1</li>
        <li>Reward Item 2</li>
        <li>Reward Item 3</li>
      </ul>
    </div>
    <div className='estDeliv'>Est Deliv</div>
    <div className='shipsTo'>Ships To</div>
    <div className='backers'>No. of backers</div>
  </div>
);

export default RewardTier;
