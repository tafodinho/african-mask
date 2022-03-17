import * as React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { AccountNav } from './AccountNav';
// type Props = {
  
// };
export const Header = ({leftPaneRef}) => {
  const [navbar, setNavbar] = React.useState();

  const changeBackground = () => {
    if (leftPaneRef.current.scrollTop >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  React.useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    leftPaneRef.current.addEventListener("scroll", changeBackground)
  })


  return (
    <div className={navbar ? "header background" : "header"}>
      <Logo />
      <Navigation />
      <AccountNav />
    </div>
  );
};