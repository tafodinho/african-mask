import * as React from 'react';
import { 
  Col,  
  Card,
} from 'antd';
import { 
  ArrowUpOutlined,
} from '@ant-design/icons'

export function ArtCard({item}) {
  return (
    <Col span={8} className="art-card">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={item} />}
      >
        {/* <Card.Meta title="Europe Street beat" description="www.instagram.com" /> */}
        <div className="image-icon">
          <ArrowUpOutlined />
        </div>
      </Card>
    </Col>
  );
};