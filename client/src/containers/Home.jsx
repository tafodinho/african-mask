
import * as React from 'react';
import { 
  Row, 
  Col,  
  Card,
  Image
} from 'antd';
import { 
  ArrowLeftOutlined, 
  ArrowRightOutlined,
  ArrowUpOutlined,
} from '@ant-design/icons'

import { CustomButton } from '../components/CustumButton';
import { BidTable } from '../components/BidTable';

import Image1  from '../assets/images/6.png';
import Image2 from '../assets/images/2.png';
import Image3 from '../assets/images/5.png';
import BidImage from '../assets/images/bid-image1.png';
// type Props = {
  
// };
// type State = {
  
// };
export class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Row className="home-row">
          <Col flex={3} className="left-pane">
            <p className="big-title">Discover the lagest African Digital Art Showcase</p>
            <p className="sub-title">The worlds largest african digital art marketplace for crypto collectibles and non-fungible tokesn (NFTs).</p>
            <CustomButton type="dark">Explore</CustomButton>
            <div className="art-display">
              <div className="art-display-header">
                <p className="art-display-title">Featured ArtWork</p>
                <div className="art-display-nav">
                  <ArrowLeftOutlined />
                  <ArrowRightOutlined />
                </div>
              </div>
              <div className="art-area">
                <Row>
                  <Col span={8}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src={Image1} />}
                    >
                      {/* <Card.Meta title="Europe Street beat" description="www.instagram.com" /> */}
                      <div className="image-icon">
                        <ArrowUpOutlined />
                      </div>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src={Image2} />}
                    >
                      <div className="image-icon">
                        <ArrowUpOutlined />
                      </div>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<Image alt="example" src={Image3} />}
                    >
                      <div className="image-icon">
                        <ArrowUpOutlined />
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
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
};