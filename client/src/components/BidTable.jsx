import * as React from 'react';
import { Avatar, Image } from 'antd';
import { CustomBottun, CustomButton } from './/CustumButton';
// type Props = {
  
// };
export function BidTable({}) {
  return (
    <div className="bid-table">
      <div className="bid-table-header">
        <div className="bid-table-header-left">
         <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: "3em" }} />} />
        </div>
        <div className="bid-table-header-right">
          <p className="user-title">Hemes God Bust</p>
          <p className="user-username">@Michail Kolonis</p>
        </div>
      </div>
      <div className="bid-table-body">
        <div className="bid-table-body-left">
          <p className="current-bid">Current Bid</p>
          <p className="price-eth">6.00 ETH</p>
          <p className="price-dollar">$12.459.47</p>
        </div>
        <div className="bid-table-body-right">
          <p className="remaining-time">Remaining Time</p>
          <p className="time">
            02  23  45
          </p>
          <p className="hours-mins-secs">Hours  Minutes  Seconds</p>
        </div>
      </div>
      <div className="bid-table-footer">
        <div className="bid-table-footer-left">
          <CustomButton type="green">Place a Bid</CustomButton>
        </div>
        <div className="bid-table-footer-right">
          <p className="view-artwork">View Artwork</p>
        </div>
      </div>
    </div>
  );
};