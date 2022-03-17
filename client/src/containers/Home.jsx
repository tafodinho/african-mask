
import * as React from 'react';
import { 
  Row, 
  Col,
} from 'antd';


import { CustomButton } from '../components/CustumButton';
import { BidTable } from '../components/BidTable';

import BidImage from '../assets/images/bid-image1.png';
import { ImageSlider } from '../components/ImageSlider';
// type Props = {
  
// };
// type State = {
  
// };
export const Home = ({leftPaneRef}) => {
    return (
      <div className="homepage">
        <Row className="home-row">
          <Col flex={3} className="left-pane" ref={leftPaneRef}>
            <p className="big-title">Discover the lagest African Digital Art Showcase</p>
            <p className="sub-title">The worlds largest african digital art marketplace for crypto collectibles and non-fungible tokesn (NFTs).</p>
            <CustomButton type="dark">Explore</CustomButton>
            <ImageSlider />
          </Col>
          <Col flex={2} className="right-pane">
            <div className="bid-image-container">
              <img src={BidImage} style={{ width: 500 }} />
            </div>
            <BidTable />
          </Col>
        </Row>
      </div>
    );
};