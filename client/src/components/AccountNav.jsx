import * as React from 'react';
import { CustomButton } from './CustumButton';
// type Props = {
  
// };
export const AccountNav = ({
  initWallet,
  isLoggedIn
}) => {
  return (
    <div className="account-nav">
      <CustomButton type="green" onClickEvent={initWallet}>{isLoggedIn ? "Remove Wallet" : "Connect Wallet"}</CustomButton>
    </div>
  );
};