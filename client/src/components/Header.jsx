import * as React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { AccountNav } from './AccountNav';
// type Props = {
  
// };
export const Header = ({}) => {
  return (
    <div className="header">
      <Logo />
      <Navigation />
      <AccountNav />
    </div>
  );
};