import * as React from 'react';
import { 
  Row,
} from 'antd';
import { 
  ArrowLeftOutlined, 
  ArrowRightOutlined,
} from '@ant-design/icons'

import Image1  from '../assets/images/6.png';
import Image2 from '../assets/images/2.png';
import Image3 from '../assets/images/5.png';
import Image4 from '../assets/images/4.png';
import Image5 from '../assets/images/1.png';
import { ArtCard } from './ArtCard';

export function ImageSlider({items}) {
  const [clickCount, setClickCount] = React.useState(0);
  const mainWrap = React.useRef();
  const containerRef = React.useRef();

  const scrollSlides = (direction) => {

    const width = mainWrap.current.clientWidth;
    let scrollTo;

    const diff = direction === "next" ? 1 : -1;
    const newValue = (clickCount + diff) % (5 / 4);
    setClickCount(newValue);
    scrollTo = width * newValue;
    
    containerRef.current.scrollTo({
      behavior: "smooth",
      left: scrollTo
    });
  };

  return (
    // <div className="image-slider" ref={mainWrap}>
    //   <button onClick={() => scrollSllides("prev")}>Prev</button>
    //   <button onClick={() => scrollSllides("next")}>Next</button>
    //   <div className="slider" ref={containerRef}>
    //     {items?.map((item, index) => (
    //       <ItemComponent key={index} title={item.title} image={item.image} />
    //     ))}
    //   </div>
    // </div>
    <div className="art-display">
      <div className="art-display-header">
        <p className="art-display-title">Featured ArtWork</p>
        <div className="art-display-nav">
          <ArrowLeftOutlined onClick={() => scrollSlides("prev")} />
          <ArrowRightOutlined onClick={() => scrollSlides("next")} />
        </div>
      </div>
      <div className="slider" ref={mainWrap}>
        <Row ref={containerRef}>
          <ArtCard item={Image1} />
          <ArtCard item={Image2} />
          <ArtCard item={Image3} />
          <ArtCard item={Image4} />
          <ArtCard item={Image5} />
        </Row>
      </div>
    </div>
  );
};