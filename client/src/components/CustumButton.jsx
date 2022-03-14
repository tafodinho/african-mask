
import * as React from 'react';
import { Button } from 'antd';
// type Props = {
  
// };
export const CustomButton = ({type, children, onClickEvent}) => {
  return (
    <div className="custom-button">
      {}
      <Button type="default" className={type} onClick={onClickEvent}>
        {children}
      </Button>
    </div>
  );
};